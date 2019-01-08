import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator';


class DisplayResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
        bmiMessage: "",
        };
    }

    calculate() {
        const weight = this.props.weight;
        const height = this.props.height;
        const method = this.props.methodName;
        this.setState({ bmiMessage: bmiCalculation(weight, height, method) });
    }

    render() {
        return (
        <div>
            <button onClick={() => this.calculate()}>Caclulate BMI</button>
            <div>{this.state.bmiMessage}</div>
        </div>
        );
    }
}

export default DisplayResults;