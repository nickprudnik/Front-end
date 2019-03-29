import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserHistory } from 'history';

import './reset.scss';
import './index.scss';

import SignUp from './containers/SignUp'
import Home from './containers/Home';
import HeaderContainer from './containers/HeaderContainer';
import SignIn from './containers/SignIn';
import Reset from './containers/Reset';
import Footer from './components/Footer';
import PlaneSeats from './containers/PlaneSeats/PlaneSeats';

import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router history = { history }> 
          <div className="MainElems">
            <HeaderContainer />
              <Route exact path="/" component={ Home } />
              <Route exact path="/sign_up" component={ SignUp } />
              <Route exact path="/sign_in" component={ SignIn } />
              <Route exact path="/reset_pass" component={ Reset } />
              <Route exact path="/select_seats" component={ PlaneSeats } />
          </div>
        </Router>
              <Footer />
      </Provider>  
    );
  }
}

export default App;