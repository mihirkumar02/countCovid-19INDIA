import React, { Component } from 'react';
import {fetchTotal} from '../actions/searchActions';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Statistics extends Component {
    
    componentDidMount(){
        this.props.fetchTotal();
    }

    render() {
        const {total} = this.props;        
        return (
            <div className="Statistics">
                <div className="container">
                    <h3 className="text-dark card-title weight-bold">
                        Active Cases: {total['Total Confirmed cases']}
                    </h3>
                    <hr />
                    <h3 className="text-success card-title weight-bold">
                        Cured/Discharged/Migrated: {total['Cured/Discharged/Migrated']}
                    </h3>
                    <h3 className="text-danger card-title weight-bold">
                        Deaths: {total.Death}
                    </h3>
                    <h3 className="text-primary card-title weight-bold">
                        Total Cases: {total['Total Cases']}
                    </h3>
                    <div className="row">
                        <h4><Link to="/">Go to Home Page</Link></h4>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    total: state.states.total
});

export default connect(mapStateToProps, {fetchTotal})(Statistics);
