import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './containers/Navbar';
import SignUp from './containers/SignUp'
import Home from './containers/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
          <div>
            <Navbar />
              <Route exact path="/" component={ Home } />
              <div className="container">
                <Route exact path="/sign_up" component={ SignUp } />
              </div>
          </div>
        </Router>
      </Provider>  
    );
  }
}

export default App;
