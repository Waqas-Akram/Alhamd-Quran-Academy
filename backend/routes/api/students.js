const express = require("express");
const router = express.Router();
const Student = require("../../models/Student");

// @post /api/students  register a student

router.post("/", async (req, res) => {
  let {
    studentName,
    fatherName,
    motherName,
    birthDate,
    language,
    course,
    detail,
    email,
    phoneNumber,
    address
  } = req.body;
  try {
    const newStudent = new Student({
      studentName,
      fatherName,
      motherName,
      birthDate,
      course,
      detail,
      email,
      phoneNumber,
      language,
      address
    });
    const student = await newStudent.save();
    res.json(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//@get /api/students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ date: -1 });
    res.json(students);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//@get /api/stuudents/id

router.get('/:id', async (req, res) => {
 try {
  const student = await Student.findById(req.params.id);
  if(!student){
    res.status(404).json({ msg: "Student Not Found" });
  }
  res.json(student);
   
 } catch (error) {
   console.error(error.message);
   res.status(500).json({ msg: "Server Error" });
   
 }
})

module.exports = router;
