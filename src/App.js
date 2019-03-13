import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserHistory } from 'history';

import Navbar from './containers/Navbar';
import SignUp from './containers/SignUp'
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import Reset from './containers/Reset';

import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router history = { history }> 
          <div>
            <Navbar />
              <Route exact path="/" component={ Home } />
              <Route exact path="/sign_up" component={ SignUp } />
              <Route exact path="/sign_in" component={ SignIn } />
              <Route exact path="/reset_pass" component={ Reset } />
          </div>
        </Router>
      </Provider>  
    );
  }
}

export default App;
