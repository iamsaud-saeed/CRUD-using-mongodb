const Employee = require('../models/EmployeeModel'); 


//show the list of employees


const index = (req, res, next) =>
{
    Employee.find()
    .then(response =>{
      res.json
      ({
        response
      })
    }).catch(error =>{
      res.json
      ({
        message: 'error message'
      })
    })
}

const show = (req ,  res ,next ) =>{
  let employeeID = req.body.employeeID;
  Employee.findById(employeeID)
  .then(response => {
    res.json({response})
  
  })
  .catch(error =>{
    res.json({message: "an error message"})
  })
}

const store = (req, res , next ) =>{

  let employee = new Employee({
    name: req.body.name,
     designation:req.body.designation,
     email:req.body.email,
     phone: req.body.phone,
     age: req.body.age
  })
  employee.save()
  .then(response =>{
    res.json({message: 'User added successfully'})
  }).catch(error =>{
     res.json({error: 'an error occured in adding user'})
  })
}

const update = (req, res , next) =>
{

  let employeeID = req.body.employeeID;
  let updated_data = {
    name : req.body.name,
    designation: req.body.designation,
    age: req.body.age,
    email: req.body.email,
    phone: req.body. phone,
  }
  Employee.findByIdAndUpdate(employeeID, {$set:   updated_data})
  .then(response =>{
    res.json({message: 'User update successfully..'})
  }).catch(error =>{
    res.json({message: 'An error occured in updating data'})
  })
}
const destroy = (req, res, next) =>
{

    let employeeID = req.body.employeeID;
    Employee.findOneAndRemove(employeeID)
    .then(response =>
    {
      res.json({message: 'User deleted successfully..'}).catch(error =>{
        res.json({error: 'An error occured in deleting user.' })
      })
    })
}


module.exports = {
  index, show, store, update, destroy
}