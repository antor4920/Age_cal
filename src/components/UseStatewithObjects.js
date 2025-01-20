import React, { useState } from "react";

function UseStatewithObjects() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const HandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const SubmitForm = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <div className="flex bg-green-950">
      <div className="w-[100px] h-auto bg-green-300"></div>
      <div className="p-4 bg-green-500">
        <form onSubmit={SubmitForm}>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <label htmlFor="">First name</label>
              <input
                className=" border-2 border-black rounded-xl"
                type="text"
                name="firstName"
                required
                onChange={HandleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Last name</label>
              <input
                className=" border-2 border-black rounded-xl"
                type="text"
                name="lastName"
                required
                onChange={HandleChange}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              className=" border-2 border-black rounded-xl"
              type="Email"
              name="email"
              required
              onChange={HandleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              className=" border-2 border-black rounded-xl"
              type="password"
              name="password"
              required
              onChange={HandleChange}
            />
          </div>
          <button
            className="border-2 border-black rounded-xl bg-green-400 pr-6 pl-6 mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UseStatewithObjects;
