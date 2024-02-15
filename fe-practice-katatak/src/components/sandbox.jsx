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
  const [chalNum, setChalNum] = useState(1);

  function handleInput(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTestResults(["Just testing your function..."]);
    runTest(userInput, chalNum).then((result) => {
      const arrayOfResults = result.split("\n");
      setTestResults(arrayOfResults);
    });
  }

  function handleClick() {
    if (chalNum === 1) {
      setChalNum(2);
    } else {
      setChalNum(1);
    }
    setTestResults([]);
    getTestData(chalNum).then((data) => {
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
