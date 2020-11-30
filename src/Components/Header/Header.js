import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../Assets/logo_full_color.svg";
import BorderButton from "../Buttons/BorderButton/BorderButton";
import { AppContext } from "../../Context/AppContext";

function Header() {
  const { user } = useContext(AppContext);

  return (
    <header>
      <div className="container">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar">
          <Link to="/" className="navbarItem">
            Inicio
          </Link>
          <a href="#benefits" className="navbarItem">
            Beneficios
          </a>
          {user ? (
            <BorderButton path={"/list"} text={"Go to List"} type={"primary"} />
          ) : (
            <BorderButton path={"/register"} text={"Login"} type={"primary"} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
