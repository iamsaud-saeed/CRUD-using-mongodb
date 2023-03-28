const express= require('express')
const mongoose= require('mongoose')
const morgan= require('morgan')
const bodyParser = require('body-parser')
const EmployeeRoutes = require('./routes/EmployeeRoutes') 

mongoose.connect('mongodb://localhost:27017/node_crud', {useNewUrlParser: true , useUnifiedTopology: true})
const db= mongoose.connection
db.on('error' , (err) => console.log)
db.once('open' , () =>{
  console.log('database connection established...');
})

const app = express();
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;

app.listen(PORT , () =>{
  console.log(`Server is listening at port ${PORT}`)
})

app.use('/api/employee' , EmployeeRoutes)
