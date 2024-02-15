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
    runTest(userInput, 1).then((result) => {
      const arrayOfResults = result.split("\n");
      setTestResults(arrayOfResults);
    });
  }

  return (
    <>
      <p>
        DNA Pairs Create a function that takes a string of DNA and matches each
        base with its pair, returning a nested array. In DNA, C pairs with G and
        T pairs with A.
      </p>
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
