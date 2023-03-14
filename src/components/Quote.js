import React from 'react'

import './Quote.css'

const Quote = ({text}) => {
    return (
        <div className='quote-container'>
            <p>{text}</p>
        </div>
    )
}

export default Quote