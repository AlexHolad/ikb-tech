import React from 'react'
import './Home.css'


import Navbar from '../components/Navbar'
import Quote from '../components/Quote'

import Main from '../components/Main'
import Zahlen from '../components/Zahlen'
import Leistungen from '../components/Leistungen'
import Kunden from '../components/Kunden'
import Schwerpunkte from '../components/Schwerpunkte'
import Programmen from '../components/Programmen'
import Kontakt from '../components/Kontakt'
import Karriere from '../components/Karriere'

import Footer from '../components/Footer'


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
            <Programmen programmen={data.sectionProgrammen} id='programmen'/>
            <Zahlen zahlen={data.zahlen}/>
            <Kontakt kontakt={data.sectionKontakt} id='kontakt'/>
            <Quote text= {data.sectionKarriere.quote}/>
            <Karriere karriere={data.sectionKarriere} handleClickScroll={handleClickScroll} id='karriere'/>
            <Footer footer={data.sectionFooter}/>
        </div>
    )
}

export default Home;