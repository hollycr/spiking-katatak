import axios from "axios";

function runTest(userInput, challenge_id) {
  const postBody = { body: userInput };
  return axios
    .post(`http://localhost:9090/run-test/${challenge_id}`, postBody)
    .then(({ data }) => {
      return data;
    });
}

export { runTest };
