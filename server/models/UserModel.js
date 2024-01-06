const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
        type: String,
        required: [true, "Your username is required"],
      },

    email: {
    type: String,
    required: [true, "Your email address is required"],
  
  },

  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  phonenumber: {
    type: String,
    required: [true, "Your phonenumber is required"],
  },
  exitmark: {
    type: String,
    required: [true, "Your mark is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);