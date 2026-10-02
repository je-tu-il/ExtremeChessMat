'use strict';

// =====================================================================
// LESSONS & TUTORIALS DATA (COURS AMÉLIORÉS ET DÉTAILLÉS)
// =====================================================================
const TUTORIALS = {
  KBB: {
    name: 'Roi + 2 Fous vs Roi',
    icon: '♗♗',
    color: '#60a5fa',
    difficulty: 2,
    steps: [
      {
        config: { WK: 'e1', WB: 'c1', WB2: 'f1', BK: 'e8' },
        title: '1. Le principe fondamental',
        text: 'Les deux Fous opèrent toujours sur des couleurs complémentaires (cases blanches et cases noires). Côte à côte, ils forment un <strong>mur infranchissable</strong> pour le roi adverse.<br><br>💡 <strong>Objectif global :</strong> rétrécir ce que l\'on appelle la <em>"boîte"</em> (le filet) pour repousser le roi noir dans un coin.',
        from: null, to: null,
      },
      {
        config: { WK: 'e2', WB: 'd3', WB2: 'e3', BK: 'e7' },
        title: '2. Créer le mur de Fous',
        text: 'En plaçant les deux Fous sur deux cases adjacentes (ex: d3 et e3), ils contrôlent une immense double diagonale. Le roi noir ne peut plus avancer vers le centre !<br><br>Avancez votre Fou pour couper encore plus d\'échappatoires.',
        from: 'e3', to: 'f4',
        label: 'Fe3→f4 : verrouille la diagonale c1-h6',
      },
      {
        config: { WK: 'e3', WB: 'd4', WB2: 'f4', BK: 'e7' },
        title: '3. Le rôle indispensable du Roi',
        text: 'Les deux Fous seuls ne peuvent pas mater : <strong>le roi blanc doit impérativement monter</strong> pour contrôler les cases restantes et protéger ses Fous.<br><br>Faites monter votre roi pour resserrer la cage !',
        from: 'e3', to: 'e4',
        label: 'Re3→e4 : le roi avance au contact',
      },
      {
        config: { WK: 'e5', WB: 'c5', WB2: 'e6', BK: 'c8' }, // c5 (dark), e6 (light: 5+4=9)
        title: '4. Repousser vers la bande',
        text: 'Les Fous c5 et e6 coupent les diagonales clés tandis que le roi e5 prive le roi noir des cases de repli d6 et f6. Le roi noir est forcé de reculer vers la 8e rangée.',
        from: 'e5', to: 'd6',
        label: 'Re5→d6 : réduit l\'espace à la dernière rangée',
      },
      {
        config: { WK: 'd6', WB: 'b6', WB2: 'e6', BK: 'b8' }, // b6 (light: 5+1=6 dark? 5+1=6 dark, e6: 5+4=9 light)
        title: '5. Guider vers l\'angle',
        text: 'Le roi adverse est sur la 8e rangée. Maintenant, on l\'amène vers l\'angle (a8 ou h8) par de petits coups de Fous et de Roi alternés.',
        from: 'd6', to: 'c7',
        label: 'Rd6→c7 : chasse le roi vers a8',
      },
      {
        config: { WK: 'c7', WB: 'b6', WB2: 'c6', BK: 'a8' }, // b6 (dark), c6 (light)
        title: '6. ⚠️ Le piège mortel : LE PAT',
        text: '<strong>ATTENTION DANGER :</strong> En a8, le roi noir est acculé. Si vous jouiez par réflexe <em>Fc6-b7</em>, le roi noir n\'a <strong>plus aucun coup légal mais n\'est pas en échec</strong> : c\'est le <strong>PAT (nulle)</strong> !<br><br>💡 <em>Règle d\'or :</em> Ne touchez pas à sa case de fuite tant que vous ne donnez pas échec ! Donnez d\'abord un coup d\'attente ou un échec contrôlé.',
        from: null, to: null,
        warning: true,
      },
      {
        config: { WK: 'g6', WB: 'd4', WB2: 'e6', BK: 'h8' }, // d4 (dark: 3+3=6), e6 (light: 5+4=9)
        title: '7. La séquence finale de mat',
        text: 'Le roi noir est en h8. Le Fou d4 prépare le coup de grâce. Observez bien la coordination : le Fou e6 (ou f7) bloque la case de fuite g8, l\'autre délivre le coup fatal avec échec.',
        from: 'd4', to: 'e5',
        label: 'Fd4→e5+ : échec sur la grande diagonale !',
      },
      {
        config: { WK: 'g6', WB: 'e5', WB2: 'f7', BK: 'h8' },
        title: '8. ✓ Échec et Mat parfait !',
        text: '<strong>✓ MAT !</strong><br>• Le Fou e5 donne échec sur h8 via la diagonale a1-h8.<br>• Le Fou f7 interdit g8.<br>• Le roi blanc g6 verrouille g7 et h7.<br>Le roi noir est totalement impuissant. Victoire !',
        from: null, to: null,
        checkmate: true,
      },
    ],
    practiceConfigs: [
      { WK: 'e1', WB: 'c1', WB2: 'f1', BK: 'e8' }, // c1 (0+2=2 dark), f1 (0+5=5 light)
      { WK: 'a1', WB: 'a3', WB2: 'b3', BK: 'h8' }, // a3 (2+0=2 dark), b3 (2+1=3 light)
      { WK: 'd2', WB: 'c3', WB2: 'e4', BK: 'g6' }, // c3 (2+2=4 dark), e4 (3+4=7 light)
      { WK: 'b2', WB: 'c1', WB2: 'd1', BK: 'f5' }, // c1 (0+2=2 dark), d1 (0+3=3 light)
      { WK: 'f2', WB: 'd4', WB2: 'e4', BK: 'b7' }, // d4 (3+3=6 dark), e4 (3+4=7 light)
    ],
  },

  KBN: {
    name: 'Roi + Fou + Cavalier vs Roi',
    icon: '♗♘',
    color: '#a78bfa',
    difficulty: 3,
    steps: [
      {
        config: { WK: 'e1', WB: 'c1', WN: 'b1', BK: 'e8' },
        title: '1. La règle absolue : LE BON COIN',
        text: 'C\'est la finale élémentaire la plus subtile du jeu d\'échecs.<br><br>⚠️ <strong>La loi absolue :</strong> On ne peut mater le roi adverse QUE dans un coin de la <strong>même couleur que celle de votre Fou</strong> !<br>Exemple : Fou de cases noires → coins noirs (a1 et h8). Si votre Fou est blanc → coins blancs (a8 et h1).',
        from: null, to: null,
      },
      {
        config: { WK: 'e4', WB: 'c4', WN: 'f3', BK: 'h6' },
        title: '2. L\'alliance complémentaire Fou + Cavalier',
        text: 'Le Fou blanc contrôle les cases de sa couleur ; le Cavalier contrôle les cases de la couleur <strong>opposée</strong> !<br>En coordonnant vos deux pièces, vous tissez un réseau où chaque case est couverte. Le roi noir tente naturellement de s\'enfuir vers le "mauvais coin" (ici h1 ou a8 pour un fou blanc).',
        from: 'c4', to: 'e6',
        label: 'Fc4→e6 : barre la diagonale',
      },
      {
        config: { WK: 'e6', WB: 'f7', WN: 'e7', BK: 'g8' },
        title: '3. La manœuvre en W du Cavalier',
        text: 'C\'est la célèbre manœuvre théorique (W-manoeuvre) : le Cavalier voyage par exemple de <strong>d7 → e5 → f7 → g5</strong> en dessinant un <em>"W"</em> pour déloger méthodiquement le roi noir du mauvais coin vers le bon coin !',
        from: 'e7', to: 'd5',
        label: 'Ce7→d5 : amorce la rotation en W',
      },
      {
        config: { WK: 'f6', WB: 'e6', WN: 'f7', BK: 'h7' },
        title: '4. Verrouillage du bon coin',
        text: 'Le roi noir est enfin acculé vers h8 (le bon coin). Le Cavalier f7 garde les cases clés d\'évasion g5 et h8, tandis que le Fou e6 coupe l\'axe de sortie. Le roi blanc s\'approche pour asséner le coup.',
        from: 'f6', to: 'g6',
        label: 'Rf6→g6 : immobilise le roi noir',
      },
      {
        config: { WK: 'g6', WB: 'e5', WN: 'f7', BK: 'h8' },
        title: '5. La préparation minutieuse du mat',
        text: 'Le roi noir n\'a plus que les cases g8 et h8. Attention à ne pas patter ! Le Cavalier et le Fou vont s\'échanger les rôles de contrôle et d\'échec avec une précision chirurgicale.',
        from: 'e5', to: 'g7',
        label: 'Fe5→g7+ : échec sous haute protection',
      },
      {
        config: { WK: 'g6', WB: 'g7', WN: 'f6', BK: 'h8' },
        title: '6. ✓ Échec et Mat : Le chef-d\'œuvre !',
        text: '<strong>✓ MAT !</strong><br>• Le Fou g7 donne l\'échec imparable sur la case h8 (protégé par le roi blanc g6).<br>• Le Cavalier f6 bondit pour interdire la fuite en g8 !<br>• Le roi blanc garde h7.<br>C\'est le mat académique roi, fou et cavalier !',
        from: null, to: null,
        checkmate: true,
      },
    ],
    practiceConfigs: [
      { WK: 'e1', WB: 'c1', WN: 'b1', BK: 'e8' },
      { WK: 'a1', WB: 'b3', WN: 'c3', BK: 'h7' },
      { WK: 'd2', WB: 'e4', WN: 'f3', BK: 'g7' },
      { WK: 'c3', WB: 'f4', WN: 'd4', BK: 'e6' },
    ],
  },

  KNN: {
    name: 'Roi + 2 Cavaliers vs Roi',
    icon: '♘♘',
    color: '#f59e0b',
    difficulty: 3,
    steps: [
      {
        config: { WK: 'e1', WN: 'g1', WN2: 'b1', BK: 'e8' },
        title: '1. La vérité théorique',
        text: 'Théoriquement, Roi + 2 Cavaliers contre Roi seul est une <strong>partie nulle</strong> si la défense est parfaite. Pourquoi ? Parce que le coup qui donne échec et mat libérerait le roi s\'il n\'était pas au coin, et le coup précédent provoque presque inévitablement le Pat !<br><br>Cependant, en pratique, l\'adversaire sous pression commet souvent l\'erreur de se réfugier dans le coin mortel.',
        from: null, to: null,
        warning: true,
      },
      {
        config: { WK: 'd4', WN: 'd5', WN2: 'f5', BK: 'e7' },
        title: '2. Le barrage des Cavaliers',
        text: 'Deux Cavaliers opérant de concert peuvent tisser un réseau très dense. Le roi blanc pousse par derrière pour empêcher le roi noir de s\'échapper vers le centre.',
        from: 'd4', to: 'e5',
        label: 'Rd4→e5 : resserre la tenaille',
      },
      {
        config: { WK: 'e6', WN: 'f7', WN2: 'd6', BK: 'f8' },
        title: '3. Pousser vers le coin de l\'échiquier',
        text: 'Les deux Cavaliers restreignent toutes les cases de fuite (c8, e8, h8, h6...). Le roi noir est forcé de reculer vers a8 ou h8.',
        from: 'd6', to: 'b7',
        label: 'Cd6→b7 : coupe l\'échappée',
      },
      {
        config: { WK: 'c7', WN: 'b6', WN2: 'c6', BK: 'a8' },
        title: '4. ✓ Échec et Mat aux 2 Cavaliers !',
        text: '<strong>✓ MAT !</strong><br>• Le Cavalier b6 donne échec sur a8.<br>• Le Cavalier c6 couvre a7 et b8.<br>• Le roi blanc c7 protège la case b7.<br>Le roi noir est terrassé dans l\'angle !',
        from: null, to: null,
        checkmate: true,
      },
    ],
    practiceConfigs: [
      { WK: 'e1', WN: 'g1', WN2: 'b1', BK: 'e8' },
      { WK: 'a1', WN: 'b3', WN2: 'c3', BK: 'h7' },
      { WK: 'd3', WN: 'e5', WN2: 'c5', BK: 'g7' },
    ],
  },
};

