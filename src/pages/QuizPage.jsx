import React from 'react'
import QuizBox from '../components/QuizBox'
import Footer from '../components/Footer'

const QuizPage = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-gray-200'>
      <div className='flex-1 flex items-center justify-center'>
        <QuizBox/>
      </div>
      <Footer/>
    </div>
  )
}

export default QuizPage
