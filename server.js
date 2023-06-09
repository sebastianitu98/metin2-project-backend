require('dotenv').config()
const express = require('express')
const platformsRoutes = require('./routes/platforms')
const mongoose = require('mongoose')
var cors = require('cors')
const fs = require('fs')
const https = require('https')

const key = fs.readFileSync('private.key')
const cert = fs.readFileSync('certificate.crt')

const app = express()
app.use(cors())

const cred = {
    key,
    cert
}

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
        app.listen(3000, () => {
            console.log('Connected to DB')
            console.log(`Listening on port 3000`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

const httpsServer = https.createServer(cred, app)
httpsServer.listen(8443)

