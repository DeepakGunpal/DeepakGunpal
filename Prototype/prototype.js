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

console.log(a)
console.log(b)
console.log(c)
console.log(d.prop1)