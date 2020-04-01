import React, { Component } from 'react';
import Search from './Search';
import StateContainer from './StateContainer';


class Landing extends Component {
    render() {
        return (
            <div className="Landing container">
                <Search />
                <StateContainer />
            </div>
        )
    }
}

export default Landing;
