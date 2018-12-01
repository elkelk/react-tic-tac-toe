export const initializeBoard = function(boardEdge, board) {
  return Array(Math.pow(boardEdge, 2)).fill(null)
}

export const play = function(boardIndex, board) {
  const validMove = board[boardIndex] === null
  const nextUp = nextPlayer(board)
  const newBoard = [
    ...board.slice(0, boardIndex),
    nextUp,
    ...board.slice(boardIndex + 1)
  ]
  return validMove ? newBoard : board
}

export const nextPlayer = function(board) {
  return board.filter(x => x).length % 2 == 0 ? 'X' : 'Y'
}

export const baseWinCheck = function(board) {
  const boardEdge = Math.sqrt(board.length)
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
