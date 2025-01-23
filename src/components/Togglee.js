import React, { useState } from "react";

function Togglee() {
  const [open, setopen] = useState(true);
  return (
    <div>
      {open && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          officiis quisquam ducimus consequatur suscipit laborum consequuntur
          quae maxime excepturi ab aliquam soluta quas atque, et facere,
          blanditiis provident deleniti ea?
        </p>
      )}
      <button
        onClick={() => {
          setopen(!open);
        }}
      >
        {open ? "Hide" : "open"}
      </button>
    </div>
  );
}

export default Togglee;
