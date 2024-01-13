const User = require("../models/UserModel")
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
    try {
      const { username, email, password, phonenumber, exitmark, createdAt } = req.body;
  
      // Validate input
      if (!username || !email || !password || !phonenumber || !exitmark || !createdAt) {
        return res.status(400).json({ message: 'All fields are required', success: false });
      }

  
      // Check if the user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ message: 'User already exists', success: false });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
        phonenumber,
        exitmark,
        createdAt,
      });
  
      // You may want to customize this token creation based on your needs
      const token = createSecretToken(user._id);
  
      // Set the token in a cookie
      res.cookie('token', token, {
        withCredentials: true,
        httpOnly: false,
      });
  
      // Send a success response
      res.status(201).json({ message: 'User signed up successfully', success: true, user });
    } catch (error) {
      console.error('Signup Error:', error);
      res.status(500).json({ message: 'Internal Server Error', success: false });
    }
  };
  
  // Define your token creation function
  
  module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Validate input
      if (!email || !password) {
        return res.status(400).json({ message: 'Both email and password are required', success: false });
      }
  
      // Check if the user with the provided email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ message: 'Incorrect email or password', success: false });
      }
  
      // Compare the provided password with the hashed password in the database
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        return res.json({ message: 'Incorrect email or password', success: false });
      }
  
      // You may want to customize this token creation based on your needs
      const token = createSecretToken(user._id);
  
      // Set the token in a cookie (you may want to use a more secure method)
      res.cookie('token', token, {
        httpOnly: true,
        // other cookie options...
      });
  
      res.status(200).json({ message: 'User logged in successfully', success: true, user });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Internal Server Error', success: false });
    }
  };