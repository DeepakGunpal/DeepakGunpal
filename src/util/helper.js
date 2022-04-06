const printDate = new Date().getDate();
const printMonth = new Date().getMonth()+1;
// console.log(printDate)
// console.log(printMonth)
const getBatchInfo = function()
{
    console.log('Uranium, Week3, Day14, the topic for today is Nodejs module system')
}

// const mod2 = {printDate,printMonth,getBatchInfo}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
