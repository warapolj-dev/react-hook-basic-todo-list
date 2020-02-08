import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Asset } from "./pages";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/asset">
        <Asset />
      </Route>
    </Switch>
  );
}

export default Routes;
