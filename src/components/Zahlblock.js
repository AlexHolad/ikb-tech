import React from 'react'

import './Zahlblock.css'

function Zahlblock({zahlblock}) {
    const {main, category, description} = zahlblock
  return (
    <div className='zahlblock-container'>
        <div className='main-zahl'>{main}</div>
        <div className='horizontal-line'></div>
        <div className='category'>{category}</div>
        <div className='description'>{description}</div>
    </div>
  )
}

export default Zahlblock