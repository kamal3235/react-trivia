// Abu Kamal
// property function

import React from "react";
import { Question } from "../sampleQuestion";

interface Props {
  question: Question;
  onAnswerSelect: (answer: string) => void;
}

const QuestionCard: React.FC<Props> = ({ question, onAnswerSelect }) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
