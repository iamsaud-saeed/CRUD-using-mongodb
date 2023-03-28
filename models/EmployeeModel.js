const mongoose = require('mongoose');
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  name:
  { type : String, },
  designation:
  {
    type: String
  },
  age:
  {
    type: Number
  },
  email:
  {
    type: String
  },
  phone:
  {
    type: String
  }
},
{timestamps: true}
)


const Employee= mongoose.model('Employee' , EmployeeSchema);
module.exports = Employee;