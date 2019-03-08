require('./models/db')

const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')

const employeeController = require('./controllers/employeeController')

app.use(bodyparser.urlencoded({
    extended : true
}))
app.use(bodyparser.json())

app.set('views', path.join(__dirname,  '/views/'))
app.engine('hbs', exphbs({extname : 'hbs', defaultLayout : 'mainLayout' , layoutDir : __dirname + '/views/layouts'}))
app.set('view engine', 'hbs')



app.listen(3000, ()=>{
    console.log('Server started on 3000...')
})

app.use('/employee' , employeeController)