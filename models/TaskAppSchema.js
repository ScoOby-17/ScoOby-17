const mongoose = require('mongoose');

// DB Connection
main()
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TaskApp');
}

// Schema
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

// Model
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;