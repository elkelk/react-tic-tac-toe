import { MAKE_MOVE, INITIALIZE_BOARD } from "../actionTypes";

const initialState = {
  nextPlayer: "X",
  board: [],
  boardEdge: 3,
  winner: null
};

const winCheck = function(board, boardEdge) {
  const boardCheck = board
  .reduce((acc, v, i) => {
    const column = i % boardEdge
    const row = Math.floor(i/boardEdge)
    acc[`col${column}`] = acc[`col${column}`] || []
    acc[`col${column}`] = [...acc[`col${column}`], v]
    acc[`row${row}`] = acc[`row${row}`] || []
    acc[`row${row}`] = [...acc[`row${row}`], v]
    if (column === row) {
      acc["diagonal1"] = acc["diagonal1"] || []
      acc["diagonal1"] = [...acc["diagonal1"], v]
    }
    if ((column + row) === boardEdge - 1) {
      acc["diagonal2"] = acc["diagonal2"] || []
      acc["diagonal2"] = [...acc["diagonal2"], v]
    }
    return acc
  }, {})
  console.debug(boardCheck)
  return Object.values(boardCheck)
  .map(v => v.reduce((acc, v) => acc == v && v))
  .find(v => v)
}

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_BOARD: {
      const { boardEdge } = action.payload;
      return {
        ...state,
        boardEdge,
        board: Array(boardEdge * boardEdge).fill(null)
      };
    }
    case MAKE_MOVE: {
      const { boardIndex } = action.payload;
      const validMove = state.board[boardIndex] === null
      const board = [
        ...state.board.slice(0, boardIndex),
        state.nextPlayer,
        ...state.board.slice(boardIndex + 1)
      ]
      const winner = winCheck(board, state.boardEdge)
      const nextPlayer = state.nextPlayer === 'X' ? 'Y' : 'X'
      return {
        ...state,
        board: (validMove ? board : state.board),
        nextPlayer: (validMove ? nextPlayer : state.nextPlayer),
        winner
      };
    }
    default:
      return state;
  }
}
