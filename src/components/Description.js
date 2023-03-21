import React from "react";

import "./Description.css"



function Description({category, headline, text}) {
  return (
    <div className="description-block">
      <div className="section-category">{category}</div>
      <div className="section-headline">{headline}</div>
      <div className="section-message">{text}</div>
    </div>
  );
}

export default Description;
