import React, { Component } from 'react';

class StateCard extends Component {
    render() {
        const {stateValue} = this.props;
        return (
            <div>
                <div className="card card-body bg-dark text-center h-100">
                    <h1 className="text-light card-title weight-bold">
                        {stateValue.name}
                    </h1>
                    <h5 className="text-warning card-title">
                        Confirmed: {stateValue.confirmed}
                    </h5>
                    <h5 className="text-success card-title">
                        Cured: {stateValue.cured}
                    </h5>
                    <h5 className="text-danger card-title">
                        Deaths: {stateValue.death}
                    </h5>
                    <h3 className="text-light card-title">
                        Total: {stateValue.total}
                    </h3>
                </div>
            </div>
        )
    }
}

export default StateCard;
