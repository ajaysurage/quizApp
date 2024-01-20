// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';
import quizzesData from './components/data';

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [scores, setScores] = useState([]);

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  
  const handleQuizSubmit = (answers) => {
    // Calculate the score
    const correctAnswers = selectedQuiz.questions.map((question) => question.correctAnswer);
    const score = answers.reduce((acc, answer, index) => {
      return answer === correctAnswers[index] ? acc + 1 : acc;
    }, 0);
  
    console.log('Correct Answers:', correctAnswers);
    console.log('Student Answers:', answers);
    console.log('Score:', score);
  
    // Update the scores
    setScores((prevScores) => [
      ...prevScores,
      { student: selectedQuiz.id, score, quizTitle: selectedQuiz.title },
    ]);
    setSelectedQuiz(null);
  };
  
  
  
  
  return (
    <div className="container mt-5 text-center">
      <h1>🚀 Quiz App 🚀</h1>
      {selectedQuiz ? (
        <Quiz quiz={selectedQuiz} onSubmit={handleQuizSubmit} />
      ) : (
        <QuizList quizzes={quizzesData} onSelectQuiz={handleSelectQuiz} />
      )}
      <Leaderboard scores={scores} />
    </div>
  );
};

export default App;
