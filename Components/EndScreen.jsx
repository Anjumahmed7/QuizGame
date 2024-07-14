import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { QUESTIONS } from '../Helpers/QuestionBank';


export default function EndScreen() {
  const { gameState, setGameState, score, setScore } = useContext(QuizContext);

  function startAgain () {
    setScore(0)
    setGameState('menu')
  }

  return (
    <div>
      <h1>Your Score is : {score}</h1>
      <p>You have got {score} answers <b>CORRECT</b> out of {QUESTIONS.length}</p>
      <button onClick={startAgain}>Start Again</button>
    </div>
  )
}
