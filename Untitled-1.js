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
