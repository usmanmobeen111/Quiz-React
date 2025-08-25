import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Quiz from "./Quiz";

const categories = [
  { value: "9", label: "General Knowledge" },
  { value: "10", label: "Entertainment: Books" },
  { value: "11", label: "Entertainment: Film" },
  { value: "12", label: "Entertainment: Music" },
  { value: "13", label: "Entertainment: Musicals & Theatres" },
  { value: "14", label: "Entertainment: Television" },
  { value: "15", label: "Entertainment: Video Games" },
  { value: "16", label: "Entertainment: Board Games" },
  { value: "17", label: "Science & Nature" },
  { value: "18", label: "Science: Computers" },
  { value: "19", label: "Science: Mathematics" },
];

const difficultyOptions = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const QuizSetup = () => {
  const [category, setCategory] = useState("9");
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStart = () => {
    setShowQuiz(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!showQuiz ? (
        <motion.div
          key="setup"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <h1 className="text-3xl font-extrabold text-blue-500 text-center mb-8 tracking-tight">
            Quiz Setup
          </h1>
          <form className="space-y-6">
            {/* CATEGORY */}
            <div>
              <label
                htmlFor="category"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Select Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* DIFFICULTY */}
            <div>
              <label
                htmlFor="difficulty"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Select Difficulty
              </label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              >
                {difficultyOptions.map((diff) => (
                  <option key={diff.value} value={diff.value}>
                    {diff.label}
                  </option>
                ))}
              </select>
            </div>

            {/* NUMBER OF QUESTIONS */}
            <div>
              <label
                htmlFor="amount"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Number of Questions
              </label>
              <input
                type="number"
                id="amount"
                min="1"
                max="20"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                style={{ MozAppearance: "textfield" }}
              />
            </div>
          </form>

          {/* START BUTTON */}
          <button
            onClick={handleStart}
            className="w-full font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-400 px-10 py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-cyan-500 transition duration-300 cursor-pointer text-lg my-6"
          >
            Start Quiz
          </button>
        </motion.div>
      ) : (
        <motion.div
          key="quiz"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <Quiz
            category={category}
            amount={amount > 20 ? 20 : amount}
            difficulty={difficulty}
            onPlayAgain={() => setShowQuiz(false)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuizSetup;
