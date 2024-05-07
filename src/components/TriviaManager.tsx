//Abu Kamal
// Extraction from App.tsx to make new component

import { useEffect, useState } from "react";
import { questions } from "../sampleQuestion";
import QuestionCard from "./QuestionCard";

function TriviaManager() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeOut();
    }
  }, [timeLeft]);

  function handleTimeOut() {
    alert("Time's up!");
    goToNextQuestion();
  }

  function handleAnswerSelect(answer: string) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (answer === correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);
    }
    questions[currentQuestionIndex].userAnswer = answer; //store user answer
    goToNextQuestion();
  }

  function goToNextQuestion() {
    setTimeLeft(30);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz finished! Your score: ${score}");
      setCurrentQuestionIndex(0); //reset quiz
    }
  }

  return (
    <div>
      <QuestionCard
        question={questions[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
      />
      <div>
        <button
          onClick={() =>
            setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))
          }
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={goToNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
      <h6>Time Left: {timeLeft} seconds</h6>
    </div>
  );
}

export default TriviaManager;
