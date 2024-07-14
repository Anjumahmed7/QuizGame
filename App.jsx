import React, { useContext, useState } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
// import ContextsProvider from "./Helpers/Contexts";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{ score, setScore, gameState, setGameState }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end-screen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
