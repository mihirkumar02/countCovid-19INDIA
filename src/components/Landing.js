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
                    <div className="heading-center">
                        <h3 className="heading">Count in INDIA</h3>
                    </div>
                    <hr />
                    <div className="row centered-row">
                        <div className="col-md-3 text-center">
                            <h4 className="text-warning card-title weight-bold">
                                Active( Ac. ): <b>{total['Total Confirmed cases']}</b>
                            </h4>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-success card-title weight-bold">
                                Discharged/Migrated( Dis. ): <b>{total['Cured/Discharged/Migrated']}</b>
                            </h5>
                        </div>
                        <div className="col-md-3 text-center">
                            <h5 className="text-danger card-title weight-bold">
                                Deaths( De. ): <b>{total.Death}</b>
                            </h5>
                        </div>
                        <div className="col-md-2 text-center">
                            <h5 className="text-primary card-title weight-bold">
                                Total(Tot.): <b>{total['Total Cases']}</b>
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

