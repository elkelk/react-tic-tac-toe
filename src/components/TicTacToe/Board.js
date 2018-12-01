import React from 'react';
import { connect } from "react-redux"
import { getBoard, getBoardEdge } from "../../redux/selectors"
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
        key={"square" + i}
        value={this.props.board[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderRow(row) {
    return Array(this.props.boardEdge).fill(null).map((_, i) => {
      return this.renderSquare(i + row * this.props.boardEdge)
    })
  }

  renderBoard() {
    let boardEdge = Math.sqrt(this.props.board.length)
    return Array(this.props.boardEdge).fill(null).map((_, i) => {
      return (<div className="board-row" key={"row" + i}>
        {this.renderRow(i)}
      </div>)
    })
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const board = getBoard(state)
  const boardEdge = getBoardEdge(state)
  return { board, boardEdge }
};

export default connect(mapStateToProps, { makeMove })(Board)
