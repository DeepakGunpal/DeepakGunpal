const axios = require("axios")

//Assignment 2
// Api_id/key 8a6f3f026a8b14ce6cae65707244a14d
const getLondonWeather = async function (req, res){
    const options = {
        method:"get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=8a6f3f026a8b14ce6cae65707244a14d`
    }
    const weather = await axios(options)
    res.status(200).send({status:true, data:weather.data.main.temp}) //use .main.temp to get temp only
}

const getWeather = async function (req, res) {
    try {

        const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        const arrayOfCityObj = []

        // [ { city: "bengaluru", temp: 290}, { city: "Mumbai", temp: 285} ]

        for (i = 0; i < cities.length; i++) {

            const obj = { city: cities[i] }
            const options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=8a6f3f026a8b14ce6cae65707244a14d`
            }
            const weather = await axios(options)
            console.log(weather.data.main.temp)

            obj.temp = weather.data.main.temp // { city:"Mumbai", temp: 280 }
           

            arrayOfCityObj.push(obj)
        }

        arrayOfCityObj.sort((a, b) => a.temp - b.temp)
        console.log(arrayOfCityObj)
        res.status(200).send({ status: true, data: arrayOfCityObj })
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}



module.exports.getLondonWeather = getLondonWeather
module.exports.getWeather = getWeather