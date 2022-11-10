const express = require('express')
const router = express.Router()

<<<<<<< HEAD
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
=======
const {upload} = require('../services/multerSetup')
>>>>>>> 03eeb6028d994157da799f106a39fc4d1d151a04

const { uploadFile, getAllFiles, downloadFile } = require('../controllers/fileController')
const {isAuthenticated} = require('../middleware/auth')



router.post('/upload',upload, uploadFile)
router.get('/download/:file(*)', downloadFile)
router.get('/getFiles', getAllFiles)

module.exports = router


