const timer = document.querySelector('#time span');

// setInterval(() => {
//     timer.innerText = new Date().toLocaleString()
// }, 1000)

/*
*In javascript or programming there are some actions that are not instantanious 
*Sometimes we intentionally delay the result
*and sometimes we dont have any but to wait for result such as network calls
*/
/*
* ""Promise simply means that javascript promises you that it will try to resolve a particular value""
* PROMISE
*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value,
 *the asynchronous method returns a promise to supply the value at some point in the future.

 *A Promise is in one of these states:

*=>  pending: initial state, neither fulfilled nor rejected.
*=>  fulfilled: meaning that the operation was completed successfully.
*=>  rejected: meaning that the operation failed.

?important note: Once it reaches any promise state it cannot be changed
*/
const jsondata = document.querySelector('#jsondata')

function getMeAPromise() {
    //fetch allows you to make network request
    // return fetch('http://127.0.0.1:5500/data.json'); //fullfilled promise
    return fetch('./data.json'); //fullfilled promise
    // return fetch('http://isg54545sg.com'); //rejected promise
}

//*pending promise
// console.log(getMeAPromise())

//?.catch to handle errors---------------------------------------

const promise = getMeAPromise()

// promise.then(result => {
//     jsondata.innerText = result['url'];
//     console.log("got result", result);
// }).catch((error) => {
//     console.log("promise failed", error)
// })

//? promise chaining to prevent callback hell-------------------------------------

// promise.then((data) => {
//     console.log('Got data', data)
//     console.log('my JSON data = ')// this is also a promise

//     // data.json().then((finalData) => {
//     //     console.log('Finally ', finalData)
//     // })
//     //*this will work fine but it will create callback hell
//     //*i.e. why we have multiple .then option to make promises flat
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
//         //*it will be printed, we can write n number of .then
//         //*previous .then return value will be resolved in next .then
//         //*if that return value is also promise
//     })


//? what else does .catch do??-----------------------------------

// promise.then((data) => {
//     console.log('Passed 1😎')
// })
//     .then((data1) => {
//         console.log('Passed 2😎')
//     })
//     .then((data2) => {
//         console.log('Passed 3')
//         throw new Error('Namaste, I am Error💀👺💀')
//         //*if in a chain of promises one promise throws error then next promises wont work
//     })
//     // //*if you want to handle every single error separately then you need multiple catches
//     // .catch(error => {
//     //     console.log('OMG, there is an error😱😰😱')
//     //     //*once error is handled in catch it is neutrilized rest of the code will work fine
//     // })
//     .then((data3) => {
//         console.log('Passed 4')
//     })
//     .then((data4) => {
//         console.log('Passed 5')
//     })
//     .catch(error => {
//         console.log('OMG, there is an error😱😰😱')
//         //*once error is handled in catch it is neutrilized rest of the code will work fine
//     })
//     .then((data5) => {
//         console.log('Muje kya mai toh batak hu🦆🦆')
//     })

// //* this is the callback function which will execute after 1 second
// setTimeout(() => {
//     timer.innerText = "Look at the bottom right corner of your screen"
// }, 1000)



//?create custome promises---------------------------------------------

function promiseSetTimeout() {

    // function fn(resolve, reject) {
    //     //* do whatever you want

    //     resolve()
    //     reject()
    // }

    // new Promise(fn)

    //* alternative way

    return new Promise((resolve, reject) => {
        // resolve(100)
        // reject(100)

        setTimeout(() => {
            timer.innerText = "Look at the bottom right corner of your screen"
            resolve()
            reject() //!what if write both resolve and reject
        }, 1000)

    })

    //*if just need promise then you can also use simpler syntax such as
    //  return Promise.resolve("Namaste, I am resolved Promise")
    // return Promise.reject("Namaste, I am rejected Promise")
}



// console.log(promiseSetTimeout())

// promiseSetTimeout().then((res) => {
//     console.log('Written text to screen', res)
// })
//     .catch((res) => {
//         console.log('Error - ', res)
//     })


//?Async await ---------------------------------    

//* the problem

// fetch('...').then(data => {
//     return [data.json(), data]
// })
//     .then(params => {
//         //* if we need to access the data here again
//         params[0], params[1]
//     })

//* this will work but not the efficient way to do it and also it does not look clean


// promiseSetTimeout().then(() => {
//     console.log('Statement 1')
//     return promiseSetTimeout()
// })
//     .then(() => {
//         console.log('Statement 2')
//         return promiseSetTimeout()
//     })
//     .then(() => {
//         console.log('Statement 3')
//     })


//* Clean and easy to read code With async await

async function boot() {
    const data = promiseSetTimeout()
    console.log('Statement 1', data)
    await data

    const data1 = await promiseSetTimeout()
    console.log('Statement 2')

    const data2 = await promiseSetTimeout()
    console.log('Statement 3')

    const data3 = await Promise.resolve("Deepak")
    console.log(data3, 'Deepak' == data3)
}

//  boot();

//? error handling with async and await

async function fetchAll() {
    try {
        // const ans = await fetch('data.json')
        const ans = await fetch('http://i_will_not_work.com')
        console.log("🥳working")
    } catch (error) {
        console.log('Kuch toh gadbad hai Daya🤔😕 ', error)
    }
}

// fetchAll();

async function promise2() {
    throw new Error('Hola, I am error. you just hope that async had been used')
}
//* Use try and catch to avoid code failure

// promise2()
// console.log('Hola, I dont care. coz i am bhoot 👻👻 (if async is used in promise2)')

//? promise.all and promise.allSettled

async function fetchData() {
    // const req1 = await fetch('data.json')
    // const data1 = await req1.json();
    // const req2 = await fetch('data1.json')
    // const data2 = await req2.json();
    // const req3 = await fetch('data2.json')
    // const data3 = await req3.json();

    //*all the above three request are not dependent on each other 
    //*next request start only after the completion of previous request(waterfall)

    //*-----------------------------------------

    const req1 = fetch('data.json')
    // const req2 = fetch('data1.json')
    const req2 = fetch('http://i_will_not_work.com')//failure case
    const req3 = fetch('data2.json')

    // await req1
    // await req2
    // await req3

    //*better than previous but still not best
    //*coz it is possible that request2 is completed and we can process it

    // console.log(req1, req2, req3)
    // console.log(data1, data2, data3)

    //*-----------------------------------

    //*better approach would be to await on all request together with another promise

    const promise = await Promise.allSettled([req1, req2, req3])
    //*promise.all accepts array of promise
    //*promise.all will return all the promise
    //!but if any one of them is rejected

    try {
        // const response = await Promise.all(promise.map(t => t.json()))

        const successResponse = promise.filter(promise => {
            return promise.status === "fulfilled"
        }).map(promise => promise.value)

        const response = await Promise.all(successResponse.map(t => t.json()))
        // console.log(promise)
        console.log(response)
    } catch (error) {
        console.log('Promise.all sab ko le dooba', error)
    }

}

fetchData();

