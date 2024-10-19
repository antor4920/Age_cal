import React, { useState } from "react";

const Control = () => {
  const [user, setuser] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = user;

  let handleName = (e) => {
    setuser({ name: e.target.value, email, password });
  };

  let handleEmail = (e) => {
    setuser({ name, email: e.target.value, password });
  };

  let handlePassword = (e) => {
    setuser({ name, email, password: e.target.value });
  };

  let Submit = (e) => {
    e.preventDefault();
    let userdetails = {
      name,
      email,
      password,
    };
    console.log(userdetails);
  };

  return (
    <form onSubmit={Submit}>
      <div>
        <label htmlFor="Name">Name</label>
        <input type="Text" onChange={handleName} value={name} />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input type="email" onChange={handleEmail} value={email} />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input type="password" onChange={handlePassword} value={password} />
      </div>
      <button>log-in</button>
    </form>
  );
};

export default Control;
