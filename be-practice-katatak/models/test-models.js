const { exec } = require("child_process");

const tests = require("../tests-list");

module.exports.insertTest = (inputToTest, challenge_id) => {
  const list = tests.module;
  const currentTest = {};
  list.map((test) => {
    if (test.challenge_id === Number(challenge_id)) {
      Object.assign(currentTest, test);
    }
  });

  return new Promise((resolve, reject) => {
    const user_id = 123;
    const uniqueKey = `INPUT_TO_TEST${user_id}`;
    process.env[uniqueKey] = JSON.stringify(inputToTest);
    //console.log(process.env.INPUT_TO_TEST, "<< INPUT_TO_TEST IN MODEL");

    exec(
      `npm run test ${currentTest.script} ${user_id}`,
      (error, stdout, stderr) => {
        if (error) {
          const test_list = stderr.slice(
            stderr.indexOf(".js") + 5,
            stderr.indexOf(" ●")
          );
          resolve({
            script_ran: currentTest.script,
            outcome: "ERROR",
            output: stderr,
            list: test_list,
          });

          //console.error(`exec error: ${error}`); // Error: USEFUL DATA. This occurs when test fails!
        } else {
          const test_list = stderr.slice(
            stderr.indexOf(".js") + 5,
            stderr.indexOf("Test Suites")
          );
          resolve({ outcome: "SUCCESS", output: stderr, list: test_list });
          //console.log(`stdout: ${stdout}`); // Standard Output: Just random running info.
          //console.error(`stderr: ${stderr}`); // Standard Error: USEFUL DATA. This occurs when test passes! ...?
        }
      }
    );
  });
};

module.exports.fetchTestData = (challenge_id) => {
  const list = tests.module;
  const currentTest = {};
  list.map((test) => {
    if (test.challenge_id === Number(challenge_id)) {
      Object.assign(currentTest, test);
    }
  });
  return currentTest;
};
