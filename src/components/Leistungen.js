import React from 'react'

import "./Leistungen.css"

import Description from './Description';

import Leistung from "./Leistung"



function Leistungen({leistungen, id}) {
    const {category, headline, text, services} = leistungen;
  return (
    <section className='leistungen-section' id={id}>
        <div className='leistunen-icons-container'>
            {services.map((service)=> {
                return (
                    <Leistung icon={service.icon} title={service.title}/>
                )
            })}
        </div>
        <Description category={category} headline={headline} text={text}/>
    </section>
  )
}

export default Leistungen