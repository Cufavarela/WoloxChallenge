import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

function PrivateRoute({ ...props }) {
  const { user } = useContext(AppContext);

  if (user && user.name !== undefined) {
    return <Route {...props} />;
  } else {
    return <Redirect to={"/"} />;
  }
}

export default PrivateRoute;
