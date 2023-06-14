import { useState } from "react"

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null)

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

// The DOM <button> element’s onClick attribute has a special meaning 
// to React because it is a built-in component. For custom components 
// like Square, the naming is up to you. You could give any name to the 
// Square’s onSquareClick prop or Board’s handleClick function, and the 
// code would work the same. In React, it’s conventional to use onSomething 
// names for props which represent events and handleSomething for the 
// function definitions which handle those events.

// SELF MADE COMPONENT BEFORE FINISHING TUTORIAL
// function ShowNext({xTurn}) {
//   if (xTurn) {
//     return <span>X</span>
//   } else {
//     return <span>O</span>
//   }
// }

function Board({ xIsNext, squares, onPlay }) {
  // const [xIsNext, setXIsNext] = useState(true)
  // const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) {
    if (squares[i]  || calculateWinner(squares)) {
      // if not null, square is taken; prevent overwrite
      return;
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // setSquares(nextSquares)
    // setXIsNext(!xIsNext)
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }

  // The handleClick function creates a copy of the squares array 
  // (nextSquares) with the JavaScript slice() Array method. 
  // Then, handleClick updates the nextSquares array to add X to the first 
  // ([0] index) square.

  // Calling the setSquares function lets React know the state 
  // of the component has changed. This will trigger a re-render of 
  // the components that use the squares state (Board) as well as its 
  // child components (the Square components that make up the board).

  // if a function doesn't need a passed value, it can be called in parent like onSquareClick={handleFirstSquareClick}
  // rocket syntax for passing a value

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]}  onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      {/* <div className="display">
        Next Turn is: <ShowNext xTurn={xIsNext} />
      </div> */}
    </>
  )
}

// The export JavaScript keyword makes this function accessible outside of this file. 
// The return JavaScript keyword means whatever comes after is returned as 
// a value to the caller of the function. <button> is a JSX element. 
// A JSX element is a combination of JavaScript code and HTML tags that describes what 
// you’d like to display. className="square" is a button property or prop that tells CSS 
// how to style the button. 

// function Square({value}) { ...
// variable {value} in Square component is determined when component is called in the exported component- Board
// each value="#" sets the identity
// value considered a prop here

export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    // setXIsNext(!xIsNext)
  }

  // Spread syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  // Here, [...history, nextSquares] creates a new array 
  // that contains all the items in history, followed by nextSquares. 
  // (You can read the ...history spread syntax as 
  //   “enumerate all the items in history”.)

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
    // setXIsNext(nextMove % 2 === 0)
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// It does not matter whether you define calculateWinner before or 
//  the Board. Let’s put it at the end so that you don’t have to scroll 
//  past it every time you edit your components.