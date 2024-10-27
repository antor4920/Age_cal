import React, { Component, createRef } from "react";

class Use_Ref extends Component {
  constructor(props) {
    super(props);
    this.UseRef = createRef();
    this.state = {};
  }
  Submit = (e) => {
    e.preventDefault();
    console.log(this.UseRef.current.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.Submit}>
          <div>
            <label htmlFor="UserName">User Name</label>
            <input type="Name" id="Name" ref={this.UseRef} />
          </div>
          <button type="Submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Use_Ref;
