import React from 'react';
import Square from './Square'
import './index.css'

class Board extends React.Component {
    constructor () {
        super();
        this.state = {
            squares: Array(9).fill(null)
        }
    } 
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X'
        this.setState({squares})
    }
    renderSquare(i) {
        return (
            <Square 
            onClick = {() => this.handleClick(i)}
            value={this.state.squares[i]} />
        )
    }

    render() {
        const status = 'Next Player : X'
        return (
            <div>
                <div className="status">{status}</div>
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

export default Board