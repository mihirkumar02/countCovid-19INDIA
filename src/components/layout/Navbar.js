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
                            <Link to="/statistics" className="text-white text-lg brand-text text-right">Statistics</Link>
                            <Link to="/about" className="text-white text-lg brand-text ml-5">About</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
