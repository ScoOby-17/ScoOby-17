const mongoose = require('mongoose');
const express = require("express");
const app = express();
const Task = require("./models/TaskAppSchema.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().then((res)=>{
    console.log("connected Sucesfully")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TaskApp');
}

//home Route
app.get("/",(req,res)=>{
  res.send("home page")
})

//All tasks
app.get("/tasks",async(req,res)=>{
  const tasks = await Task.find({})
  res.render("index.ejs" , { tasks })
})

//Single Task 
app.get("/task/:id")

app.listen(8080,()=>{
  console.log("Server run on link http://localhost:8080/tasks")
})