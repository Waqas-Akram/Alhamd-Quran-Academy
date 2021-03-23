const express = require("express");
const colors = require("colors");
const app = express();

//Body Parser
app.use(express.json({ extended: true }));

//Run api server
app.get("/", (req, res) => {
  res.json({ msg: "Api is Running" });
});

const PORT = process.env.PORT || 5000;

//Init Server from PORT

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT} Port`.blue.inverse.bold);
});