// =====================================================================
// GAME STATE
// =====================================================================
let state = {
  view: 'home',
  endgame: null,
  mode: null, // 'tutorial' | 'guided' | 'practice'
  board: null,
  tutStep: 0,
  selected: null,
  legalMoves: [],
  moveCount: 0,
  playerTurn: true,
  gameOver: false,
  lastMove: null,
  moveHistory: [], // pour bouton annuler / retry
  idealMove: null, // coup conseillé par l'IA
  wrongSquare: null,
};

// =====================================================================
// NAVIGATION
// =====================================================================
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + id).classList.add('active');
  state.view = id;
}

function goHome() {
  state.endgame = null;
  state.board = null;
  state.selected = null;
  state.legalMoves = [];
  state.moveHistory = [];
  showView('home');
}

function startTutorial(endgame) {
  state.endgame = endgame;
  state.mode = 'tutorial';
  state.tutStep = 0;
  showView('game');
  setupGameUI();
  renderTutorialStep();
}

function startGuided(endgame) {
  initPlaySession(endgame, 'guided');
}

function startPractice(endgame) {
  initPlaySession(endgame, 'practice');
}

async function initPlaySession(endgame, mode) {
  state.endgame = endgame;
  state.mode = mode;
  state.moveCount = 0;
  state.playerTurn = true;
  state.gameOver = false;
  state.lastMove = null;
  state.selected = null;
  state.legalMoves = [];
  state.moveHistory = [];
  state.idealMove = null;
  state.wrongSquare = null;

  const tut = TUTORIALS[endgame];
  let cfg = tut.practiceConfigs[Math.floor(Math.random() * tut.practiceConfigs.length)];

  // Règle de sécurité absolue : pour Roi + 2 Fous, garantir 1 fou case blanche et 1 fou case noire
  if (endgame === 'KBB') {
    const isLightSq = (sq) => (parseInt(sq[1]) - 1 + (sq.charCodeAt(0) - 97)) % 2 === 1;
    if (isLightSq(cfg.WB) === isLightSq(cfg.WB2)) {
      // Si par inadvertance les deux étaient de même couleur, corriger immédiatement
      cfg = { ...cfg, WB: 'c1', WB2: 'f1' };
    }
  }

  let tempBoard = new Board().setup(cfg);
  // Règle de sécurité absolue : Le roi noir ne doit JAMAIS commencer en échec au coup 1 !
  if (tempBoard.inCheck('black')) {
    // Si la config démarre avec un échec, choisir une configuration propre
    const cleanConfigs = {
      KBB: { WK: 'e1', WB: 'c1', WB2: 'f1', BK: 'e8' },
      KBN: { WK: 'e1', WB: 'c1', WN: 'b1', BK: 'e8' },
      KNN: { WK: 'e1', WN: 'g1', WN2: 'b1', BK: 'e8' },
    };
    cfg = cleanConfigs[endgame] || cfg;
    tempBoard = new Board().setup(cfg);
  }

  state.board = tempBoard;

  showView('game');
  setupGameUI();
  
  if (state.mode === 'guided') {
    await computeIdealWhiteMove();
  }
  
  renderBoard({
    lastMove: state.lastMove,
    idealMove: state.idealMove,
  });
  updateStatus();
}

