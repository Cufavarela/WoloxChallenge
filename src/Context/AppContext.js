import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const savedTechnologies = () =>
    JSON.parse(localStorage.getItem("technologies")) ?? [];
  const savedUser = () => JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(savedUser);
  const [technologies, setTechnologies] = useState(savedTechnologies);

  const addTechnology = (tech) => {
    setTechnologies([...technologies, tech]);
  };

  const removeTechnology = (tech) => {
    if (technologies.indexOf(tech) === -1) return;
    setTechnologies(technologies.filter((technolgy) => technolgy !== tech));
  };

  useEffect(() => {
    localStorage.setItem("technologies", JSON.stringify(technologies));
    console.log("Saved technologies in localStorage");
  }, [technologies]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Saved user in localStorage success");
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        technologies,
        addTechnology,
        removeTechnology,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
