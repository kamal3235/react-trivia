//Abu Kamal
// Extraction from App.tsx to make new component

import { useEffect, useState } from "react";
import { questions } from "../sampleQuestion";
import QuestionCard from "./QuestionCard";

function TriviaManager() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  // set Timer

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else {
      handleTimeOut();
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  function handleTimeOut() {
    alert("Time's up!");
    if (!questions[currentQuestionIndex].userAnswer) {
      goToNextQuestion();
    }
  }

  function handleAnswerSelect(answer: string) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (answer === correctAnswer) {
      setScore((prevScore) => prevScore + 1); //update score on correct answer
    }
    questions[currentQuestionIndex].userAnswer = answer; //store user answer
    // goToNextQuestion(); dont auto go to the next
  }

  function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(60); //reset time for next question
    } else {
      alert("Quiz finished! Your score: ${score}");
      setCurrentQuestionIndex(0);
      setScore(0); //reset score
      setTimeLeft(60); //reset timer
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
      <h5>Score: {score}</h5>
      <h6>Time Left: {timeLeft} seconds</h6>
    </div>
  );
}

export default TriviaManager;
