import React, { useState } from 'react'; 

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Square = ({value, id,  handleClick}) => { 
    return (
      <button className="square" onClick={() => handleClick(id)}>
      {value}
    </button>
  )
}

const Board = () => {
  const [state, setState] = useState({
      squares: Array(9).fill(null),
      xIsNext: true,
  });

  const winner = calculateWinner(state.squares); 
  let status;
  if(winner) {
      status = 'Winner: ' + winner;
  } else {
      status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  const handleClick = (id) => {
      const squares = state.squares.slice();
      if (calculateWinner(squares) || squares[id]) {
          return;
      }
      squares[id] = state.xIsNext ? 'X' : 'O';
      setState({squares: squares, xIsNext: !state.xIsNext})
  }

  

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={state.squares[0]} id={0} handleClick={handleClick}/>
        <Square value={state.squares[1]} id={1} handleClick={handleClick}/>
        <Square value={state.squares[2]} id={2} handleClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={state.squares[3]} id={3} handleClick={handleClick}/>
        <Square value={state.squares[4]} id={4} handleClick={handleClick}/>
        <Square value={state.squares[5]} id={5} handleClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={state.squares[6]} id={6} handleClick={handleClick}/>
        <Square value={state.squares[7]} id={7} handleClick={handleClick}/>
        <Square value={state.squares[8]} id={8} handleClick={handleClick}/>
      </div>
    </div>
  )
}

const App = () => {
  const refreshPage = () => {
      window.location.reload(false);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board />
        <button onClick={refreshPage}>Restart</button>
      </div>
      <div className="game-info">
        <div></div>
        <ol></ol>
      </div>
    </div>
    )
}

export default App;