// =====================================================================
// GAME UI SETUP
// =====================================================================
function setupGameUI() {
  const tut = TUTORIALS[state.endgame];
  document.getElementById('panel-title').textContent = tut.name;
  
  const badgeEl = document.getElementById('panel-mode-badge');
  badgeEl.className = '';
  if (state.mode === 'tutorial') {
    badgeEl.textContent = '📖 Cours interactif';
    badgeEl.classList.add('mode-badge-tutorial');
  } else if (state.mode === 'guided') {
    badgeEl.textContent = '🎯 Mode Suivi & Guidé';
    badgeEl.classList.add('mode-badge-guided');
  } else {
    badgeEl.textContent = '⚔️ Entraînement Libre';
    badgeEl.classList.add('mode-badge-practice');
  }

  const isTut = state.mode === 'tutorial';
  document.getElementById('tutorial-controls').classList.toggle('hidden', !isTut);
  document.getElementById('practice-controls').classList.toggle('hidden', isTut);

  const hintBtn = document.getElementById('btn-hint');
  if (hintBtn) {
    hintBtn.style.display = (state.mode === 'practice' || state.mode === 'guided') ? 'block' : 'none';
  }

  buildBoard();
}

// =====================================================================
// BUILD BOARD HTML
// =====================================================================
function buildBoard() {
  const boardEl = document.getElementById('board');
  boardEl.innerHTML = '';

  for (let dRow = 0; dRow < 8; dRow++) {
    for (let col = 0; col < 8; col++) {
      const rank = 7 - dRow; // display row 0 = rank 7 (rank 8 in chess)
      const file = col;
      const sq = Board.rf(rank, file);

      const cell = document.createElement('div');
      cell.className = 'sq ' + ((rank + file) % 2 === 1 ? 'light' : 'dark');
      cell.id = 'sq-' + sq;
      cell.dataset.sq = sq;

      // Coordinate labels
      if (col === 0) {
        const rl = document.createElement('span');
        rl.className = 'coord coord-rank';
        rl.textContent = rank + 1;
        cell.appendChild(rl);
      }
      if (dRow === 7) {
        const fl = document.createElement('span');
        fl.className = 'coord coord-file';
        fl.textContent = String.fromCharCode(97 + col);
        cell.appendChild(fl);
      }

      cell.addEventListener('click', () => handleSquareClick(sq));
      boardEl.appendChild(cell);
    }
  }
}

