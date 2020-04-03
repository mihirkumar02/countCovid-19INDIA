import React, { Component } from 'react';

import {fetchTotal} from '../actions/searchActions';
import {connect} from 'react-redux';

import Table from './Table';

class Landing extends Component {

    componentDidMount(){
        this.props.fetchTotal();
    }

    render() {
        const {total} = this.props;        
        return (
            <div className="Landing">
                <div className="container">
                    <div className="row centered-row">
                        <div className="col-md-3">
                            <h3 className="text-dark card-title weight-bold">
                                Active Cases: <b>{total['Total Confirmed cases']}</b>
                            </h3>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-success card-title weight-bold">
                                Cured/Discharged
                            </h5>
                            <h5 className="text-success card-title weight-bold">
                                /Migrated: <b>{total['Cured/Discharged/Migrated']}</b>
                            </h5>
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-danger card-title weight-bold">
                                Deaths: <b>{total.Death}</b>
                            </h5>
                        </div>
                        <div className="col-md-3">
                            <h5 className="text-primary card-title weight-bold">
                                Total Cases: <b>{total['Total Cases']}</b>
                            </h5> 
                        </div>
                    </div>
                    <Table />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    total: state.states.total
});

export default connect(mapStateToProps, {fetchTotal})(Landing);

