import React from 'react'

export default function Modal({ isCorrect, turns, solution }) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>You win!</h1>
          <p className='solution'>{solution}</p>
          <p>You found the solution in {turns} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind!</h1>
          <p className='solution'>{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
      <button onClick={() => window.location.reload(false)}>Play new game</button>
    </div>
  )
}