// =====================================================================
// BOARD RENDERING
// =====================================================================
function renderBoard(opts = {}) {
  const {
    highlighted = new Set(),
    selected = null,
    fromHL = null,
    toHL = null,
    lastMove = null,
    idealMove = null,
    wrongSquare = null,
  } = opts;

  const board = state.board;

  for (let sq = 0; sq < 64; sq++) {
    const cell = document.getElementById('sq-' + sq);
    if (!cell) continue;

    // Remove dynamic classes
    cell.classList.remove(
      'selected', 'legal-move', 'hint-from', 'hint-to',
      'lm-from', 'lm-to', 'check-sq', 'guided-ideal', 'guided-wrong'
    );

    // Remove existing piece
    const existing = cell.querySelector('.piece');
    if (existing) existing.remove();

    // Render piece
    if (board) {
      const p = board.cells[sq];
      if (p && PIECES[p]) {
        const el = document.createElement('div');
        el.className = 'piece piece-' + PIECES[p].color;
        el.textContent = PIECES[p].sym;
        // Show king in check with glow
        if (PIECES[p].type === 'king' && board.inCheck(PIECES[p].color)) {
          el.classList.add('in-check');
        }
        cell.appendChild(el);
      }
    }

    // Apply highlights
    if (sq === selected)        cell.classList.add('selected');
    if (highlighted.has(sq))   cell.classList.add('legal-move');
    if (sq === fromHL)          cell.classList.add('hint-from');
    if (sq === toHL)            cell.classList.add('hint-to');
    
    // Guided / ideal highlights
    if (idealMove) {
      if (sq === idealMove.from) cell.classList.add('hint-from');
      if (sq === idealMove.to)   cell.classList.add('guided-ideal');
    }

    if (sq === wrongSquare) {
      cell.classList.add('guided-wrong');
    }

    if (lastMove) {
      if (sq === lastMove.from) cell.classList.add('lm-from');
      if (sq === lastMove.to)   cell.classList.add('lm-to');
    }
  }
}

