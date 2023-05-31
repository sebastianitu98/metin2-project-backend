const Platform = require('../models/platformModel')
const mongoose = require('mongoose')

//get all platforms
const getAllPlatforms = async (req, res) => {
    const platforms = await Platform.find({}).sort({ createdAt: -1 })

    res.status(200).json(platforms)
}


//get a single platform based on the id
const getPlatform = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'ID gresit!' })
    }

    const platform = await Platform.findById(id)

    if (!platform) {
        return res.status(404).json({ error: 'Platforma nu a fost gasita.' })
    }

    res.status(200).json(platform)
}


//create new platform
const createPlatform = async (req, res) => {

    const platformParameters = req.body


    //add to Database
    try {
        const platform = await Platform.create(platformParameters)
        res.status(200).json(platform)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a platform
const deletePlatform = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'ID gresit!' })
    }

    const platform = await Platform.findOneAndDelete({ _id: id })

    if (!platform) {
        return res.status(404).json({ error: 'Nu exista platforma cu acest ID pentru a o putea sterge' })
    }

    res.status(200).json(platform)
}


//update a platform
const updatePlatform = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'ID gresit!' })
    }

    const platform = await Platform.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!platform) {
        return res.status(404).json({ error: 'Nu exista platforma cu acest ID pentru a o putea updata' })
    }

    res.status(200).json(platform)
}



module.exports = { getAllPlatforms, getPlatform, createPlatform, deletePlatform, updatePlatform }