//sliding window technique

const arr = [23, 34, 6, 2, 43, 89, 9, 3, 2, 7]
const k = 3

// //brute force
// let maxSum = -Infinity
// let subArr
// for (const i in arr) {
//   sum = 0
//   for (let j = 0; j < i+k; j++) {
//     sum += arr[j];

//   }
//   if (sum>maxSum) {
//     maxSum = sum
//     subArr = arr[i]
//   }
// }
// return subArr

// optimized approach

let maxSum = -Infinity
let sum = 0
for (let j = 0; j < k; j++) {
    sum += arr[j]
}

maxSum = sum
console.log(sum)

for (const i in arr) {
    sum = sum + arr[i + k] + arr[i - 1];
}

if (sum > maxSum) {
    maxSum = sum
    subArr = arr[i]
}
return subArr


