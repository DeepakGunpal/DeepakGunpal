const a = {
    prop1: 1
}

const b = {
    prop2: 10
}

const c = {
    prop3: 100
}

const d = {
    prop4: 1000
}

d.__proto__ = c
c.__proto__ = b
b.__proto__ = a

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d.prop1)

//? functional prototype

function car() {
    this.fuel = 100;
    this.wheels = 4;
}

car.prototype.type = "vehical"
//? to save memory
/**
 function inefficientCar() {
    this.fuel = 100;
    this.wheels = 4;
    this.addfuel = (amt) =>{
        this.fuel += amt;  //* here the function is also stored in memory for every object
    }
}
 */

car.prototype.addfuel = function (amt) {
    this.fuel += amt;
}

const obj = new car();
const obj2 = new car();

console.log(obj) //* car { fuel: 100, wheels: 4 }
console.log(obj2) //* car { fuel: 100, wheels: 4 }
console.log(obj.type) //* vehical

obj.fuel = 1000
// obj.type = "spaceship" //* will be added as new key

obj.__proto__.type = "spaceship"

console.log(obj.type) //* spaceship
console.log(obj2.type) //*spaceship => this is also to spaceship
