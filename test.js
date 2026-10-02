// Standalone test (Node.js)
// Loads chess.js with a workaround for strict mode class scoping

const fs = require('fs');
let src = fs.readFileSync('chess.js', 'utf8');
// Remove 'use strict' so classes become accessible via global/sandbox
src = src.replace("'use strict';", '');
// Add exports at the end
src += '\nmodule.exports = { Board, PIECES };';

// Write temp file and require it
require('fs').writeFileSync('_chess_test_tmp.js', src);
const { Board, PIECES } = require('./_chess_test_tmp.js');
require('fs').unlinkSync('_chess_test_tmp.js');

function ok(label, got, expected) {
  const pass = got === expected;
  console.log((pass ? '\x1b[32m✓\x1b[0m' : '\x1b[31m✗\x1b[0m'), label,
    pass ? '' : `  GOT:${got}  WANT:${expected}`);
}

// KBB checkmate: WK g6, Be5 (→h8 diag), Bf7 (→g8), BK h8
const b1 = new Board().setup({ WK: 'g6', WB: 'e5', WB2: 'f7', BK: 'h8' });
ok('KBB inCheck',      b1.inCheck('black'),                    true);
ok('KBB moves=0',      b1.allLegalMoves('black').length === 0, true);
ok('KBB checkmate',    b1.isCheckmate('black'),                true);
ok('KBB not stalemate',b1.isStalemate('black'),               false);

// KBN checkmate: WK g6, Bg7 (→h8, prot by WK), Nf6 (→g8), BK h8
const b2 = new Board().setup({ WK: 'g6', WB: 'g7', WN: 'f6', BK: 'h8' });
ok('KBN inCheck',      b2.inCheck('black'),                    true);
ok('KBN moves=0',      b2.allLegalMoves('black').length === 0, true);
ok('KBN checkmate',    b2.isCheckmate('black'),                true);

// KNN checkmate: WK c7, Nb6 (→a8), Nc6 (→a7,b8), BK a8
const b3 = new Board().setup({ WK: 'c7', WN: 'b6', WN2: 'c6', BK: 'a8' });
ok('KNN inCheck',      b3.inCheck('black'),                    true);
ok('KNN moves=0',      b3.allLegalMoves('black').length === 0, true);
ok('KNN checkmate',    b3.isCheckmate('black'),                true);

// Starting position
const b4 = new Board().setup({ WK: 'e1', WB: 'c1', WB2: 'f1', BK: 'e8' });
ok('Start no checkmate', b4.isCheckmate('black'), false);
ok('Start no stalemate', b4.isStalemate('black'), false);
ok('Start BK has moves', b4.allLegalMoves('black').length > 0, true);

// Move application
const b5 = b4.applyMove(Board.sqToIdx('e1'), Board.sqToIdx('e2'));
ok('WK moved to e2',   b5.kingPos.white === Board.sqToIdx('e2'), true);
ok('e1 now empty',     b5.cells[Board.sqToIdx('e1')] === null,   true);

console.log('\nAll tests done!');
