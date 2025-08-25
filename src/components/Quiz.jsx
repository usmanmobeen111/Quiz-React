import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Result";

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
const decodeHTML = (str) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

const Quiz = ({ category, amount, difficulty, onPlayAgain }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        setQuestions(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, [category, amount, difficulty]);

  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[questionNumber];
      const shuffledOptions = shuffleArray([
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ]);
      setOptions(shuffledOptions);
    }
  }, [questionNumber, questions]);

  const handlePlayAgain = () => {
    setShowResult(false);
    setQuestionNumber(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
    onPlayAgain?.();
  };

  if (showResult) {
    return <Result score={score} total={questions.length} onPlayAgain={handlePlayAgain} />;
  }

  if (questions.length === 0) {
    return <div className="text-center text-gray-800 text-2xl">Loading...</div>;
  }

  const currentQuestion = questions[questionNumber];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (decodeHTML(option) === decodeHTML(currentQuestion.correct_answer)) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber((prev) => prev + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-4 text-gray-800">
        Question {questionNumber + 1} of {questions.length}
      </h1>

      <div className="mb-6 text-lg font-medium">
        {decodeHTML(currentQuestion.question)}
      </div>

      <div className="grid gap-4 mb-6">
        {options.map((option, idx) => {
          const decodedOption = decodeHTML(option);
          const correctAnswer = decodeHTML(currentQuestion.correct_answer);
          const selected = decodeHTML(selectedOption || "");

          let bg = "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200";
          if (showAnswer) {
            if (decodedOption === correctAnswer) {
              bg = "bg-green-500 text-white";
            } else if (decodedOption === selected) {
              bg = "bg-red-500 text-white";
            }
          }

          return (
            <button
              key={idx}
              className={`py-2 px-4 rounded transition-all duration-300 border ${bg}`}
              disabled={showAnswer}
              onClick={() => handleOptionClick(option)}
            >
              {decodedOption}
            </button>
          );
        })}
      </div>

      <button
        className={`w-full font-bold px-10 py-3 rounded-xl shadow-lg text-lg my-6 ${
          showAnswer
            ? "text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition duration-300 cursor-pointer"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!showAnswer}
        onClick={handleNext}
      >
        {questionNumber + 1 === questions.length ? "Show Result" : "Next Question"}
      </button>
    </div>
  );
};

export default Quiz;
