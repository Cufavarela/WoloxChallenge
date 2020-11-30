import React from "react";
import "../buttons.scss";

function SubmitButton({ text, type, size }) {
  return (
    <button type="submit" className={`button + ${type} + ${size}`}>
      {text}
    </button>
  );
}

export default SubmitButton;
