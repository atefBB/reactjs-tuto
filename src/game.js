import React from "react";
import Board from "./board";

export default function Game() {
    var [history, setHistory] = React.useState([{
        squares: Array(9).fill(null),
    }]);
    var [xIsNext, setXIsNext] = React.useState(true);

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
