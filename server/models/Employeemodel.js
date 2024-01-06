const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
    
  },
  salary: {
    type: String
    
  }
});
module.exports = mongoose.model("Employee", employeeSchema);