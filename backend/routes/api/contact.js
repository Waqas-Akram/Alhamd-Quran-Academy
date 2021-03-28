const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

//Post email message with the help of nodemailer transport

router.post("/send", async (req, res) => {
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
    address,
  } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.RECIEVER_EMAIL_ADDRESS,
      subject: "New Admission Recieved from " + studentName,
      text: "",
      html:
        "<p><ul><li>Student Name :" +
        studentName +
        "</li><li>Father Name :" +
        fatherName +
        "</li><li>Mother Name :" +
        motherName +
        "</li><li>Birthdate :" +
        birthDate +
        "</li><li>Father's Email : " +
        email +
        "</li><li>Phone Number : " +
        phoneNumber +
        "</li><li>Selected Language :" +
        language +
        "</li><li>Course Applied:" +
        course +
        "</li><li>Extra detail : " +
        detail +
        "</li><li>Adress : " +
        address +
        "</li></ul> </p>",
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      res.status(200).json({ msg: "Message Sent Successfully" });
    });
  } catch (error) {
    console.error(erro.message);
    res.status(500).json({ msg: "Message Error" });
  }
});

module.exports = router;
