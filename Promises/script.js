const timer = document.querySelector('#time span');

// setInterval(() => {
//     timer.innerText = new Date().toLocaleString()
// }, 1000)

/*
In javascript or programming there are some actions that are not instantanious 
Sometimes we intentionally delay the result
and sometimes we dont have any but to wait for result such as network calls
*/
/*
""Promise simply means that javascript promises you that it will try to resolve a particular value""
PROMISE
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value,
 the asynchronous method returns a promise to supply the value at some point in the future.

 A Promise is in one of these states:

=>  pending: initial state, neither fulfilled nor rejected.
=>  fulfilled: meaning that the operation was completed successfully.
=>  rejected: meaning that the operation failed.

important note: Once it reaches any promise state it cannot be changed
*/
const jsondata = document.querySelector('#jsondata')

function getMeAPromise() {
    //fetch allows you to make network request
    // return fetch('http://127.0.0.1:5500/data.json'); //fullfilled promise
    return fetch('/data.json'); //fullfilled promise
    // return fetch('http://isg54545sg.com'); //rejected promise
}

//pending promise
// console.log(getMeAPromise())

//.catch to handle errors---------------------------------------

const promise = getMeAPromise()

// promise.then(result => {
//     jsondata.innerText = result['url'];
//     console.log("got result", result);
// }).catch((error) => {
//     console.log("promise failed", error)
// })

// multiple .then to prevent callback hell-------------------------------------

// promise.then((data) => {
//     console.log('Got data', data)
//     console.log('my JSON data = ')// this is also a promise

//     // data.json().then((finalData) => {
//     //     console.log('Finally ', finalData)
//     // })
//     //this will work fine but it will create callback hell
//     //i.e. why we have multiple .then option to make promises flat
//     return data.json()
// })
//     .then((finalData) => {
//         console.log('Finally ', finalData)
//     })
//     .then(() => {
//         // return undefined
//     })
//     .then(() => {
//         // return undefined
//     })
//     .then(() => {
//         console.log("From 5th dot then")
//         //it will be printed, we can write n number of .then
//         //previous .then return value will be resolved in next .then
//         //if that return value is also promise
//     })


// what else does .catch do??-----------------------------------

// promise.then((data) => {
//     console.log('Passed 1😎')
// })
//     .then((data1) => {
//         console.log('Passed 2😎')
//     })
//     .then((data2) => {
//         console.log('Passed 3')
//         throw new Error('Namaste, I am Error💀👺💀')
//         //if in a chain of promises one promise throws error then next promises wont work
//     })
//     //if you want to handle every single error separately then you need multiple catches
//     // .catch(error => {
//     //     console.log('OMG, there is an error😱😰😱')
//     //     //once error is handled in catch it is neutrilized rest of the code will work fine
//     // })
//     .then((data3) => {
//         console.log('Passed 4')
//     })
//     .then((data4) => {
//         console.log('Passed 5')
//     })
//     .catch(error => {
//         console.log('OMG, there is an error😱😰😱')
//         //once error is handled in catch it is neutrilized rest of the code will work fine
//     })
//     .then((data5) => {
//         console.log('Muje kya mai toh batak hu🦆🦆')
//     })

//this is the callback function which will execute after 1 second
// setTimeout(() => {
//     timer.innerText = "Look at the bottom right corner of your screen"
// }, 1000)

//create custome promises
function promiseSetTimeout() {

    // function fn(resolve, reject) {
    //     //do whatever you want

    //     resolve()
    //     reject()
    // }

    // new Promise(fn)

    //alternative way

    return new Promise((resolve, reject) => {
        // resolve(100)
        // reject(100)

        setTimeout(() => {
            timer.innerText = "Look at the bottom right corner of your screen"
            resolve()
            reject()//what if write both resolve and reject
        }, 1000)
    })
}

// console.log(promiseSetTimeout())
promiseSetTimeout().then(() => {
    console.log('Written text to screen')
})