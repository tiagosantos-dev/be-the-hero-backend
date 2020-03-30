let port = 3333;
const bodyParser= require('body-parser')
const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(routes)

app.listen(port, ()=>{
    console.log('BACKEND RUNNING ON PORT', port)



})