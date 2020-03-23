import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import BookDetails from "./Pages/Details/BookDetails";
import Main from "./Components/Main/Index";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact render={props => <Main {...props} />} />
              <Route path="/login" render={props => <Login {...props} />} />
              <Route
                path="/register"
                render={props => <Register {...props} />}
              />
              <Route path="/home" render={props => <Home {...props} />} />
              <Route path={"/books/:id"} component={BookDetails} />
            </Switch>
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
