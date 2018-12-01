import { MAKE_MOVE, INITIALIZE_BOARD } from "../actionTypes";
import { initializeBoard, play } from "../../lib/ticTacToe";

const initialState = {
  board: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_BOARD: {
      const { boardEdge } = action.payload
      const board = initializeBoard(boardEdge)
      return { ...state, board }
    }
    case MAKE_MOVE: {
      const { boardIndex } = action.payload
      const board = play(boardIndex, state.board)
      return { ...state, board }
    }
    default:
      return state;
  }
}
