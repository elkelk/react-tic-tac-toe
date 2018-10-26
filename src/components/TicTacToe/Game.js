import React from 'react'
import { connect } from "react-redux"
import { initializeBoard } from "../../redux/actions"
import { getNextPlayer, winner } from "../../redux/selectors"
import Board from './Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    props.initializeBoard(3)
    this.state = {}
  }

  render() {
    if (this.props.winner) {
      return (
        <div className="game">
          <div className="game-info">
            <div className="status">Game Over! {this.props.winner} wins!</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div className="status">Next Player {this.props.nextPlayer}</div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const nextPlayer = getNextPlayer(state)
  const hasWon = winner(state)
  return { nextPlayer, winner: hasWon }
};

export default connect(
  mapStateToProps,
  { initializeBoard }
)(Game);
