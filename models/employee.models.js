const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : 'This is a required field.'
    },
    email : {
        type : String,
        required : 'This is a required field.'
    },
    mobile : {
        type : String
    },
    city : {
        type : String
    }
})

mongoose.model('Employee' , employeeSchema)