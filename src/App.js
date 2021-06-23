import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [userInput, setUserInput] = useState("Enter a name");
  const inputChangeHandler = (input) => {
    setUserInput(input);
  };
  return (
    <div>
      <Form onGetInput={inputChangeHandler} />
      <h1>{userInput}</h1>
    </div>
  );
}

export default App;
