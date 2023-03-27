import React from "react";

import "./Kontakt.css";

function Kontakt({ kontakt, id }) {
  const { category, headline, contactTypes, img } = kontakt;

  return (
    <div className="kontakt-section" id={id}>
      <div className="kontakt-text-container">
        <div className="kontakt-category">{category}</div>
        <div className="kontakt-headline">{headline}</div>
        <ul className="kontakt-list-container">
          {contactTypes.map((contactBlock) => {
            return (
              <li key={contactBlock.attr}>
                <img src={contactBlock.icon} alt={contactBlock.attr} />
                <div>{contactBlock.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="kontakt-img-container">
        <img className="kontakt-img" src={img.src} alt={img.alt} />
      </div>
    </div>
  );
}

export default Kontakt;
