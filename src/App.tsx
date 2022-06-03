import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainPage, MovieDetail, TvDetail, TvPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tv" component={TvPage} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/tv/:id" component={TvDetail} />
      </Switch>
    </Router>
  );
}

export default App;
