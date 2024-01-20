// Quiz.js
import React, { useState } from 'react';

const Quiz = ({ quiz, onSubmit }) => {
    const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));

    const handleOptionChange = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = quiz.questions[questionIndex].options[optionIndex];
        setAnswers(newAnswers);
    };



    const handleSubmit = () => {
        onSubmit(answers);
    };

    return (
        <div className="mt-4">
            <h2>{`📝 ${quiz.title} Quiz 📝`}</h2>
            {quiz.questions.map((question, index) => (
                <div key={question.id} className="mb-4">
                    <p>{question.text}</p>
                    <ul className="list-unstyled">
                        {question.options.map((option, optionIndex) => (
                            <li key={optionIndex} className="mb-2">
                                <input
                                    type="radio"
                                    id={`q${index + 1}o${optionIndex + 1}`}
                                    name={`q${index + 1}`}
                                    checked={answers[index] === quiz.questions[index].options[optionIndex]}
                                    onChange={() => handleOptionChange(index, optionIndex)}
                                />

                                <label htmlFor={`q${index + 1}o${optionIndex + 1}`} className="ml-2">
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button className="btn btn-primary" onClick={handleSubmit}>
                Submit 🚀
            </button>
        </div>
    );
};

export default Quiz;
