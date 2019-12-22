import React from "react";
import Square from "./square";
import calculateWinner from "./calculate-winner";

export default function Board(props) {
    var [squares, setSquares] = React.useState(Array(9).fill(null));
    var [xIsNext, setXIsNext] = React.useState(true);

    function handleClick(value) {
      const handlerSquares = squares.slice();
      if (calculateWinner(squares) || squares[value]) {
        return;
      }
      handlerSquares[value] = xIsNext? "X" : "O";
      setSquares(handlerSquares);
      setXIsNext(!xIsNext);
    }

    function renderSquare(i) {
      return <Square 
         value={props.squares[i]} 
         onClick={() => props.onClick(i)}
       />;
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
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
