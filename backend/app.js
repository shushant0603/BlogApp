const express = require("express");
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const mongoose=require("mongoose");
const FormData = require("./connectMongo/db");

const cors = require("cors");
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your client URL
  credentials: true 
}));
app.use(express.json());

app.post('/login', async (req, res) => {
  let { email, password } = req.body; // Removed name as it's not needed for login
  try {
      let user = await FormData.findOne({ email });
      if (user) {
          bcrypt.compare(password, user.password, (err, result) => {
              if (err) {
                  return res.status(500).json({ message: "Error comparing passwords" });
              }
              if (result) {
                  let token = jwt.sign({ email }, "shhhhhhhh");
                  res.cookie("token", token);
                  return res.status(200).json({ message: "Login successful" }); // Send a success response
              } else {
                  return res.status(400).json({ message: "Password is incorrect" });
              }
          });
      } else {
          return res.status(400).json({ message: "User  not found" });
      }
  } catch (error) {
      return res.status(500).json({ message: "An error occurred", error: error.message });
  }
});


    
app.post("/create", (req, res) => {
  let { name, email, password } = req.body;
  
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let newUser = new FormData({
        name,
        email,
        password: hash,
      });

      await newUser.save();

      // Generate a token and send it as a response
      let token = jwt.sign({ email }, "shhhhhhhh");
      res.cookie("token", token); // Set the cookie

      // Send the user data along with the token
      res.status(201).json({ message: "User created successfully", user: newUser, token });
    });
  });
});

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
});