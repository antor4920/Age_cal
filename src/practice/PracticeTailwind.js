import React from "react";

const PracticeTailwind = () => {
  return (
    <nav className="bg-gray-400 w-full h-16 flex justify-between px-10 items-center">
      <div>
        <ul className="flex [&>*]:mx-4">
          <li className="">
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">Products</a>
          </li>
          <li>
            <a href="home">About</a>
          </li>
          <li>
            <a href="home">Contact</a>
          </li>
        </ul>
      </div>
      <button className="bg-black text-white w-[120px] h-[35px] rounded-md">
        Download
      </button>
    </nav>
  );
};

export default PracticeTailwind;
