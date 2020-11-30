import React from "react";
import benefits from "./benefits";

function BenefitsGrid() {
  return (
    <div id="benefits" className="benefits">
      <h2>
        Entre los beneficios que ofrecemos se encuentran <span>;)</span>
      </h2>
      <div className="benefitsGrid">
        {benefits.map((item) => (
          <div key={item.name} className="gridItem">
            <img src={item.image} alt={item.title}></img>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitsGrid;
