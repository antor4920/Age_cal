import React from "react";

import Child from "./child";

function Parent() {
  function ParentMethod(X) {
    console.log(X);
  }

  return (
    <div>
      <p>App: I'm app. </p>
      <Child onMasses="Parent Name App" onMethod={ParentMethod} />
    </div>
  );
}

export default Parent;
