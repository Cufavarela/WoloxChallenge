import React from "react";
import ExternalButton from "../Buttons/ExternalButton/ExternalButton";
import "./footer.scss";
import logoDark from "../../Assets/logo_dark.svg";

function Footer() {
  return (
    <div className="container footer">
      <div className="footerText">
        <h1>
          Gracias por <span className="blue">completar el ejercicio</span>
        </h1>
        <h2>Te invitamos a ver más información</h2>
      </div>
      <ExternalButton
        path={"https://www.wolox.com.ar/"}
        text={"Conocer más"}
        type={"filled"}
        size={"big"}
      />
      <div className="logoContainer">
        <img src={logoDark} alt="logo"></img>
      </div>
    </div>
  );
}

export default Footer;
