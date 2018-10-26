export const getTicTacToeState = store => store.ticTacToe
export const getBoard = store => getTicTacToeState(store) && getTicTacToeState(store).board
export const getBoardEdge = store => getTicTacToeState(store) && getTicTacToeState(store).boardEdge
export const getNextPlayer = store => getTicTacToeState(store) && getTicTacToeState(store).nextPlayer
export const winner = store => getTicTacToeState(store) && getTicTacToeState(store).winner
