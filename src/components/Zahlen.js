import React from "react";
import "./Zahlen.css";

import Zahlblock from "./Zahlblock";

function Zahlen({ zahlen }) {
  return (
    <div className="zahlen-container">
      {zahlen.map((zahlblock) => {
        return <Zahlblock zahlblock={zahlblock} key={zahlblock.category} />;
      })}
    </div>
  );
}

export default Zahlen;
