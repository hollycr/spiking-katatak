import { useState } from "react";
import { runTest } from "../api/test-calls";

function Sandbox() {
  const [userInput, setUserInput] = useState("");
  const [testResults, setTestResults] = useState([]);

  function handleInput(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTestResults(["Just testing your function..."]);
    console.log(userInput, "<< userinput client side");
    runTest(userInput, 1).then((result) => {
      console.log("back in the browser");
      console.log(result, "<<< result from runTest");
      const arrayOfResults = result.split("\n");
      setTestResults(arrayOfResults);
    });
  }

  return (
    <>
      <p>code box</p>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "50vw", height: "30vh" }}
          value={userInput}
          onChange={handleInput}
          type="text"
        />
        <button>Run</button>
      </form>
      {testResults.map((test) => {
        return <p>{test}</p>;
      })}
    </>
  );
}

export default Sandbox;
