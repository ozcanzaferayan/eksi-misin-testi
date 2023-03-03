import { useState } from "react";
import "./App.css";
import Quiz from "react-quiz-component";

import { quiz } from "./quiz";
import Confetti from "react-confetti";
import { useWindowSize } from "./hooks/useWindowSize";

const ResultPage = (obj) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        gravity={0.3}
        initialVelocityX={6}
        initialVelocityY={6}
      />
      <h1 style={{ textAlign: "center" }}>Tebrikler, sıfır değil eksisiniz</h1>
    </>
  );
};
function App() {
  return (
    <Quiz
      disableSynopsis={true}
      continueTillCorrect={true}
      showInstantFeedback={false}
      quiz={quiz}
      showDefaultResult={false}
      customResultPage={() => {
        return <ResultPage />;
      }}
    />
  );
}

export default App;
