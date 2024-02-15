const express = require("express");
const cors = require("cors");
const app = express();
const { postTest } = require("./controllers/test-controllers");

app.use(cors());
app.use(express.json());

app.post("/run-test/:challenge_id", postTest);

app.use((err, req, res, next) => {
  res.status(err.status).send(err);
});

module.exports = app;
