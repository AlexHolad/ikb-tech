import React from 'react'

import "./Schwerpunkte.css"

function Schwerpunkte({schwerpunkte, id}) {
    const {schwerpunkteList} = schwerpunkte
  return (
    <section className='schwerpunkte-container' id={id}>{
        schwerpunkteList.map((block, index) => {
            return (
                <div className='schwerpunkt-container' key={block.attr}>
                    <img className='schwerpunkt-img' src={block.img} alt={block.attr}/>
                    <div className='schwerpunkt-block-text'>
                        {block.services.map((branche, index) => {
                            return (
                                <div key={branche}>{branche}</div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    )}</section>
  )
}

export default Schwerpunkte