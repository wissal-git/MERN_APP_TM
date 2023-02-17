const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app =express()
const bodyParser =require('body-parser');
const { errorHandler } = require('./middleware/errorMiddleware');

// body parser 
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals',require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port,() => console.log(`Server started on port ${port}`))