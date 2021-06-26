import React, { useState } from 'react';
import { Square } from './Square';

export function Board() {
    const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null])
    const [xIsNext, setXIsNext] = useState(true);
    const status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    
    function handleClick(i) {
        const squaresCopy = squares;
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    }
    
    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}