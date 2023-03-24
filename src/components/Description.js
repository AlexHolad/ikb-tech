import React from "react";

import "./Description.css";

function Description({ category, headline, text }) {
  return (
    <div className="description-block">
      <div className="section-category">{category}</div>
      <div className="section-headline">{headline}</div>
      {!Array.isArray(text) ? (
        <div className="section-message">{text}</div>
      ) : (
        <ul className="section-message">
        {text.map((title)=> {
          return (
            <li>{title}</li>
          )
        })}
        </ul>
      )}
    </div>
  );
}

export default Description;
