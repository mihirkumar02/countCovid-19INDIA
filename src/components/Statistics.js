import React, { Component } from 'react';
import MapContainer from './MapContainer';
import StateContainer from './StateContainer';
import { Link } from 'react-router-dom';

class Statistics extends Component {

    render() {
        return (
            <div className="container Statistics">
                <div className="row Height">
                    <div className="col-md-6 col-sm-12 mapHeight">
                        <MapContainer />
                    </div>
                    <div className="col-md-5 col-sm-12 offset-md-1 stateDiv">
                        <StateContainer />
                    </div>
                </div>
                <div className="row">
                    <h4><Link to="/">Go to Home Page</Link></h4>
                </div>
            </div>
        )
    }
    
}

export default Statistics;