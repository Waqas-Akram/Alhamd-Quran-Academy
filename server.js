const express = require("express");
const colors = require("colors");
const connectDB = require("./backend/config/db");
const students = require("./backend/routes/api/students");
const contact = require("./backend/routes/api/contact");
const sendmessage = require("./backend/routes/api/sendmessage");
const app = express();
const path = require("path");
require("dotenv").config();

//Body Parser
app.use(express.json({ extended: true }));

//Databse Connection Execution

connectDB();

//routes

app.use("/api/students", students);
app.use("/api/contact", contact);
app.use("/api/sendmessage", sendmessage);

//Run api server and frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;

//Init Server from PORT

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT} Port`.blue.inverse.bold);
});
