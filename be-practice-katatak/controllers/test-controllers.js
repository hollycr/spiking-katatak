const { insertTest, fetchTestData } = require("../models/test-models");

module.exports.postTest = (req, res, next) => {
  const { challenge_id } = req.params;
  const inputToTest = req.body;
  insertTest(inputToTest.body, challenge_id)
    .then((test_data) => {
      console.log(test_data, "<< response in controller");
      res.status(201).send(test_data.list);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.getTestData = (req, res, next) => {
  const { challenge_id } = req.params;
  try {
    const data = fetchTestData(challenge_id);
    console.log(data, "<< data in controller");
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
  }
};
