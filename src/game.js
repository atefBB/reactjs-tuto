import React from "react";
import Board from "./board";
import calculateWinner from "./calculate-winner";

export default function Game() {
    var [history, setHistory] = React.useState([{
        squares: Array(9).fill(null),
    }]);
    var [xIsNext, setXIsNext] = React.useState(true);

    function handleClick(i) {
      const gameHistory = history;
      const current = gameHistory[gameHistory.length - 1];
      const squares = current.squares.slice();
      
      if(calculateWinner(squares) || squares[i]) {
         return;
      } 
     
      squares[i] = xIsNext? "X" : "O";

      setHistory(history.concat([{
         squares: squares
      }]));

      setXIsNext(!xIsNext);
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}
