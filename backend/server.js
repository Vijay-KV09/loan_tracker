require('dotenv').config();
const express = require('express')
const app = express();
const db = require("./db/dbConnect");
const bodyParser = require('body-parser');
const User = require("./models/User.models");
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
  
    const newUser = new User({ name, email, password });
    try {
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to register user" });
    }
  });

app.post("/login",async(req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});

    if(!user) return res.status(404).json("No user found");

    user.password === password && 
    res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } });
    
    throw "Login Unsuccessful";
  }catch(error){
    res.status(400).json({message:error});
  }
})

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("backend is running");
})