import React from "react";
import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
      <button className="w-20 h-20 border border-custom-black" onClick={onSquareClick}>
        {value}
      </button>
    );
}

export default function Grid() {
  const [squares, setSquares] = useState([])
  const [current, setCurrent] = useState('X')
  const [status, setStatus] = useState('Next player: ' + current)
  const [won, setWon] = useState(false)
  let next

  function handleClick(i) {
    if ( won == true ) {
      console.log('already over')
      return
    }

    if (squares[i] == null) {
      let nextSquares = squares.slice()
      nextSquares[i] = current
      setSquares(nextSquares)

      if (current == 'X') {
        next = 'O'
        setCurrent('O')
      } else {
        next = 'X'
        setCurrent('X')
      }

      let won = checkWin(nextSquares, current)
      if ( won == true ){
        setWon(true)
        console.log('won')
        setStatus('Player ' + current + ' won!')
      } else {setStatus('Next player: ' + next)}
    }
  }
  
  function checkWin(squares, current) {
    if (squares[0] == current && squares[1] == current && squares[2] == current) {return true}
    else if (squares[3] == current && squares[4] == current && squares[5] == current) {return true}
    else if (squares[6] == current && squares[7] == current && squares[8] == current) {return true}

    else if (squares[0] == current && squares[3] == current && squares[6] == current) {return true}
    else if (squares[1] == current && squares[4] == current && squares[7] == current) {return true}
    else if (squares[2] == current && squares[5] == current && squares[8] == current) {return true}

    else if (squares[0] == current && squares[4] == current && squares[8] == current) {return true}
    else if (squares[2] == current && squares[4] == current && squares[6] == current) {return true}
  }

  function restart() {
    setSquares([])
    setWon(false)
    setStatus('Next player: ' + current)
  }
  
  return (
    <section className="content-center">
      <div className="text-center">{status}</div>
      <div className="h-20 flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="h-20 flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="h-20 flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      <div className="flex justify-center pt-5">
        <Square value={'Restart'} onSquareClick={() => restart()}/>
      </div>
    </section>
  )
}