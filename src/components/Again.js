import React, { Component } from "react";

class Again extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Changevalu: "",
    };
  }

  Handlevalu = (x) => {
    this.setState({
      Changevalu: x.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.Handlevalu} />
        <p>{this.state.Changevalu}fjhgjh</p>
      </div>
    );
  }
}
export default Again;
