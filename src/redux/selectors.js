import { nextPlayer, winCheck } from "../lib/ticTacToe";

export const getTicTacToeState = store => store.ticTacToe
export const getBoard = store => getTicTacToeState(store) && getTicTacToeState(store).board
export const getNextPlayer = store => nextPlayer(getBoard(store))
export const winner = store => winCheck(getBoard(store))
