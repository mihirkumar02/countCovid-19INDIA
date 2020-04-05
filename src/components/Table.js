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
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                          <th scope="col" className="text-center">State/UT</th>
                          <th scope="col">Ac.</th>
                          <th scope="col">Dis.</th>
                          <th scope="col">De.</th>
                          <th scope="col">Tot.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all.map((one, index) => 
                            <tr key={index}>
                                <td className="text-center">{one.name === 'Telengana' ? 'Telangana' : one.name}</td>
                                <td className="text-warning"><b>{one.confirmed}</b></td>
                                <td className="text-success"><b>{one.cured}</b></td>
                                <td className="text-danger"><b>{one.death}</b></td>
                                <td className="text-primary"><b>{one.total}</b></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    all: state.states.all
})

export default connect(mapStateToProps, {fetchAll})(Table);
