import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Aviabooking</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        
                        {!this.props.isLogged && 
                        <Fragment>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sign_up">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sign_in">Login</Link>
                        </li>
                        </Fragment>
                        }
                        {this.props.isLogged && 
                        <Fragment>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reset_pass">Reset Password</Link>
                        </li>
                        </Fragment>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;