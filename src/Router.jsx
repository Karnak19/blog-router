import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PostDetails from "./PostDetails";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
