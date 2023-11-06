import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("dave");
  const [count, setCount] = useState(0);
  function nameoOfChange() {
    const names = ["rajesh", "ramesh", "suresh"];
    let n = Math.floor(Math.random() * 3);
    setName(names[n]);
  }
  const handleClick = () => {
    setCount(count + 1);

    console.log(count);
  };
  const handleClick2 = () => {
    console.log(count);
  };
  return (
    <main>
      <p>hi there {name}!</p>
      <button onClick={nameoOfChange}>change name</button>
      <button onClick={handleClick}> click here</button>
      <button onClick={handleClick2}>click button1</button>
    </main>
  );
};

export default Content;
