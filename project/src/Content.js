import React from "react";

const Content = () => {
  function nameoOfChange() {
    const name = ["rajesh", "ramesh", "suresh"];
    let n = Math.floor(Math.random() * 3);
    return name[n];
  }

  return (
    <main>
      <p>hi there {nameoOfChange()}</p>
    </main>
  );
};

export default Content;
