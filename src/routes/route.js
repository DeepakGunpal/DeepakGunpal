const express = require('express');
const router = express.Router();
const weatherController= require("../controllers/weatherController")
const CowinController= require("../controllers/cowinController")
const memeController = require("../controllers/memeController")




router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

//Assignment 1

router.get("/cowin/getappointment", CowinController.getappointment)

//Assignment 2

router.get("/weather", weatherController.getWeather)
router.get("/londonWeather", weatherController.getLondonWeather)

//Assignment 3

router.get("/getmeme", memeController.getallmeme)
router.post("/createMeme", memeController.createMeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;