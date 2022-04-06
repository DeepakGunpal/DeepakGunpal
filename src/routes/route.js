const express = require('express');
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const formatter = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('I am inside the first route')
    logger.welcome()
    console.log('Current Date is ' + helper.printDate)
    console.log('Current Month is ' + helper.printMonth)
    helper.getBatchInfo()
    console.log('the endpoint value is', logger.welcome, helper.printDate,helper.printMonth,helper.getBatchInfo, formatter.hardcode)
    
    
    res.send('Deepak gunpal first ever api!')
});
 
module.exports = router;
// adding this comment for no reason