import React from 'react';
import Board from './Board';

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-Board">
                    <Board />
                </div>
                <div className="game-info">
                    
                </div>
            </div>
        )
    }
}

export default Game