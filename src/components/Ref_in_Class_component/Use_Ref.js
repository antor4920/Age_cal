import React, { Component, createRef } from "react";

class Use_Ref extends Component {
  constructor(props) {
    super(props);
    this.MyRef = createRef();
    this.state = {};
  }

  Submit = (event) => {
    event.preventDefault();
    console.log(this.MyRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.Submit}>
        <label>Name</label>
        <input type="name" ref={this.MyRef} />
        <button>Submit</button>
      </form>
    );
  }
}
export default Use_Ref;
