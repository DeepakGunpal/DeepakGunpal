//write a program to add numbers from 1 to n
let n = 500

//naive technique
let sum = 0

for (let i = 1; i <= n; i++) {
    sum = sum + 1
}

console.log(sum)

//time complexity = O(n) // also known as Big O notation

// improved technique

let BetterSum = (n * (n + 1)) / 2
console.log(BetterSum)

//time complexity = O(1) 

//space complexity

//swap two numbers a and b

let a = 23
let b = 78
// a = 78  b = 23
temp = a //temp = 23
a = b // a = 78
b = temp // b = 23