import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./Technology.scss";

function Technology({
  tech,
  year,
  author,
  license,
  language,
  type,
  logo,
  ...props
}) {
  const { technologies, addTechnology, removeTechnology } = useContext(
    AppContext
  );

  const hasLike = technologies && technologies.indexOf(tech) !== -1;
  const handleLike = () => {
    if (hasLike) return removeTechnology(tech);
    return addTechnology(tech);
  };

  return (
    <article className={`technology ${hasLike ? "liked" : ""}`}>
      <img src={logo} alt={tech} />
      <div className="data">
        <header className="name">
          <h2>{tech}</h2>
          <button onClick={handleLike}>{hasLike ? "❌" : "🤍"}</button>
        </header>
        <h3>
          {language} - {type}
        </h3>
        <footer>
          {author} • {year} • {license}
        </footer>
      </div>
    </article>
  );
}

export default Technology;
