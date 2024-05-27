const express= require('express');
const mongoose= require('mongoose');
const cors = require ('cors');
const bcrypt = require('bcryptjs'); 
const Employemodle= require('./models/employees')
 const app = express()
 app.use(express.json())
 app.use(cors())

 //connect mongoDb
 mongoose.connect("mongodb://127.0.0.1:27017/First",{
  useNewUrlParser:true,
  useUnifiedTopology: true,
 })
 .then(
  ()=>{
    console.log("connect to mongo db")
  })
 .catch(
  (err)=>{
    console.log(' their is an error'+ err.message)
  })

  //rejister the end point of database
 app.post('/First',(req,res)=> {
   Employemodle.create(req.body)
   .then(employees => res.json(employees))
   .catch(err => res.json(err))
 }
)
 app.listen(3001,()=>{
    console.log("server running")
 })