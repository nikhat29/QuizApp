import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [displayResult, setDisplayResult] = useState(false)
    const [displayHints, setDisplayHints] = useState(false)
    const [answered, setAnswered] = useState(false)
    const [timeLeft, setTimeLeft] = useState(60)
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(()=>{
        if(timeLeft < 0){
          nextQuestion();
          return;
        }
        const timer = setInterval(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);

        return () => clearInterval(timer)
    },[timeLeft])

    const handleAnswer = (answer) => {
      setSelectedAnswer(answer);
      if(answer === Questions[currentQuestionIndex].answer){
        setScore((prevScore) => prevScore+1)
      }
      setAnswered(true)
    }

    const nextQuestion = () =>{
      const nextQuestionIndex = currentQuestionIndex + 1;
      if(nextQuestionIndex < Questions.length){
        setCurrentQuestionIndex(nextQuestionIndex);
        setDisplayHints(false)
        setAnswered(false)
        setTimeLeft(15)
        setSelectedAnswer(null)
      }
      else{
        setDisplayResult(true);
      }
    }

    const handleHints = () => {
      setDisplayHints(true)
      
    }

    const handleFinish = () =>{
      setDisplayResult(true)
    }

  return (
    <div className='quiz instructions container'>
        {
            displayResult ? (<Result score={score} totalQuestions={Questions.length} />) : (
              <>
                <Question data={Questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={Questions.length}
                displayHints={displayHints}
                onHintClick = {handleHints}
                answered={answered}
                timeLeft={timeLeft}
                selectedAnswer = {selectedAnswer}
                />
                <div className='next-finish'>
                <button onClick={handleFinish}>Finish</button>

                <button onClick={nextQuestion}>Next Question</button>
                </div>
                </>
            )
        }
    </div>
  )
}

export default Quiz