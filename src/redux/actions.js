import { INITIALIZE_BOARD, MAKE_MOVE } from "./actionTypes";

export const initializeBoard = boardEdge => ({
  type: INITIALIZE_BOARD,
  payload: { boardEdge } // use 3 for a 3 x 3 here
});

export const makeMove = boardIndex => ({
  type: MAKE_MOVE,
  payload: {
    boardIndex
  }
});
