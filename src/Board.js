import React from 'react';
import Square from './Square'
import './index.css'

class Board extends React.Component {
    
    renderSquare(i) {
        return (
            <Square 
            onClick = {() => this.props.onClick(i)}
            value={this.props.squares[i]} 
            key={i}
            />
        )
    }

    render() {
        return (
            <table className="board">
                <tbody>
                    <tr className="board-row">
                        {[0,1,2].map((index) => {
                            return this.renderSquare(index)
                        })} 
                    </tr>
                    <tr className="board-row">
                        {[3,4,5].map((index) => {
                            return this.renderSquare(index)
                        })} 
                    </tr>
                    <tr className="board-row">
                            {[6,7,8].map((index) => {
                            return this.renderSquare(index)
                        })} 
                    </tr>

                </tbody>
            </table>
        )
    }
}



export default Board