const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;
const Employee=require("./Models/Employeemodel");
const path = require('path');
app.use(express.static(path.join(__dirname,'/build'))); 

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:3001',  // Replace with your frontend URL
  credentials: true,
}));
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);