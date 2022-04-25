const axios = require("axios")



//Assignment 3
const getallmeme = async function (req, res) {
    const options = {
        method: "get",
        url: `https://api.imgflip.com/get_memes`
    }
    const meme = await axios(options)
    const result = meme.data
    res.status(200).send({ status: true, data: result.data.memes })
}

const createMeme = async function (req, res) {
    let id = req.query.template_id
    let username = req.query.username
    let password = req.query.password
    let text0 = req.query.text0
    let text1 = req.query.text1

    const options = {
        method: "post",
        url:`https://api.imgflip.com/caption_image?template_id=${id}&username=${username}&password=${password}&text0=${text0}&text1=${text1}`,
    }
    const meme = await axios(options)
    const result = meme.data
    res.status(200).send({ status: true, data: result })
}




module.exports.createMeme = createMeme
module.exports.getallmeme = getallmeme
