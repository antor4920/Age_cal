import React, { useState } from "react";

function ControlComponent() {
  const [user, setUser] = useState({ Name: "", email: "", password: "" });
  const { name, email, password } = user;

  const HandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitevent = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form
        className="border-2 border-gray-950 inline-block p-8 bg-red-300"
        onSubmit={submitevent}
      >
        <div className="flex flex-col ">
          <label htmlFor="">User Name</label>
          <input
            className="border-2 border-black rounded-[8px] mb-2"
            type="text"
            name="Name"
            required
            value={name}
            onChange={HandleChange}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="">Email</label>
          <input
            className="border-2 border-black rounded-[8px] mb-2"
            type="Email"
            name="email"
            required
            value={email}
            onChange={HandleChange}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="">Password</label>
          <input
            className="border-2 border-black rounded-[8px] mb-2"
            type="Password"
            name="password"
            required
            value={password}
            onChange={HandleChange}
          />
        </div>
        <button className="border-2 border-black rounded-xl p-2" type="submit">
          Submit
        </button>
      </form>
      {/* <p>{name}</p> */}
    </div>
  );
}

export default ControlComponent;
