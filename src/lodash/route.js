const express = require('express');
const formatter = require('./lodash.js')
const router = express.Router();

router.get('/hello', function (req, res) {
    console.log('I am inside the first route')
    console.log('the endpoint value is', formatter.mod4)
    // formatter.mod4
    res.send('Deepak gunpal first ever api!')
});
 
module.exports = router;
// adding this comment for no reason