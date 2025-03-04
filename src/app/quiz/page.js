"use client";
import { useState } from "react";
import quizData from "../data/quiz-data.json";

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);

  const currentQuestion = quizData.quizData[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);

      if (option === currentQuestion.answer) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizEnded(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setQuizEnded(false);
  };

  return (
    <div className="quiz-container">
      {quizEnded ? (
        <>
          <div className="quiz-header">
            <h1>Book Reading Quiz</h1>
            <div className="header-end">
              <span>Final Score: {score}</span>
            </div>
          </div>
          <div className="quiz-content">
            <h2>Quiz Ended!</h2>
            <p style={{ margin: "20px 0" }}>
              You scored {score} out of {quizData.quizData.length}
            </p>
            <button onClick={handleRestartQuiz}>Restart Quiz</button>
          </div>
        </>
      ) : (
        <>
          <div className="quiz-header">
            <h1>Book Reading Quiz</h1>
            <div className="header-end">
              <p>
                {currentQuestionIndex + 1} of {quizData.quizData.length}
              </p>
              <span>Score: {score}</span>
            </div>
          </div>

          <div className="quiz-content">
            <h2>{currentQuestion.question}</h2>

            <div className={`options ${isAnswered ? "disabled-options" : ""}`}>
              {currentQuestion.options.map((option, index) => {
                let className = "";

                if (isAnswered) {
                  if (option === currentQuestion.answer) {
                    className = "correct-answer";
                  } else if (option === selectedOption) {
                    className = "incorrect-answer";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={className}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <button onClick={handleNextQuestion}>
                {currentQuestionIndex === quizData.quizData.length - 1
                  ? "Finish Quiz"
                  : "Next →"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
