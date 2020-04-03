import React, { Component } from 'react';
import {connect} from 'react-redux';
import StateCard from './StateCard';
import NoCase from './NoCase';

class StateContainer extends Component {
    render() {
        const {stateData} = this.props;
        let content = '';

        content = stateData.length ? stateData.map((stateValue, index) => <StateCard key={index} stateValue={stateValue}/>) : <NoCase />
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stateData: state.states.stateName
});

export default connect(mapStateToProps)(StateContainer);