// =====================================================================
// TUTORIAL MODE
// =====================================================================
function renderTutorialStep() {
  const tut = TUTORIALS[state.endgame];
  const step = tut.steps[state.tutStep];
  state.board = new Board().setup(step.config);

  const fromIdx = step.from ? Board.sqToIdx(step.from) : null;
  const toIdx   = step.to   ? Board.sqToIdx(step.to)   : null;
  renderBoard({ fromHL: fromIdx, toHL: toIdx });

  document.getElementById('panel-step-title').textContent = step.title;
  document.getElementById('panel-comment').innerHTML = step.text;

  // Status
  const statusEl = document.getElementById('panel-status');
  if (step.checkmate) {
    statusEl.innerHTML = '♛ ÉCHEC ET MAT !';
    statusEl.className = 'status-box status-checkmate';
  } else if (step.warning) {
    statusEl.innerHTML = '⚠️ Point théorique essentiel — lisez attentivement';
    statusEl.className = 'status-box status-warning';
  } else if (step.from) {
    statusEl.innerHTML = '💡 Coup recommandé : <strong>' + step.label + '</strong>';
    statusEl.className = 'status-box status-hint';
  } else {
    statusEl.innerHTML = '📖 Cours théorique';
    statusEl.className = 'status-box status-info';
  }

  // Navigation
  const total = tut.steps.length;
  document.getElementById('tut-progress').textContent = (state.tutStep + 1) + ' / ' + total;
  document.getElementById('btn-prev').disabled = state.tutStep === 0;
  document.getElementById('btn-next').disabled = state.tutStep === total - 1;
}

