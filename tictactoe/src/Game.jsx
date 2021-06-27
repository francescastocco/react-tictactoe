import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';

export function Game() {
    const [history, setHistory] = useState([]);
    const [xIsNext, setXIsNext] = useState(true);
    
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}
