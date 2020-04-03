import React, { Component } from 'react';
import {fetchAll} from '../actions/searchActions';
import {connect} from 'react-redux';

class Table extends Component {

    componentDidMount(){
        this.props.fetchAll();
    }

    render() {

        const {all} = this.props;

        return (
            <div>
                <ul>
                    {all.map((one, index) => <li key={index} one={one}> {one.name} </li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    all: state.states.all
})

export default connect(mapStateToProps, {fetchAll})(Table);