function tutorialNext() {
  const steps = TUTORIALS[state.endgame].steps;
  if (state.tutStep < steps.length - 1) { state.tutStep++; renderTutorialStep(); }
}

function tutorialPrev() {
  if (state.tutStep > 0) { state.tutStep--; renderTutorialStep(); }
}

// =====================================================================
// AI ASSISTANCE / GUIDED EVALUATION (HYBRID SYZYGY + MINIMAX)
// =====================================================================
async function computeIdealWhiteMove() {
  if (!state.board || state.gameOver) {
    state.idealMove = null;
    return null;
  }

  // 1. Tenter la tablebase Syzygy (solution mathématique parfaite)
  let best = await chessAI.fetchSyzygyMove(state.board, 'white');

  // 2. Si hors-ligne ou non disponible, repli immédiat sur Minimax profondeur 4
  if (!best) {
    best = chessAI.getBestWhiteMove(state.board, state.endgame, 4);
  }

  state.idealMove = best;
  return best;
}

async function requestHint() {
  if (state.gameOver || !state.playerTurn) return;
  setStatus('🔍 Calcul du meilleur coup...', 'info');
  const best = await computeIdealWhiteMove();
  if (!best) return;

  const fromSq = Board.idxToSq(best.from);
  const toSq = Board.idxToSq(best.to);
  const pieceName = getPieceName(state.board.cells[best.from]);

  let detail = '';
  if (best.source === 'syzygy' && best.dtm) {
    const mateDistance = Math.abs(best.dtm);
    detail = `<span style="color:#60a5fa; font-weight:600">📊 Table Syzygy : Mat forcé garanti en ${mateDistance} coups !</span><br>`;
  }

  setStatus(`💡 <strong>Coup optimal conseillé :</strong> ${pieceName} de <strong>${fromSq}</strong> vers <strong>${toSq}</strong>`, 'hint');
  document.getElementById('panel-comment').innerHTML = `
    <p>${detail}Ce coup bloque les sorties du roi noir et resserre le filet sans risque de pat.</p>
    <p style="margin-top:6px; color:#6ee7b7">🟢 La case cible <strong>${toSq}</strong> est illuminée en vert sur l'échiquier.</p>
  `;

  renderBoard({
    lastMove: state.lastMove,
    idealMove: best,
  });
}

function getPieceName(code) {
  if (!code) return 'Pièce';
  if (code.startsWith('WK')) return 'Roi';
  if (code.startsWith('WB')) return 'Fou';
  if (code.startsWith('WN')) return 'Cavalier';
  return 'Pièce';
}

// =====================================================================
// PLAY INTERACTIONS (GUIDED & PRACTICE)
// =====================================================================
function handleSquareClick(sq) {
  if ((state.mode !== 'practice' && state.mode !== 'guided') || state.gameOver || !state.playerTurn) return;

  const board = state.board;
  const piece = board.cells[sq];

  if (state.selected !== null) {
    // Attempt move
    if (state.legalMoves.includes(sq)) {
      doPlayerMove(state.selected, sq);
      return;
    }
    // Select different white piece
    if (piece && PIECES[piece] && PIECES[piece].color === 'white') {
      selectPiece(sq); return;
    }
    // Deselect
    state.selected = null;
    state.legalMoves = [];
    renderBoard({
      lastMove: state.lastMove,
      idealMove: state.mode === 'guided' ? state.idealMove : null,
      wrongSquare: state.wrongSquare,
    });
  } else {
    if (piece && PIECES[piece] && PIECES[piece].color === 'white') selectPiece(sq);
  }
}

function selectPiece(sq) {
  state.selected = sq;
  state.legalMoves = state.board.legalMoves(sq);
  state.wrongSquare = null; // Clear previous wrong highlight

  renderBoard({
    selected: sq,
    highlighted: new Set(state.legalMoves),
    lastMove: state.lastMove,
    idealMove: state.mode === 'guided' ? state.idealMove : null,
  });
}

