import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  Dicrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Number : {count}</h1>
        <button onClick={this.Increment} disabled={count === 10 ? true : false}>
          +
        </button>
        <button
          onClick={this.Dicrement}
          disabled={count === -10 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
export default Count;
