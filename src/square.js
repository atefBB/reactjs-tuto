import React from "react";

export default function Square(props) {
    var [squareValue, setSquareValue] = React.useState(null);

    return (
      <button 
         className="square"
         onClick={() => setSquareValue('X')}
      >
        {squareValue}
      </button>
    );
}
