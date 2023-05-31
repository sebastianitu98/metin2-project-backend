const express = require('express')
const { createPlatform, getAllPlatforms, getPlatform, deletePlatform, updatePlatform } = require('../controllers/platformController')

const router = express.Router()

//GET single platform
router.get('/:id', getPlatform)

//GET all platforms
router.get('/', getAllPlatforms)

//POST a platform
router.post('/', createPlatform )

//DELETE a platform
router.delete('/', deletePlatform)

//UPDATE a platform
router.patch('/', updatePlatform)

module.exports = router