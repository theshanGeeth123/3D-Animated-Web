import React from 'react'
import iphone from '../assets/images/logo2.png'
import HoldingIphone from '../assets/images/iphone-hand.png'


const JumboTron = () => {

    const handleLearnMore = () => {
        const element =  document.querySelector(".sound-section");
        window.scrollTo({

            top:element?.getBoundingClientRect().top,
            left:0,
            behavior:'smooth'

        });
    }

  return (
    <div className='jumbotron-section wrapper'>

        <h2 className='title'></h2>
        <img  className='logo' src={iphone}/>
        <p className='text'>Toyota AE86</p>

        

        <ul className='links'>
            <li>
                <button className='button'>buy</button>
            </li>
            <li>
                <a className='link' onClick={handleLearnMore}>Learn More</a>
            </li>
        </ul>
    </div>
  )
}

export default JumboTron
