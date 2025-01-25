import React from 'react'

const Result = ({score, totalQuestions}) => {
  return (
    <div className='result container'>
        <h2>Result: {`${score} out of ${totalQuestions} answers are correct!`}</h2>
        <p>Percentage: {Math.round((score/totalQuestions)*100)}%</p>
        <p>{score === totalQuestions ? "Perfect score!" : 
        (`Good Job, Keep practicing!`)}</p>
    </div>
  )
}

export default Result