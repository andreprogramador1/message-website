import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/perfil" component={() => <div>Perfil</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
