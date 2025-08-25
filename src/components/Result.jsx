import React from 'react'

const Result = ({ score, total, onPlayAgain }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
            <p className="text-lg">
                You scored {score} out of {total}!
            </p>
            <button
                className="font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-400 px-10 py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-cyan-500 transition duration-300 cursor-pointer text-lg my-6"
                onClick={onPlayAgain}
            >
                Play Again
            </button>
        </div>
    )
}

export default Result
