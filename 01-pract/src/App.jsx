import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function BtnClicked() {
    setCount(count + 1);
  }

  function BtnSlipped() {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form is submitted");
  };

  return (
    <div className="container">
      <h1>count is {count}</h1>
      <button onMouseUp={BtnClicked} className="btn">
        Increase
      </button>
      <button onMouseDown={BtnSlipped} className="btn">
        Decrease
      </button>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input className="text" type="text" placeholder="Enter your Name" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};
export default App;
