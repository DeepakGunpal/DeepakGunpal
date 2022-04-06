const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('I am inside the first route')
    res.send('Deepak gunpal first ever api!')
});
 
router.get('/test-me1', function (req, res) {
    console.log('I am inside the second route')
    res.send('Deepak gunpal second api!')
});
 
router.get('/test-me2', function (req, res) {
    res.send('Deepak gunpal third api!')
});
 
module.exports = router;
// adding this comment for no reason