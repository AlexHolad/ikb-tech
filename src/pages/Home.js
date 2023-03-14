import React from 'react'
import './Home.css'


import Navbar from '../components/Navbar'
import Quote from '../components/Quote'

import Main from '../components/Main'
import Zahlen from '../components/Zahlen'


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
            <div id="leistungen">Leistungen</div>
            <Quote text= {data.sectionKunden.quote}/>
            <div id='kunden'>Kunden</div>
            <Quote text= {data.sectionSchwerpunkte.quote}/>
            <div id='schwerpunkte'>Schwerpunkte</div>
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