// QuizList.js
import React from 'react';

const QuizList = ({ quizzes, onSelectQuiz }) => {
  return (
    <div className="mt-4">
      <h2>📚 Quizzes 📚</h2>
      <ul className="list-unstyled">
        {quizzes.map((quiz) => (
          <li
            key={quiz.id}
            className="mb-2 p-2 bg-light rounded"
            onClick={() => onSelectQuiz(quiz)}
            style={{ cursor: 'pointer' }}
          >
            {`📝 ${quiz.title} Quiz`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
