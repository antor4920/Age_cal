import React, { useState } from "react";

const Item = [
  { id: 1, Name: "Books", Price: 120 },
  { id: 2, Name: "pen", Price: 10 },
];

const Mapping = (props) => {
  return (
    <div>
      {props.Item.map((X) => (
        <ParticularItem key={X.id} Items={X} CallBack={props.CallBack} />
      ))}
    </div>
  );
};

const ParticularItem = (props) => {
  const { id, Name, Price } = props.Items;

  const DeleteFun = (ID) => {
    props.CallBack(ID);
  };
  return (
    <>
      <div>
        <h2>{Name}</h2>
        <h3>{Price}</h3>
      </div>
      <button
        onClick={() => {
          DeleteFun(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

const Delete = () => {
  const [itemBox, setitemBox] = useState(Item);

  const CallBack = (id) => {
    const Showitem = itemBox.filter((I) => I.id !== id);
    setitemBox(Showitem);
  };

  return (
    <div>
      <Mapping Item={itemBox} CallBack={CallBack} />
    </div>
  );
};

export default Delete;
