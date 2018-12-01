import { nextPlayer, baseWinCheck } from "../lib/ticTacToe";

export const getTicTacToeState = store => store.ticTacToe
export const getBoard = store => getTicTacToeState(store) && getTicTacToeState(store).board
export const getBoardEdge = store => Math.sqrt(getBoard(store).length)
export const getNextPlayer = store => nextPlayer(getBoard(store))
export const winner = store => baseWinCheck(getBoard(store))
