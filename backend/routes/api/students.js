const express = require("express");
const router = express.Router();
const Student = require("../../models/Student");

// @ /api/students  register a student

router.post("/", async (req, res) => {
  let {
    studentName,
    fatherName,
    motherName,
    birthDate,
    age,
    course,
    detail,
    email,
    phoneNumber,
  } = req.body;
  age = age + " " + "years";
  try {
    const newStudent = new Student({
      studentName,
      fatherName,
      motherName,
      birthDate,
      age,
      course,
      detail,
      email,
      phoneNumber,
    });
    const student = await newStudent.save();
    res.json(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
