import React from "react";
import ApplicationList from "./Components/ApplicationList";
import { ApplicationsProvider } from "./ApplicationsContext";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";

/*
 * Utilises react-router-dom to map a url to each component
 * to enable Nav.js the ability to link to respective url
 * ApplicationsProvider is used to explicitly demonstrate the use of
 * React Context, although the app will just utilise formikContext
 */

function App() {
  return (
    <ApplicationsProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/dashboard" exact component={ApplicationList} />
            <Route path="/" exact component={MainPage} />
          </Switch>
        </div>
      </Router>
    </ApplicationsProvider>
  );
}

export default App;
