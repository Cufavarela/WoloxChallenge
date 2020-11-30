import React from "react";
import BorderButton from "../../Components/Buttons/BorderButton/BorderButton";
import "./terms.scss";

function Terms() {
  return (
    <div className="bg">
      <div className="container">
        <h1>
          <span>🚧 </span>
          Site under construction!
          <span> 🚧</span>
        </h1>
        <BorderButton
          path={"/"}
          text={"Go back"}
          type={"primary"}
          size={"big"}
        />
      </div>
    </div>
  );
}

export default Terms;
