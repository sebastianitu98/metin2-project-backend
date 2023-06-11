require('dotenv').config()
const express = require('express')
const platformsRoutes = require('./routes/platforms')
const mongoose = require('mongoose')
var cors = require('cors')
const fs = require('fs')

const file = fs.readFileSync('./B22F499C420CC2971E6C76E1966C65E9.txt')

const app = express()
app.use(cors())

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(platformsRoutes)

app.get('/.well-known/pki-validation/B22F499C420CC2971E6C76E1966C65E9.txt', (req, res) => {
    res.sendFile('/home/ec2-user/metin2-project-backend/B22F499C420CC2971E6C76E1966C65E9.txt')
})

//connect do db
mongoose.connect('mongodb+srv://sebastianitu61:guBCdD86trZgcqTC@metin2platforms.6zhlwhe.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000, () => {
            console.log('Connected to DB')
            console.log(`Listening on port 3000`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

