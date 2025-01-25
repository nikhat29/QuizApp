import React from 'react'
import Icon from '@mdi/react';
import { mdiHelpBoxMultipleOutline  } from '@mdi/js';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='home'>
        <section>
            <div className='icon'>
            <Icon path={mdiHelpBoxMultipleOutline} size={5} color="orange"/>
            </div>
            <h1>Quiz App</h1>
            <Link to="/play/instructions"> <div className='play-button-container'>
           <ul>
            <li className='play-button'>
                Play
            </li>
           </ul>
            </div></Link>
            
        </section>
    </div>
  )
}

export default Home