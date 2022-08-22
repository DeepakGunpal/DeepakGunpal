//? everything except primitive types are objects

//* javascript compares primitive types on value.
//* However, for  objects javascript compares them on where there pointed in memory 

//? same value zero
//*  It determines whether or not the two arguments are the same value 
//* (ignoring the difference between +0𝔽 and -0𝔽). 

// console.log(NaN === NaN); //false
// console.log([NaN].includes(NaN)); //true

//! tip always use === instead of ==

//? iteration over objects

function iterateOverObj(obj) {

    for (let key in obj) {
        const value = obj[key];

        if (typeof value === 'object') {
            console.log(`${key} = `, value)
            iterateOverObj(value)
        } else {
            console.log(`${key} = ${value}`)
        }
    }
}

//? iterable objects
//? custom iteration method

let arr = [100, 200, 300];

let arri = arr[Symbol.iterator]();

// console.log(arri.next()); //*100
// console.log(arri.next()); //*200
// console.log(arri.next()); //*300

function iterator(arr) {
    var index = 0;
    return {
        aageBad() {
            return {
                value: arr[index++],
                done: index > arr.length
            }
        }
    }
}

let itr = iterator(arr);
// console.log(itr.aageBad());
// console.log(itr.aageBad());
// console.log(itr.aageBad());
// console.log(itr.aageBad());

//? symbols (unique value)

//! symbols cant be used in for in loop
//! symbol value will be skiped in for in loop and json conversion

let x = Symbol("deepak");
let y = Symbol("deepak");
// console.log(x === y);//* false

let age = Symbol('age');

let user = {
    name: "Deepak",
    class: "developer",
}

user[age] = 24;

// console.log(user); //*{ name: 'Deepak', class: 'developer', [Symbol(age)]: 24 }
// console.log(user.class); //* developer
// console.log(user.age); //* undefined
// console.log(user[age]); //* 24


//? generator
//! * is mandatory to use yield keyword

function* genRange(start, stop, stepper = 1) {
    for (let i = start; i < stop; i += stepper) {
        yield i;
    }
}

let genitr = genRange(1, 3)
// console.log(genitr.next()); //* { value: 1, done: false }
// console.log(genitr.next()); //* { value: 2, done: false }
// console.log(genitr.next()); //* { value: undefined, done: true }
