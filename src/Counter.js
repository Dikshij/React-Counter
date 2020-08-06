import React from "react";

class Counter extends React.Component {
  state = {
    value: 0,
    factor: 0
  };

  handleInc = () => {
    this.setState({
      value: this.state.value + this.state.factor
    });
  };

  handleDec = args => {
    this.setState({
      value: this.state.value - this.state.factor
    });
  };

  handleInput = event => {
    this.setState({
      factor: parseInt(event.target.value)
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <input
          placeholder="Enter a value"
          type="number"
          onChange={this.handleInput}
        />
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
