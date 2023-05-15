const express = require("express");
const port = 3000;
const app = express();

const QUESTIONS = [
  {
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      },
    ],
  },
];

const USERS = [];

const SUBMISSION = [];

app.get("/", function (req, res) {
  res.send("Leetcode clone");
});

app.post("/signup", function (req, res) {
  const { email, password } = req.body;
  if (USERS.find((user) => user.email === email)) {
    res.send("User already exists");
  } else {
    res.status(200).send("User created");
    USERS.push(email, password);
  }
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;
  if (USERS.find((user) => user.email === email)) {
    res.send("User already exists");
  }
  if (USERS.find((user) => user.password === password)) {
    res.status(200).send("Password is correct");
  } else {
    res.send("Password is incorrect");
  }
});

app.get("/question", function (req, res) {
  res.send(QUESTIONS);
});

app.get("/submission", function (req, res) {
  res.send(SUBMISSION);
});

app.post("/submission", function (req, res) {
  const solution = req.body;
  SUBMISSION.push(solution);
  let endPrompt = MATH.random() > 0.5 ? "accepted" : "rejected";
  res.send(`your response has been ${endPrompt}`);
});

app.get("/admin", function (req, res) {
  res.send("Admin problem");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
