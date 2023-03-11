import React from 'react'

import './Quote.css'

const Quote = ({text, id}) => {
    return (
        <div className='quote-container' id={id}>
            <p>{text}</p>
        </div>
    )
}

export default Quote