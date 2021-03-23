const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  course: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Student = mongoose.model("student", studentSchema);
