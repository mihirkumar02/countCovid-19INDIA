import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-dark mb-5">
                  <div className="container">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand text-white text-lg brand-text">
                                Count Covid-19 INDIA
                                <i className="fas fa-viruses fa-5x" id="viruses-logo"/>
                            </Link>
                        </div>
                        <ul className="navbar-nav ml-auto text-light d-inline-block">
                            <li className="nav-item d-inline-block mr-4">
                                <Link to="/search" className="text-white text-lg brand-text text-right mr-5">Search</Link>
                            </li>
                            <li className="nav-item d-inline-block mr-4">
                                <Link to="/statistics" className="text-white text-lg brand-text text-right">Map</Link>
                            </li>
                            <li className="nav-item d-inline-block mr-4">
                                <Link to="/about" className="text-white text-lg brand-text ml-5">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
