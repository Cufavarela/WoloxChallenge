import React from "react";
import { Link } from "react-router-dom";
import "../buttons.scss";

function BorderButton({ path, text, type, size }) {
  return (
    <Link className={`button + ${type} + ${size}`} to={path}>
      {text}
    </Link>
  );
}

export default BorderButton;