async function doPlayerMove(from, to) {
  const previousBoard = state.board.clone();
  const previousMoveCount = state.moveCount;

  // Calculer le coup optimal avant de jouer (Syzygy en priorité, Minimax en repli)
  let ideal = null;
  if (state.mode === 'guided') {
    ideal = state.idealMove || await computeIdealWhiteMove();
  }
  
  // Appliquer le coup
  const newBoard = state.board.applyMove(from, to);

  // Vérification en Mode Suivi / Guidé
  if (state.mode === 'guided' && ideal) {
    const isDirectMate = newBoard.isCheckmate('black');
    const isSameMove = (from === ideal.from && to === ideal.to);

    // Si le coup provoque un Pat : erreur critique !
    if (newBoard.isStalemate('black')) {
      triggerGuidedMistake(from, to, previousBoard, ideal, "⚠️ Attention, ce coup provoque le <strong>PAT</strong> ! Le roi noir n'a plus de case et la partie est nulle.");
      return;
    }

    // Évaluation après le coup joué
    const evalPlayed = isDirectMate ? 1e9 : chessAI.evaluateWhite(newBoard, state.endgame);
    const evalBest = ideal.isMate ? 1e9 : (ideal.score || 1000);

    // Si le coup dégrade significativement la position
    if (!isSameMove && !isDirectMate && (evalPlayed < evalBest - 45)) {
      const bestFromSq = Board.idxToSq(ideal.from);
      const bestToSq = Board.idxToSq(ideal.to);
      const bestPiece = getPieceName(previousBoard.cells[ideal.from]);
      const playedSq = Board.idxToSq(to);

      triggerGuidedMistake(
        from, to, previousBoard, ideal,
        `❌ Le coup vers <strong>${playedSq}</strong> n'est pas optimal : il laisse le roi noir s'échapper ou retarde le mat.<br><br>💡 <strong>Case recommandée :</strong> Jouez plutôt <strong>${bestPiece}</strong> de <strong>${bestFromSq}</strong> vers la case <strong>${bestToSq}</strong> !`
      );
      return;
    }
  }

  // Coup validé ! Sauvegarder dans l'historique
  state.moveHistory.push({
    board: previousBoard,
    lastMove: state.lastMove,
    moveCount: previousMoveCount,
  });

  state.board = newBoard;
  state.lastMove = { from, to };
  state.selected = null;
  state.legalMoves = [];
  state.wrongSquare = null;
  state.moveCount++;

  renderBoard({ lastMove: state.lastMove });

  if (state.board.isCheckmate('black')) { state.gameOver = true; showResult('victory'); return; }
  if (state.board.isStalemate('black')) { state.gameOver = true; showResult('stalemate'); return; }
  if (state.moveCount >= 50)             { state.gameOver = true; showResult('draw');      return; }

  state.playerTurn = false;
  setStatus('⏳ L\'IA adverse défend...', 'info');
  setTimeout(doAIMove, 350);
}

function triggerGuidedMistake(from, to, previousBoard, ideal, explanation) {
  state.board = previousBoard; // Annuler immédiatement le mauvais coup
  state.selected = null;
  state.legalMoves = [];
  state.wrongSquare = to; // Rouge clignotant sur la mauvaise case
  state.idealMove = ideal; // Vert clignotant sur la bonne case cible

  setStatus('❌ Coup non optimal détecté en Mode Suivi', 'check');
  document.getElementById('panel-comment').innerHTML = `
    <div style="line-height:1.6">
      ${explanation}
      <div style="margin-top:12px; font-weight:600; color:#fbbf24">
        👉 La bonne case est maintenant entourée en <span style="color:#34d399">VERT</span> sur l'échiquier. Rejouez !
      </div>
    </div>
  `;

  renderBoard({
    lastMove: state.lastMove,
    idealMove: ideal,
    wrongSquare: to,
  });
}

function undoPlayerMove() {
  if (state.moveHistory.length === 0 || !state.playerTurn || state.gameOver) return;
  const prev = state.moveHistory.pop();
  state.board = prev.board;
  state.lastMove = prev.lastMove;
  state.moveCount = prev.moveCount;
  state.selected = null;
  state.legalMoves = [];
  state.wrongSquare = null;

  if (state.mode === 'guided') {
    computeIdealWhiteMove();
  }

  renderBoard({
    lastMove: state.lastMove,
    idealMove: state.mode === 'guided' ? state.idealMove : null,
  });
  updateStatus();
  setStatus('↩ Coup annulé. À vous de rejouer !', 'info');
}

