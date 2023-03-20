import React from "react";
import "./Zahlen.css";

import Zahlblock from "./Zahlblock";

function Zahlen({ zahlen }) {
  return (
    <section className="zahlen-container">
      {zahlen.map((zahlblock) => {
        return <Zahlblock zahlblock={zahlblock} key={zahlblock.category} />;
      })}
    </section>
  );
}

export default Zahlen;
