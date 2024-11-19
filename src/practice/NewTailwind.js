import React from "react";

const NewTailwind = () => {
  return (
    <nav className="sm:flex">
      <ul className="bg-slate-400 flex gap-16 py-4 justify-evenly   ">
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
      <div className=" bg-slate-500 text-center sm:h-auto">
        <button className="h-[40px] w-[200px] bg-orange-400  rounded-xl ">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default NewTailwind;
