import React from 'react'
import './Home.css'


import Navbar from '../components/Navbar'
import Quote from '../components/Quote'

import Main from '../components/Main'
import Zahlen from '../components/Zahlen'
import Leistungen from '../components/Leistungen'
import Kunden from '../components/Kunden'
import Schwerpunkte from '../components/Schwerpunkte'


const Home = ({data}) => {
    const handleClickScroll = (section) => {
      const lowerCaseRoute = section.toLowerCase()
      const element = document.getElementById(lowerCaseRoute);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div className='home-container'>
            <Navbar nav={data.nav} handleClickScroll={handleClickScroll}/>
            <Main main={data.sectionMain}/>
            <Quote text= {data.sectionLeistungen.quote}/>
            <Leistungen leistungen={data.sectionLeistungen} id="leistungen">Leistungen</Leistungen>
            <Quote text= {data.sectionKunden.quote}/>
            <Kunden kunden={data.sectionKunden} id='kunden'/>
            <Schwerpunkte schwerpunkte={data.sectionSchwerpunkte} id='schwerpunkte'/>
            <Quote text= {data.sectionProgrammen.quote}/>
            <div id='programmen'>Programmen</div>
            <Zahlen zahlen={data.zahlen}/>
            <div id='kontakt'>Kontakt</div>
            <Quote text= {data.sectionKarriere.quote}/>
            <div id='karriere'>Karriere</div>
            <div>Footer</div>
        </div>
    )
}

export default Home;