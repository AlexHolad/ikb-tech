import React from 'react'

import "./Leistung.css"

function Leistung({title, icon}) {
  return (
    <div className='leistung-container'>
        <img src={icon} alt={title} className='leistung-icon'/>
        <div className='leistung-title'>{title}</div>
    </div>
  )
}

export default Leistung