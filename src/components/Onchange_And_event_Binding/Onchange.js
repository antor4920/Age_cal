import React, { Component } from "react";

class Onchange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  Onchage_fun = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="Text" onChange={this.Onchage_fun}></input>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Onchange;
