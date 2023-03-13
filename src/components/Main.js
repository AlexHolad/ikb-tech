import React from "react";

import "./Main.css";

function Main({main}) {
  return <div className="main-container"> 
    <div className="image-container">
        <img src={main.img} alt={main.attr} className="main-image"/>
    </div>
    <div className="message-container">
        <h1>{main.headline1}</h1>
        <h1>{main.headline2}</h1>
        <h3>{main.suppLine}</h3>
    </div>
  </div>;
}

export default Main;
