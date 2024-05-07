// Abu Kamal
// Trivia app with min 20 Question
// 2 or more component
// 1 or more button for interactivity
// show one question at a time
// move forward or back
// when moving forward the new card show next question, not answer
// keep score
// add timer as Suzzana ask for

import "./App.css";
import TriviaManager from "./components/TriviaManager";

function App() {
  return (
    <div className="container">
      <h1>Kamal Trivia Quiz</h1>
      <TriviaManager />
    </div>
  );
}

export default App;
