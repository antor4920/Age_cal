import React from "react";

const Section1 = () => {
  return (
    <div className=" flex flex-col items-center sm:flex-row sm:justify-evenly transition-all duration-500 ">
      <div className="w-[350px] h-[350px] bg bg-green-200 rounded-full mt-10 sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] transition-all duration-500"></div>
      <div className=" text-center mt-16 sm:w-[350px] md:w-[450px] transition-all duration-100 ">
        <h3 className="font-bold text-xl text-green-400">Hello, I'm</h3>{" "}
        <h1 className="font-extrabold text-2xl text-green-600">
          Jahidul hasna Antor
        </h1>
        <p className="text-green-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, amet?
        </p>
      </div>
    </div>
  );
};

export default Section1;
