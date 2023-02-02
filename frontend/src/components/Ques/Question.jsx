import React from 'react'
import Interview from './Interview'

const Question = () => {
  return (
    <div>
        <Interview></Interview>
        <div className='bg-gray-300 text-center mx-60 my-10'>
        <div className='py-10'>
            Tell something about yourself
        </div>
        <div className='flex flex-row text-center'>
            <button className="text-white bg-green-500 p-4 mx-auto my-10 rounded-lg hover:bg-green-400">Give Answer</button>
            <button className="text-white bg-green-500 p-4 mx-auto my-10 rounded-lg hover:bg-green-400">Next Question</button>
        </div>
    </div>
    </div>
  )
}

export default Question