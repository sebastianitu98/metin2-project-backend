require('dotenv').config()
const express = require('express')
const platformsRoutes = require('./routes/platforms')
const mongoose = require('mongoose')
var cors = require('cors')

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

//connect do db
mongoose.connect('mongodb+srv://sebastianitu61:guBCdD86trZgcqTC@metin2platforms.6zhlwhe.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(80, () => {
            console.log('Connected to DB')
            console.log(`Listening on port 80`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

