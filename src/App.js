import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserHistory } from "history";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import * as routes from "./constants";
import { logoutUser, setCurrentUser } from "./actions/authentication";

import "./reset.scss";
import "./index.scss";

import SignUp from "./containers/SignUp";
import Home from "./containers/Home";
import HeaderContainer from "./containers/HeaderContainer";
import SignIn from "./containers/SignIn";
import Reset from "./containers/Reset";
import Footer from "./components/Footer";
import PlaneSeats from "./containers/PlaneSeats/PlaneSeats";
import PassengersList from "./containers/PassengerList/PassengerList";
import OrderHistory from "./containers/OrderHistory/OrderHistory";

import "bootstrap/dist/css/bootstrap.min.css";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = routes.SIGN_IN;
  }
}

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="MainElems">
            <HeaderContainer />
            <Route exact path="/" component={Home} />
            <Route exact path="/sign_up" component={SignUp} />
            <Route exact path="/sign_in" component={SignIn} />
            <Route exact path="/reset_pass" component={Reset} />
            <Route exact path="/select_seats" component={PlaneSeats} />
            <Route exact path="/passenger_list" component={PassengersList} />
            <Route exact path="/orders_history" component={OrderHistory} />
          </div>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

export default App;
