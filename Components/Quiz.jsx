import React, { useState, useContext } from "react";
import { QUESTIONS } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

export default function Quiz() {
  const { gameState, setGameState, score, setScore } = useContext(QuizContext);

  const [optionChosen, setOptionChosen] = useState("");
  let [currentQuestion, setCurrentQuestion] = useState(0);

  function nextQuestion() {
    if (QUESTIONS[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  function finishQuiz() {
    if (QUESTIONS[currentQuestion].answer == optionChosen) {
        setScore(score + 1);
      }
    setGameState('end-screen')
  }

  return (
    <div className="quiz">
      <h1>{QUESTIONS[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {QUESTIONS[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {QUESTIONS[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {QUESTIONS[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {QUESTIONS[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion == QUESTIONS.length - 1 ? (
        <button onClick={finishQuiz}>Show Result</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}
