import React from 'react'

import "./Leistungen.css"

import Leistung from "./Leistung"

function Leistungen({leistungen}) {
    const {category, headline, text, services} = leistungen;
  return (
    <section className='leistungen-section'>
        <div className='leistunen-icons-container'>
            {services.map((service)=> {
                return (
                    <Leistung icon={service.icon} title={service.title}/>
                )
            })}
        </div>
        <div className='leistunen-text-container'>
            <div>{category}</div>
            <div>{headline}</div>
            <p>{text}</p>
        </div>
    </section>
  )
}

export default Leistungen