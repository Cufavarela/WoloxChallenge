import React, { useContext, useEffect, useState } from "react";
import { getList } from "../../Functions/Functions";
import Technology from "./Technology";
import "./Content.scss";
import { AppContext } from "../../Context/AppContext";

function Content() {
  const [originalData, setOriginalData] = useState([]);
  const [sortAToZ, setSortAToZ] = useState(true);
  const [parsedData, setParsedData] = useState(originalData);
  const [searchTerm, setSearchTerm] = useState("");
  const { technologies } = useContext(AppContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortTechnology = (a, b) => {
    if (a.tech < b.tech) return sortAToZ ? -1 : 1; // sortAToZ true : false
    if (a.tech > b.tech) return sortAToZ ? 1 : -1; // sortAToZ true : false
    return 0;
  };

  useEffect(() => {
    getList().then((res) => setOriginalData(res.data.sort(sortTechnology)));
    getList().then((res) => console.log(res));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  useEffect(() => {
    if (!searchTerm && originalData === []) return setParsedData(originalData);
    setParsedData([]);
    const dataFiltered = originalData
      .filter(
        (technology) =>
          technology.tech.toLowerCase().includes(searchTerm) ||
          technology.type.toLowerCase().includes(searchTerm)
      )
      .sort(sortTechnology);
    setParsedData(dataFiltered);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [searchTerm, sortAToZ, originalData]);

  return (
    <>
      <header className="container">
        <h1>Tecnologías</h1>
        <nav>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
              onKeyUp={handleChange}
            />
            <button onClick={() => setSortAToZ(!sortAToZ)}>
              {sortAToZ ? "A to Z" : "Z to A"}
            </button>
          </div>
          {technologies.length > 0 ? (
            <h2>
              Liked 💙 <strong>{technologies.length}</strong>
            </h2>
          ) : null}
        </nav>
      </header>
      <section className="container">
        <div className="technologies-wrapper">
          {parsedData.map((technology) => (
            <Technology key={technology.tech} {...technology} />
          ))}
        </div>
        <h2>
          Showing <strong>{parsedData.length}</strong> technologie
          {`${parsedData.length !== 1 ? "s" : ""}`}
        </h2>
      </section>
    </>
  );
}

export default Content;
