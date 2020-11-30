import React from "react";
import Header from "../../Components/Header/Header";
import "./landing.scss";
import hero from "../../Assets/Hero/Ic_ilustra_Hero@2x.png";
import ExternalButton from "../../Components/Buttons/ExternalButton/ExternalButton";
import BenefitsGrid from "./BenefitsGrid/BenefitsGrid";
import Footer from "../../Components/Footer/Footer";
import twitter from "../../Assets/twitter.svg";

function Landing() {
  return (
    <main>
      <section className="hero">
        <Header />
        <div className="container">
          <div className="title">
            <h1>
              Bienvenido a tu <br />
              <strong>Entrevista Técnica</strong> en
              <span className="text-green"> Wolox</span>
            </h1>
          </div>
          <div className="illustration">
            <img src={hero} alt="Trabajando en Wolox"></img>
          </div>
        </div>
      </section>
      <section className="woloxers-wrapper">
        <div className="woloxers">
          <h2 className="text-blue">
            <span className="text-green">350 + </span>
            <span>Woloxers</span>
          </h2>
          <div className="twitter">
            <img src={twitter} alt="twitter"></img>
            <p>@Wolox</p>
          </div>
          <ExternalButton
            text={"Siguenos"}
            type={"white"}
            size={"big"}
            path={
              "https://twitter.com/wolox?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            }
          />
        </div>
        <div className="work">
          <h2>
            Trabajamos para <span className="text-blue">convertir</span>
            <span className="text-green"> ideas</span> en productos.
          </h2>
        </div>
      </section>
      <BenefitsGrid />
      <Footer />
    </main>
  );
}

export default Landing;
