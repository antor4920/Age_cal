import React from "react";
import Section1 from "./Section1";

const NewTailwind = () => {
  return (
    <>
      <nav className="sm:flex bg-green-400 sm:justify-around sm:items-center transition-all duration-500">
        <ul className=" flex gap-12 py-4 justify-evenly  sm:gap-10  transition-all duration-500 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shopping</a>
          </li>
          <li>
            <a href="">products</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
        <div className=" bg-green-400 text-center sm:w-auto sm:h-auto sm:bg-green-400 transition-all duration-500  ">
          <button className="h-[40px] w-[200px] bg-green-800  rounded-xl  mb-2 sm:mb-0">
            Contact
          </button>
        </div>
      </nav>
      <Section1 />
    </>
  );
};

export default NewTailwind;
