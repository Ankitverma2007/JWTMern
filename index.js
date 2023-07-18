const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const Jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/jwt`);

app.post("/api/register", async (req, res) => {
  // console.log(req.body)
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", err });
  }
});

app.post("/api/login", async (req, res) => {
  // console.log(req.body)
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const token = Jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "Secret123"
    );

    return res.json({
      status: "OK",
      user: token,
    });
  } else {
    return res.json({
      status: "ERR",
      user: false,
    });
  }
});

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
