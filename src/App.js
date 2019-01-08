import React, { Component } from 'react';
import './App.css';
import DisplayResult from './DisplayResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      methodName: 'Metric'
    };
  }

  methodChange() {
    if (this.state.methodName === 'Metric') {
      this.setState({ methodName: 'Imperial'});
    } else {
      this.setState({ methodName: 'Metric' });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>
            Weight {this.state.methodName === 'Metric' ? '(kg)' : '(lbs)'}
          </label>
          <input name="weight" 
          value={this.state.weight} 
          onChange={e => this.setState({ weight: e.target.value})} />
        </div>

        <div>
          <label>
            Height {this.state.methodName === 'Metric' ? '(cm)' : '(inches)'}
          </label>
          <input name="height" 
          value={this.state.height} 
          onChange={e => this.setState({ height: e.target.value })} />
          <br />
          <button onClick={() => this.methodChange()}>
            {this.state.methodName}
          </button>
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          methodName={this.state.methodName}
        />
      </div>
    );
  }
}

export default App;