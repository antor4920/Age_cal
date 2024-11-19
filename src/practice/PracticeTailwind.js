import React from "react";

const PracticeTailwind = () => {
  return (
    <div>
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
      <div>
        <div className="bg-red-300 h-[200px] w-[200px] hover:rotate-180  hover:translate-x-[380px] hover:translate-y-[40px] transition duration-[3000ms]">
          <div className="bg-red-500 h-[150px] w-[150px] ">
            <p className="hover:rotate-180 transition duration-[3000ms] text-center">
              Put the mouse here!
            </p>
          </div>
        </div>
      </div>

      {/* <-----Form-----> */}

      <div className="flex justify-center items-center w-full">
        <div className="w-[1000px] h-[624px] bg-slate-200 flex gap-2 justify-center items-center border-solid border-2 border-black md:felx-col">
          <div className="w-[450px] h-[560px] bg-slate-600"></div>
          <div className="w-[450px] h-[560px] bg-slate-600"></div>
        </div>
      </div>
    </div>
  );
};

export default PracticeTailwind;
