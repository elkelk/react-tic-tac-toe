import React from 'react';
import { connect } from "react-redux"
import { getBoard } from "../../redux/selectors"
import { makeMove } from "../../redux/actions"
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(i) {
    this.props.makeMove(i)
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.board[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const board = getBoard(state)
  return { board }
};

export default connect(mapStateToProps, { makeMove })(Board)
