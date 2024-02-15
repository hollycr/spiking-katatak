const { exec } = require("child_process");

const challenges = { 1: "../__tests__/dna.test.js" };

module.exports.insertTest = (inputToTest, challenge_id) => {
  return new Promise((resolve, reject) => {
    process.env.INPUT_TO_TEST = JSON.stringify(inputToTest);

    console.log(process.env.INPUT_TO_TEST, "<< INPUT_TO_TEST IN MODEL");

    // const funcPart = inputToTest
    //   .slice(inputToTest.indexOf("{") + 1, inputToTest.length - 1)
    //   .trim();

    // console.log(funcPart, "<< funcPart");

    exec(`npm run test ${challenges[1]}`, (error, stdout, stderr) => {
      if (error) {
        const test_list = stderr.slice(
          stderr.indexOf(".js") + 5,
          stderr.indexOf(" ●")
        );
        resolve({
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
    });
  });
};
