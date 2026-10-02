'use strict';

// ===== PIECE DEFINITIONS =====
const PIECES = {
  'WK': { color: 'white', type: 'king',   sym: '♔' },
  'WB': { color: 'white', type: 'bishop', sym: '♗' },
  'WN': { color: 'white', type: 'knight', sym: '♘' },
  'BK': { color: 'black', type: 'king',   sym: '♚' },
};

// ===== BOARD =====
class Board {
  constructor() {
    this.cells = new Array(64).fill(null);
    this.kingPos = { white: -1, black: -1 };
  }

  // 'a1'=0, 'h8'=63
  static sqToIdx(sq) {
    return (parseInt(sq[1]) - 1) * 8 + (sq.charCodeAt(0) - 97);
  }

  static idxToSq(i) {
    return String.fromCharCode(97 + i % 8) + (Math.floor(i / 8) + 1);
  }

  static rank(i) { return Math.floor(i / 8); }
  static file(i) { return i % 8; }
  static rf(r, f) { return r * 8 + f; }
  static ok(r, f) { return r >= 0 && r < 8 && f >= 0 && f < 8; }

  clone() {
    const b = new Board();
    b.cells = [...this.cells];
    b.kingPos = { ...this.kingPos };
    return b;
  }

  // config: { 'WK':'e1', 'WB':'c1', 'WB2':'f1', 'BK':'e8' }
  setup(config) {
    this.cells = new Array(64).fill(null);
    this.kingPos = { white: -1, black: -1 };
    for (const [rawKey, sq] of Object.entries(config)) {
      const key = rawKey.replace(/\d+$/, ''); // 'WB2' -> 'WB'
      if (!PIECES[key]) continue;
      const idx = Board.sqToIdx(sq);
      this.cells[idx] = key;
      if (key === 'WK') this.kingPos.white = idx;
      if (key === 'BK') this.kingPos.black = idx;
    }
    return this;
  }

  // Convert current board position to standard FEN string
  toFen(turnColor = 'w') {
    const fenPieces = {
      'WK': 'K', 'WB': 'B', 'WN': 'N',
      'BK': 'k'
    };
    let fen = '';
    for (let r = 7; r >= 0; r--) {
      let empty = 0;
      for (let f = 0; f < 8; f++) {
        const p = this.cells[Board.rf(r, f)];
        if (!p) {
          empty++;
        } else {
          if (empty > 0) { fen += empty; empty = 0; }
          fen += fenPieces[p] || '';
        }
      }
      if (empty > 0) fen += empty;
      if (r > 0) fen += '/';
    }
    fen += ` ${turnColor} - - 0 1`;
    return fen;
  }

  pseudoMoves(from) {
    const p = this.cells[from];
    if (!p || !PIECES[p]) return [];
    const { type, color } = PIECES[p];
    const r = Board.rank(from), f = Board.file(from);
    const res = [];

    if (type === 'king') {
      for (let dr = -1; dr <= 1; dr++) {
        for (let df = -1; df <= 1; df++) {
          if (!dr && !df) continue;
          const nr = r + dr, nf = f + df;
          if (!Board.ok(nr, nf)) continue;
          const to = Board.rf(nr, nf);
          const t = this.cells[to];
          if (t && PIECES[t] && PIECES[t].color === color) continue;
          res.push(to);
        }
      }
    } else if (type === 'bishop') {
      for (const [dr, df] of [[-1,-1],[-1,1],[1,-1],[1,1]]) {
        let nr = r + dr, nf = f + df;
        while (Board.ok(nr, nf)) {
          const to = Board.rf(nr, nf);
          const t = this.cells[to];
          if (t) { if (PIECES[t] && PIECES[t].color !== color) res.push(to); break; }
          res.push(to);
          nr += dr; nf += df;
        }
      }
    } else if (type === 'knight') {
      for (const [dr, df] of [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]]) {
        const nr = r + dr, nf = f + df;
        if (!Board.ok(nr, nf)) continue;
        const to = Board.rf(nr, nf);
        const t = this.cells[to];
        if (t && PIECES[t] && PIECES[t].color === color) continue;
        res.push(to);
      }
    }
    return res;
  }

  isAttacked(sq, byColor) {
    for (let from = 0; from < 64; from++) {
      const p = this.cells[from];
      if (!p || !PIECES[p] || PIECES[p].color !== byColor) continue;
      if (this.pseudoMoves(from).includes(sq)) return true;
    }
    return false;
  }

  applyMove(from, to) {
    const nb = this.clone();
    const piece = nb.cells[from];
    nb.cells[from] = null;
    nb.cells[to] = piece;
    if (piece === 'WK') nb.kingPos.white = to;
    if (piece === 'BK') nb.kingPos.black = to;
    return nb;
  }

  legalMoves(from) {
    const p = this.cells[from];
    if (!p || !PIECES[p]) return [];
    const color = PIECES[p].color;
    const enemy = color === 'white' ? 'black' : 'white';
    return this.pseudoMoves(from).filter(to => {
      const nb = this.applyMove(from, to);
      return !nb.isAttacked(nb.kingPos[color], enemy);
    });
  }

  allLegalMoves(color) {
    const moves = [];
    for (let sq = 0; sq < 64; sq++) {
      const p = this.cells[sq];
      if (!p || !PIECES[p] || PIECES[p].color !== color) continue;
      for (const to of this.legalMoves(sq)) moves.push({ from: sq, to });
    }
    return moves;
  }

  inCheck(color) {
    const kp = this.kingPos[color];
    if (kp < 0) return false;
    return this.isAttacked(kp, color === 'white' ? 'black' : 'white');
  }

  isCheckmate(color) { return this.inCheck(color) && this.allLegalMoves(color).length === 0; }
  isStalemate(color) { return !this.inCheck(color) && this.allLegalMoves(color).length === 0; }

  attackedSquares(color) {
    const set = new Set();
    for (let from = 0; from < 64; from++) {
      const p = this.cells[from];
      if (!p || !PIECES[p] || PIECES[p].color !== color) continue;
      for (const sq of this.pseudoMoves(from)) set.add(sq);
    }
    return set;
  }
}
