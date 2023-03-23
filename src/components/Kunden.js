import React from "react";

import "./Kunden.css";

import Description from "./Description";

function Kunden({ kunden, id }) {
  const { category, headline, text, kundenLogos } = kunden;
  return (
    <section className="kunden-section" id={id}>
      <Description category={category} headline={headline} text={text} />
      <div className="kunden-logos-container">
        {kundenLogos.map((logo) => {
          return (
            <div className="logo-container" key={logo.title}>
              <img src={logo.logo} alt={logo.title}/>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Kunden;
