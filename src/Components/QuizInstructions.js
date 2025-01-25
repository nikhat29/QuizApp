import React from 'react'
import { Link } from 'react-router-dom'

const QuizInstructions = () => {
  return (
    <div>
        <div className='instructions container'>
            <h1>How to Play the Game</h1>
            <p>Ensure you read this guide from start to finish.</p>
            <ul className='browser-default' id='main-list'>
                <li>It consists of 15 questions.</li>
                <li>The clock is ticking! A timer will start as soon as you begin the quiz, and you’ll have a limited time to answer each question. </li>
                <li>
                    Every question contains 4 options.
                </li>
                <li>Select the option which best answers the question by clikcing (or selecting) it.</li>
                <li>You can check hints to answer correctly.</li>
                <li>Feel free to quit the game at any time. In that case, your scores will be revealed afterwards.</li>
                <li>Let's do this if you think you have got what it takes.</li>
            </ul>
            <div className='links'>
                <span className='left'><Link to="/">Back</Link></span>
                <span className='right'><Link to="/play">Start the Game</Link></span>
            </div>
        </div>
    </div>
  )
}

export default QuizInstructions