// Leaderboard.js
import React from 'react';

const Leaderboard = ({ scores }) => {
  const groupedScores = scores.reduce((acc, score) => {
    const quizTitle = score.quizTitle;
    if (!acc[quizTitle]) {
      acc[quizTitle] = [];
    }
    acc[quizTitle].push(score);
    return acc;
  }, {});

  return (
    <div className="mt-4">
      <h2>🏆 Leaderboard 🏆</h2>
      {Object.keys(groupedScores).map((quizTitle) => (
        <div key={quizTitle} className="mb-4">
          <h3>{`Quiz: ${quizTitle}`}</h3>
          <ul className="list-unstyled">
            {groupedScores[quizTitle].map((score, index) => (
              <li key={index} className="mb-2">
                {`👩‍🎓 Student ${score.student} - ${score.score} points`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
