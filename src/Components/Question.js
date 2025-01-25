import React from 'react'

const Question = ({data, onAnswer, currentQuestionIndex, totalQuestions, displayHints, onHintClick, answered, timeLeft,selectedAnswer}) => {
   
  return (
    <div>
       <div className='question-timer'> <h2>Question {currentQuestionIndex+1} / {totalQuestions}</h2>
       <span>{timeLeft} seconds</span></div>
        <div className='question-container'>
        <p className='question'>{data.question}</p>
       <div className='img-container'> {data.image && <img src={data.image} className='image' width="50%" alt={data.question}/>}</div>
        <div className='option-container'>{
            data.options.map((option, index)=>(
                  <button key={index} onClick={()=> onAnswer(option)} disabled={answered}
                  className={selectedAnswer === option ? 'selected': ''}>{option}</button>
            ))
        }</div></div>
        <div className='hint-container'>
        <button className='help-btn' onClick={onHintClick}>?</button>
        {
          displayHints ? (
            data.hints ? (
              <span className='hint'>Hint: {data.hints}</span>
            ) : (
              <span className='hint'>There are no hints available for this question.</span>
            )
          ) : null
        }</div>
    </div>
  )
}

export default Question