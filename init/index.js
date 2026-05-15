const mongoose = require("mongoose");
const data = require("./data")
const Task = require("../models/TaskAppSchema.js");

main()
  .then(() => console.log("Connected Successfully"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TaskApp');
}

console.log(data.tasks)
Task.insertMany(data.tasks).then((res)=>{
    console.log(res);
    console.log("data insert SucessFully")
})