import { useState } from "react";
import { runTest, getTestData } from "../api/test-calls";

function Sandbox() {
  const [userInput, setUserInput] = useState("");
  const [testResults, setTestResults] = useState([]);
  const [testInfo, setTestInfo] = useState({
    challenge_id: "",
    challenge_name: "",
    description: "",
    example: "",
    script: "",
  });

  // change num to test the two different ids
  const num = 2;

  function handleInput(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTestResults(["Just testing your function..."]);
    runTest(userInput, num).then((result) => {
      const arrayOfResults = result.split("\n");
      setTestResults(arrayOfResults);
    });
  }

  function handleClick() {
    getTestData(num).then((data) => {
      setTestInfo(data);
    });
  }

  return (
    <>
      <button onClick={handleClick}>Get Test</button>
      <h2>{testInfo.challenge_name}</h2>
      <p>{testInfo.description}</p>
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
