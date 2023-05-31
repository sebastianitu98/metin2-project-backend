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
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB')
            console.log(`Listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

