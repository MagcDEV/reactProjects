import React, { useState } from 'react';

const Square = (props) => {
  const [value, setValue] = useState('')
  return (
    <button class="square" onClick={() => setValue('X')} >
      {props.value}
    </button>
  )
}

const Board = () => {

  const [vector, setVector] = useState(Array(9).fill(null))
  const status = 'Next player: X'
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={vector[0]} onClick={handleClick(0)}/>
        <Square value={vector[1]}/>
        <Square value={vector[2]}/>
      </div>
      <div className="board-row">
        <Square value={vector[3]}/>
        <Square value={vector[4]}/>
        <Square value={vector[5]}/>
      </div>
      <div className="board-row">
        <Square value={vector[6]}/>
        <Square value={vector[7]}/>
        <Square value={vector[8]}/>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div></div>
        <ol></ol>
      </div>
    </div>
    )
}

export default App;
