import React from "react";

import "./Programmen.css";

import Description from "./Description";

function Programmen({programmen, id}) {

    const {category, headline, text, programmsLogos} = programmen;

  return (
    <section className="programmen-section" id={id}>
      <div className="programmen-logos-container">
            {programmsLogos.map((logo)=> {
                return (
                    <div className="programmen-logo-container">
                        <img src={logo.logo} alt={logo.attr} className="programmen-logo"/>
                    </div>
                )
            })}
      </div>
      <Description category={category} headline={headline} text={text}/>
    </section>
  );
}

export default Programmen;
