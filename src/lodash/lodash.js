//- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays

const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


const _ = require('lodash')
const quarters = _.chunk(month, 4)    
console.log(quarters)

//- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console

const TenOdd = [1,3,5,7,9,11,13,15,17,19]
const NineOdd = _.tail(TenOdd)
console.log(NineOdd)

//- Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them

const num0 = [15,23,45,21,32,45]
const num1 = [35,41,45,87,32]
const num2 = [45,32,21,56,14,98]
const num3 = [45,32,51,32,65]
const num4 = [46,54,89,32,45]

const num = _.union(num0,num1,num2,num3,num4)
console.log(num)

//- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

const pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy”","Pans Labyrinth"]]
const keyValue = _.fromPairs(pairs)
console.log(keyValue)


//Export to route.js

const mod4 = {
    quarters,
    NineOdd,
    num,
    keyValue

}
module.exports.mod4 = mod4

           