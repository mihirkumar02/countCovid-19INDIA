import React, { Component } from 'react';
import {connect} from 'react-redux';
import StateCard from './StateCard';

class StateContainer extends Component {
    render() {
        const {stateData} = this.props;
        let content = '';

        content = stateData.map((stateValue, index) => <StateCard key={index} stateValue={stateValue}/>)
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
