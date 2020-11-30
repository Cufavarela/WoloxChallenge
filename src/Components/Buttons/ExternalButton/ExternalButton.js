import React from "react";
import "../buttons.scss";

function ExternalButton({ path, text, type, size }) {
  return (
    <a target="blank" className={`button + ${type} + ${size}`} href={path}>
      {text}
    </a>
  );
}

export default ExternalButton;
