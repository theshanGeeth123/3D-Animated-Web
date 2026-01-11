import React from 'react'

const SoundSection = () => {

  const handleLearnMore = () => {
  document
    .querySelector(".display-section")
    ?.scrollIntoView({ behavior: "smooth", block: "end" });
};


  return (
    <div className='sound-section wrapper'>
      <div className='body'>
        <div className='sound-section-content content'>
          <h2 className='title'>Key Specifications</h2>
          <p className='text'>(GT-S Model)</p>
          <span className='description'>Engine: 1.6L (1587cc) 4A-GEC DOHC 16-valve Inline-4</span>
          <ul className='links'>
            <li>
              <button className='button'>Buy</button>
            </li>
            <li>
              <a onClick={handleLearnMore} className='link'>Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SoundSection
