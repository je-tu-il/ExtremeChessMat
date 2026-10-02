'use strict';

class ChessAI {
  // Evaluate position from black's perspective (higher = better for black)
  evaluate(board) {
    if (board.isCheckmate('black')) return -1e8;
    if (board.isStalemate('black')) return 1e8; // Black loves stalemate!

    const bk = board.kingPos.black;
    const r = Board.rank(bk), f = Board.file(bk);

    // Prefer center squares (avoid edges and corners)
    const edgeDist = Math.min(r, 7 - r, f, 7 - f); // 0=edge, 3=center

    // Mobility: number of legal moves
    const mobility = board.allLegalMoves('black').length;

    // Material count of white pieces (fewer white pieces is a HUGE win for Black -> automatic draw!)
    let whitePiecesCount = 0;
    for (let sq = 0; sq < 64; sq++) {
      const p = board.cells[sq];
      if (p && p !== 'WK' && p !== 'BK') {
        whitePiecesCount++;
      }
    }
    // If White has fewer than 2 minor pieces, Black has secured an unavoidable draw!
    const materialAdvantage = (2 - whitePiecesCount) * 50000;

    // Count white-controlled squares adjacent to black king
    const wAtk = board.attackedSquares('white');
    let pressure = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let df = -1; df <= 1; df++) {
        if (!dr && !df) continue;
        const nr = r + dr, nf = f + df;
        if (Board.ok(nr, nf) && wAtk.has(Board.rf(nr, nf))) pressure++;
      }
    }

    return materialAdvantage + edgeDist * 25 + mobility * 12 - pressure * 8;
  }

  // Alpha-beta minimax
  minimax(board, depth, alpha, beta, maximizing) {
    if (board.isCheckmate('black')) return maximizing ? -1e8 - depth * 500 : -1e8 + depth * 500;
    if (board.isStalemate('black')) return 1e8;
    if (depth === 0) return this.evaluate(board);

    if (maximizing) {
      // Black's turn: maximize
      const moves = board.allLegalMoves('black');
      if (!moves.length) return this.evaluate(board);
      let best = -Infinity;
      for (const m of moves) {
        const s = this.minimax(board.applyMove(m.from, m.to), depth - 1, alpha, beta, false);
        if (s > best) best = s;
        if (best > alpha) alpha = best;
        if (beta <= alpha) break;
      }
      return best;
    } else {
      // White's turn: minimize (assume white plays best)
      const moves = board.allLegalMoves('white');
      if (!moves.length) return this.evaluate(board);
      let best = Infinity;
      for (const m of moves) {
        const s = this.minimax(board.applyMove(m.from, m.to), depth - 1, alpha, beta, true);
        if (s < best) best = s;
        if (best < beta) beta = best;
        if (beta <= alpha) break;
      }
      return best;
    }
  }

  getBestMove(board, depth = 3) {
    const moves = board.allLegalMoves('black');
    if (!moves.length) return null;

    // Check if black can capture an unprotected white piece immediately!
    for (const m of moves) {
      const targetPiece = board.cells[m.to];
      if (targetPiece && targetPiece !== 'WK') {
        const nb = board.applyMove(m.from, m.to);
        // If taking it gives stalemate or eliminates white's mating material, it's instant win/draw for black!
        return m;
      }
    }

    // Shuffle for variety at equal scores
    const shuffled = [...moves].sort(() => Math.random() - 0.5);
    let bestMove = shuffled[0];
    let bestScore = -Infinity;

    for (const m of shuffled) {
      const nb = board.applyMove(m.from, m.to);
      const s = this.minimax(nb, depth - 1, -Infinity, Infinity, false);
      if (s > bestScore) {
        bestScore = s;
        bestMove = m;
      }
    }
    return bestMove;
  }
  // Evaluate position from white's perspective (higher = better for white, driving black to mate)
  evaluateWhite(board, endgame = null) {
    if (board.isCheckmate('black')) return 1e8;
    if (board.isStalemate('black')) return -1e8; // White avoids stalemate

    const bk = board.kingPos.black;
    const wk = board.kingPos.white;
    const br = Board.rank(bk), bf = Board.file(bk);
    const wr = Board.rank(wk), wf = Board.file(wk);

    // Distance between kings (White king should get closer to cut off squares)
    const kingDist = Math.abs(br - wr) + Math.abs(bf - wf);

    // Black mobility (fewer legal moves for black is better for white)
    const blackMobility = board.allLegalMoves('black').length;

    // Corner targeting logic
    // Coordinates:
    // a1=(0,0) dark (0+0=0)
    // h1=(0,7) light (0+7=7)
    // a8=(7,0) light (7+0=7)
    // h8=(7,7) dark (7+7=14)
    let targetCorners = [[0,0], [7,7], [0,7], [7,0]]; // default any corner
    if (endgame === 'KBN') {
      let bishopSq = -1;
      for (let sq = 0; sq < 64; sq++) {
        if (board.cells[sq] === 'WB') { bishopSq = sq; break; }
      }
      if (bishopSq !== -1) {
        const isLight = (Board.rank(bishopSq) + Board.file(bishopSq)) % 2 === 1;
        // White light corners: a8 (7,0) and h1 (0,7)
        // Dark corners: a1 (0,0) and h8 (7,7)
        targetCorners = isLight ? [[7,0], [0,7]] : [[0,0], [7,7]];
      }
    }

    // Min distance of black king to target corners
    let minCornerDist = Infinity;
    for (const [cr, cf] of targetCorners) {
      const d = Math.abs(br - cr) + Math.abs(bf - cf);
      if (d < minCornerDist) minCornerDist = d;
    }

    // Distance of black king to edges (0=edge, 3=center)
    const blackEdgeDist = Math.min(br, 7 - br, bf, 7 - bf);

    // Distance of white king to black king:
    // White king needs to be close (2 to 3 squares ideally, not too far)
    const kingCloseness = Math.max(0, 10 - kingDist);

    // Controlled squares around black king
    const wAtk = board.attackedSquares('white');
    let pressure = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let df = -1; df <= 1; df++) {
        if (!dr && !df) continue;
        const nr = br + dr, nf = bf + df;
        if (Board.ok(nr, nf) && wAtk.has(Board.rf(nr, nf))) pressure++;
      }
    }

    // For KBB (Two bishops), coordination bonus: bishops close together and covering adjacent diagonals
    let bishopCoord = 0;
    if (endgame === 'KBB') {
      const bishops = [];
      for (let sq = 0; sq < 64; sq++) {
        if (board.cells[sq] === 'WB') bishops.push(sq);
      }
      if (bishops.length === 2) {
        const dR = Math.abs(Board.rank(bishops[0]) - Board.rank(bishops[1]));
        const dF = Math.abs(Board.file(bishops[0]) - Board.file(bishops[1]));
        // Adjacent or nearby bishops work best
        if (dR <= 2 && dF <= 2) bishopCoord += 35;
      }
    }

    // Giving non-mating check is bad unless it drives king closer to target corner
    const checkPenalty = board.inCheck('black') && blackMobility > 1 ? -15 : 0;

    // Heavy penalty if any white piece is hanging / unprotected!
    const bAtk = board.attackedSquares('black');
    let hangingPenalty = 0;
    let whitePieces = 0;
    for (let sq = 0; sq < 64; sq++) {
      const p = board.cells[sq];
      if (p && p !== 'WK' && p !== 'BK') {
        whitePieces++;
        if (bAtk.has(sq)) {
          // White piece is under attack by black king
          hangingPenalty += 50000;
        }
      }
    }
    // For KNN (Two knights): drive black king to any corner!
    // Knights work best when they control adjacent escape squares and don't block each other.
    let knightCoord = 0;
    if (endgame === 'KNN') {
      const knights = [];
      for (let sq = 0; sq < 64; sq++) {
        if (board.cells[sq] === 'WN') knights.push(sq);
      }
      if (knights.length === 2) {
        const dR = Math.abs(Board.rank(knights[0]) - Board.rank(knights[1]));
        const dF = Math.abs(Board.file(knights[0]) - Board.file(knights[1]));
        // Two knights should be harmoniously positioned (dist 2-3 squares)
        const knDist = dR + dF;
        if (knDist >= 2 && knDist <= 4) knightCoord += 40;
      }
      // Distance of knights to black king: should be in jumping range (2-3 squares away to restrict moves)
      for (const ksq of knights) {
        const distToBK = Math.abs(Board.rank(ksq) - br) + Math.abs(Board.file(ksq) - bf);
        if (distToBK === 2 || distToBK === 3) knightCoord += 25;
      }
    }

    return (
      (3 - blackEdgeDist) * 80 +
      (14 - minCornerDist) * 110 +
      kingCloseness * 45 +
      pressure * 25 +
      bishopCoord +
      knightCoord +
      checkPenalty -
      hangingPenalty -
      blackMobility * 30
    );
  }

  // Minimax from white's perspective to find best move for white
  minimaxWhite(board, depth, alpha, beta, maximizing, endgame = null) {
    if (board.isCheckmate('black')) return maximizing ? (1e8 + depth * 1000) : -(1e8 + depth * 1000);
    if (board.isStalemate('black')) return -1e8; // Terrible for white
    if (depth === 0) return this.evaluateWhite(board, endgame);

    if (maximizing) {
      // White to move: maximize score
      const moves = board.allLegalMoves('white');
      if (!moves.length) return -1e8;

      let best = -Infinity;
      for (const m of moves) {
        const nb = board.applyMove(m.from, m.to);
        if (nb.isStalemate('black')) continue; // don't consider stalemates
        const s = this.minimaxWhite(nb, depth - 1, alpha, beta, false, endgame);
        if (s > best) best = s;
        if (best > alpha) alpha = best;
        if (beta <= alpha) break;
      }
      return best === -Infinity ? -1e8 : best;
    } else {
      // Black to move: minimize white's advantage (Black will aggressively take free pieces or seek stalemate!)
      const moves = board.allLegalMoves('black');
      if (!moves.length) {
        return board.inCheck('black') ? (1e8 + depth * 1000) : -1e8;
      }
      let best = Infinity;
      for (const m of moves) {
        const nb = board.applyMove(m.from, m.to);
        const s = this.minimaxWhite(nb, depth - 1, alpha, beta, true, endgame);
        if (s < best) best = s;
        if (best < beta) beta = best;
        if (beta <= alpha) break;
      }
      return best;
    }
  }

  getBestWhiteMove(board, endgame = null, depth = 4) {
    const moves = board.allLegalMoves('white');
    if (!moves.length) return null;

    // Direct checkmate priority check!
    for (const m of moves) {
      const nb = board.applyMove(m.from, m.to);
      if (nb.isCheckmate('black')) return { ...m, score: 1e9, isMate: true };
    }

    let bestMove = moves[0];
    let bestScore = -Infinity;

    for (const m of moves) {
      const nb = board.applyMove(m.from, m.to);
      if (nb.isStalemate('black')) continue; // Never choose stalemate!
      const s = this.minimaxWhite(nb, depth - 1, -Infinity, Infinity, false, endgame);
      if (s > bestScore) {
        bestScore = s;
        bestMove = m;
      }
    }
    return { ...bestMove, score: bestScore };
  }

  // Syzygy tablebase query with local memory caching
  async fetchSyzygyMove(board, color = 'white') {
    const turn = color === 'white' ? 'w' : 'b';
    const fen = board.toFen(turn);

    if (!this.tablebaseCache) this.tablebaseCache = new Map();
    if (this.tablebaseCache.has(fen)) {
      return this.tablebaseCache.get(fen);
    }

    try {
      const url = `https://tablebase.lichess.ovh/standard?fen=${encodeURIComponent(fen)}`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      if (!data || !data.moves || data.moves.length === 0) return null;

      // For winning endgames like KBB and KBN, Syzygy returns category 'loss' for opponent (win for white).
      // For KNN, Syzygy always returns 'draw' for ALL moves! A pure 'draw' tablebase move just shuffles pieces.
      // If the position is a theoretical draw in Syzygy (like KNN), fallback to local heuristic which actually pushes toward mate!
      if (color === 'white' && (data.category === 'draw' || data.category === 'unknown')) {
        return null; // Fallback to our active mating engine for KNN!
      }

      // Select move with fastest mate / highest category
      const bestMove = data.moves[0];
      if (bestMove && bestMove.uci) {
        const fromSq = bestMove.uci.substring(0, 2);
        const toSq = bestMove.uci.substring(2, 4);
        const result = {
          from: Board.sqToIdx(fromSq),
          to: Board.sqToIdx(toSq),
          san: bestMove.san,
          dtm: bestMove.dtm,
          dtz: bestMove.dtz,
          category: bestMove.category,
          source: 'syzygy',
        };
        this.tablebaseCache.set(fen, result);
        return result;
      }
    } catch (e) {
      // Offline fallback
      return null;
    }
    return null;
  }
}

const chessAI = new ChessAI();
