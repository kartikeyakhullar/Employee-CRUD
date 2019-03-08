const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true},(err)=>{
    if(!err){
        console.log('Mongo connection established.')
    }else{
        console.log('Error in establishong connection to the DB ' + err)
    }
})


require('./employee.models')




