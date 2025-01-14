require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')

const connect = require('./database/connection')

const taskRoute = require('./routes/taskRoute')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (request, response) => {
    response.status(200).send({ message: "Server running successfully"})
})

app.use('/api/v1/tasks', taskRoute)

connect() 
    .then( () => {
        try{
            app.listen(process.env.PORT, console.log(`Server is running at http://localhost:${process.env.PORT}`))
        } 
        catch(error) {
            console.log(`Can't connect to database : ${error}`)
        }
    })
    .catch(error => {
        console.log(`Error while connecting to database : ${error}`)
    })