async function doAIMove() {
  const move = chessAI.getBestMove(state.board);
  if (!move) {
    state.gameOver = true;
    showResult(state.board.inCheck('black') ? 'victory' : 'stalemate');
    return;
  }
  state.board = state.board.applyMove(move.from, move.to);
  state.lastMove = move;
  state.playerTurn = true;

  // Check if black captured a white piece leaving insufficient material to mate
  let whiteMinorPieces = 0;
  for (let sq = 0; sq < 64; sq++) {
    const p = state.board.cells[sq];
    if (p && p !== 'WK' && p !== 'BK') whiteMinorPieces++;
  }
  if (whiteMinorPieces < 2) {
    state.gameOver = true;
    renderBoard({ lastMove: state.lastMove });
    showResult('insufficient');
    return;
  }

  if (state.mode === 'guided') {
    await computeIdealWhiteMove();
  }

  renderBoard({
    lastMove: state.lastMove,
    idealMove: state.mode === 'guided' ? state.idealMove : null,
  });
  updateStatus();
}

function updateStatus() {
  const board = state.board;
  if (!board) return;
  document.getElementById('move-count').textContent = state.moveCount;
  const pct = Math.min(100, (state.moveCount / 50) * 100);
  document.getElementById('move-progress-bar').style.width = pct + '%';

  const isGuided = state.mode === 'guided';
  let guidedTip = '';
  if (isGuided && state.idealMove) {
    const toSq = Board.idxToSq(state.idealMove.to);
    guidedTip = ` (Cible conseillée : <strong>${toSq}</strong>)`;
  }

  if (board.inCheck('black')) {
    setStatus(`⚔️ <strong>ÉCHEC</strong> au roi noir !${guidedTip}`, 'check');
  } else {
    setStatus(`🎯 À vous de jouer (Blancs)${guidedTip}`, 'info');
  }
}

function setStatus(html, type) {
  const el = document.getElementById('panel-status');
  el.innerHTML = html;
  el.className = 'status-box status-' + type;
}

function showResult(type) {
  const msgs = {
    victory: {
      status: '🏆 <strong>VICTOIRE !</strong> Mat en ' + state.moveCount + ' coups !',
      css: 'victory',
      comment: '<p>🎉 <strong>Félicitations !</strong> Vous avez maté le roi adverse avec succès ! Votre maîtrise des finales progresse !</p><p style="margin-top:10px">Cliquez sur <strong>Recommencer</strong> pour vous tester sur une autre position.</p>',
    },
    stalemate: {
      status: '⚠️ <strong>PAT !</strong> Partie nulle...',
      css: 'warning',
      comment: '<p>Le roi noir n\'avait aucun coup légal et n\'était pas en échec. C\'est le <strong>Pat</strong> !</p><p style="margin-top:10px">Ne précipitez pas vos pièces : laissez toujours une case de repli au roi noir tant que vous ne donnez pas un échec direct !</p>',
    },
    draw: {
      status: '⏱️ <strong>NULLE</strong> par la règle des 50 coups',
      css: 'warning',
      comment: '<p>50 coups sans mat — la partie est déclarée nulle. Travaillez la coordination pour resserrer la boîte plus vite !</p>',
    },
    insufficient: {
      status: '❌ <strong>PIÈCE PERDUE : PARTIE NULLE</strong>',
      css: 'warning',
      comment: '<p>Le roi adverse a capturé l\'une de vos pièces ! Avec un seul Fou ou Cavalier restant, il n\'y a plus assez de matériel pour forcer le mat (partie nulle théorique immédiate).</p><p style="margin-top:10px">💡 <em>Conseil :</em> Protégez toujours vos pièces avec votre Roi ou tenez-les à distance du roi adverse.</p>',
    },
  };
  const m = msgs[type];
  setStatus(m.status, m.css);
  document.getElementById('panel-comment').innerHTML = m.comment;
}

function restartPractice() {
  if (state.mode === 'guided') {
    startGuided(state.endgame);
  } else {
    startPractice(state.endgame);
  }
}

// =====================================================================
// INIT
// =====================================================================
document.addEventListener('DOMContentLoaded', () => showView('home'));
