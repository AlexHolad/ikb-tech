import React from "react";

import "./Description.css";

function Description({ category, headline, text, proposal, handleClickScroll }) {

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
            <li key={title}>{title}</li>
          )
        })}
        </ul>
      )}
       {proposal && <div className="section-proposal hover-underline-animation" onClick={()=> handleClickScroll('kontakt')}>{proposal}</div>}
    </div>
  );
}

export default Description;
