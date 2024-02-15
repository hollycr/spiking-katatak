const { insertTest } = require("../models/test-models");

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
