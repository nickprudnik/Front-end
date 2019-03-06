import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Aviabooking</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/sign_up">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sign_in">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/reset_pass">Reset Password</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;