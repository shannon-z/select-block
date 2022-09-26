import React from "react";
import Range from "./Range";

function App() {
  const handleChange = (min, max) => {
    console.log(min, max);
  };
  return (
    <>
      <Range min={10} max={20} onChange={handleChange} />
    </>
  );
}

export default App;
