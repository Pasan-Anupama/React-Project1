const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb+srv://Anupama:Dialme227@cluster0.vxlibtj.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo Db");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });

app.listen(port, () => {
  console.log("Server running on port 8000");
});

const User = require("./models/user");

//end point for registration of user

app.post("/register", (req,res) => {
  const {name,phone,email,password,confirmpw} = req.body;

  //create a new user object
  const User = new User({name,phone,email,password,confirmpw})

  //save the user in the database
  newUser.save().then(() => {
    res.status(200).json({message: "User registered successfully"})
  }).catch((err) => {
    console.log("Error registering user", err);
    res.status(500).json({message: "Error registering user !"})
  })
})