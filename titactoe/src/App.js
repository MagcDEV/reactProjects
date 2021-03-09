import React, { useState, useEffect } from 'react'; 

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

const Square = ({value, id,  handleClick, clase}) => { 
    return (
      <td className={clase} onClick={() => handleClick(id)}>
      {value}
    </td>
  )
}

const Board = () => {
  const [state, setState] = useState({
      squares: Array(9).fill(null),
      marked: [0,1,2,3,4,5,6,7,8],
      xIsNext: true
  });

  const winner = calculateWinner(state.squares); 
  let status;
  if(winner) {
      status = 'Winner: ' + winner;
  } else if (!winner && !state.squares.includes(null)) {
    status = 'Draw'
  } else {
      status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  const handleClick = (id) => {
      const squares = state.squares.slice();
      const marked = state.marked.slice();
      if (calculateWinner(squares) || squares[id]) {
          return;
      }
      squares[id] = state.xIsNext ? 'X' : 'O';
      marked[id] = 'M'
      setState({squares: squares, marked: marked, xIsNext: !state.xIsNext})
  }

  useEffect(() => {
    if (!state.xIsNext) {
      const squares = state.squares.slice();
      const marked = state.marked.slice();
      let newSpot = bestSpot()
      if (calculateWinner(squares) || squares[newSpot]) {
          return;
      }
      squares[newSpot] = state.xIsNext ? 'X' : 'O';
      marked[newSpot] = 'M'
      setState({squares: squares, marked: marked, xIsNext: !state.xIsNext})
    }
  }, [state])

  const refreshPage = () => {
    setState({
      squares: Array(9).fill(null),
      marked: [0,1,2,3,4,5,6,7,8],
      xIsNext: true
    })
  }

  const empySquares = () => {
    return state.marked.filter(s => typeof s == 'number');
  }

  const bestSpot = () => {
    return empySquares()[randomNumber(empySquares().length)]
  }

  const randomNumber = (i) => {
    return Math.floor(Math.random() * i)
  }

/*  const minMax = () => {
    return 1
  } */

  return (
    <>
      <h1>TIC TAC TOE</h1>
      <h2 className="status">{status}</h2>
        <table>
          <tbody>
          <tr>
        <Square value={state.squares[0]} id={0} handleClick={handleClick}/>
        <Square value={state.squares[1]} id={1} handleClick={handleClick} clase={'vert'}/>
        <Square value={state.squares[2]} id={2} handleClick={handleClick}/>
          </tr>
          <tr>
        <Square value={state.squares[3]} id={3} handleClick={handleClick} clase={'hori'}/>
        <Square value={state.squares[4]} id={4} handleClick={handleClick} clase={'vert hori'}/>
        <Square value={state.squares[5]} id={5} handleClick={handleClick} clase={'hori'}/>
          </tr>
          <tr>
        <Square value={state.squares[6]} id={6} handleClick={handleClick}/>
        <Square value={state.squares[7]} id={7} handleClick={handleClick} clase={'vert'}/>
        <Square value={state.squares[8]} id={8} handleClick={handleClick}/>
          </tr>
          </tbody>
        </table>
        <button onClick={refreshPage}>Replay</button>
    </>
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
