import React from "react";

import "./Karriere.css";

import Description from "./Description";

function Karriere({ karriere, id, handleClickScroll }) {
  const { img, category, headline, text, proposal, linkId } = karriere;
  return (
    <div className="karriere-section" id={id}>
      <div className="karriere-img-container">
        <img className="karriere-img" src={img.src} alt={img.alt} />
      </div>
      <Description
        category={category}
        headline={headline}
        text={text}
        proposal={proposal}
        linkId={linkId}
        handleClickScroll={handleClickScroll}
      />
    </div>
  );
}

export default Karriere;
