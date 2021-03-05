import React, { useState } from 'react';

const Square = (props) => {
  return (
    <button class="square">
      {/* TODO */}
    </button>
  )
}

const Board = () => {
  const status = 'Next player: X'
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square i={0}/>
        <Square i={1}/>
        <Square i={2}/>
      </div>
      <div className="board-row">
        <Square i={3}/>
        <Square i={4}/>
        <Square i={5}/>
      </div>
      <div className="board-row">
        <Square i={6}/>
        <Square i={7}/>
        <Square i={8}/>
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
