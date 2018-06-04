const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    name: {type: String, required: true},
    completed: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model('ToDo', ToDoSchema);