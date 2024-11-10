import React, { useRef } from "react";

const UseRefHook = () => {
  const MyNameref = useRef();
  const MyPassref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(MyNameref.current.value, MyPassref.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="Name" ref={MyNameref} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" ref={MyPassref} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseRefHook;
