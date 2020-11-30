import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Screens/Landing/Landing";
import Register from "./Screens/Register/Register";
import { AppProvider } from "./Context/AppContext";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import List from "./Screens/List/List";
import Terms from "./Screens/Terms/Terms";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/list">
            <List />
          </PrivateRoute>
          <Route path="/terms&conditions">
            <Terms />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
