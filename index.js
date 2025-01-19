const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser") 

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true })); // For handling form data (application/x-www-form-urlencoded)
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/index", (req, res) => {
    res.render("index.ejs");
});

app.post("/manager", (req, res) => {
  // Get task data from the form submission
  const task = req.body;

  if (task) {
    // Add task to the tasks array
    task.push({});
  }

  // Redirect back to the main page to display the updated list of tasks
  res.redirect("/index");
});

app.get("/manager", (req, res) => {
    res.render("manager.ejs");
})

app.listen(5000, () => {
    console.log("Connected successfully");
})