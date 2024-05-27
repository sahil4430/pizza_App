const mongoose = require('mongoose')
const EmployeeSchema= new mongoose.Schema({
    Username:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
})

const Employemodule = mongoose.model("employee",EmployeeSchema)

module.exports= Employemodule;