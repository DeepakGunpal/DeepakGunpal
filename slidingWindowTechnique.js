// pritesh session
//sliding window technique

const array = [23, 34, 6, 2, 43, 89, 9, 3, 2, 7];
const k = 3;

// //brute force
// function highestSum(arr,k){
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
// }
// optimized approach

// function highestSum(arr, k) {
//     let maxSum = -Infinity
//     let sum = 0
//     for (let j = 0; j < k; j++) {
//         sum += arr[j]
//         console.log(sum)
//     }

//     maxSum = sum

//     for (const i in arr) {
//         sum = sum + arr[k] + arr[i];
//     }

//     if (sum > maxSum) {
//         maxSum = sum
//         // subArr = arr[i]
//     }
//     return maxSum
// }

// console.log(highestSum(array, 3))

//shadab session
//given an array of size n find the maximum in a current window of size w, window is sliding from left to right

const arr = [1, 3, -1, -3, 5, 3, 6, 7];

/**
 * [|1,3,-1|,-3,5,3,6,7] => 3
 * [1,|3,-1,-3,|5,3,6,7] => 3
 * [1,3,|-1,-3,5|,3,6,7] => 5
 * [1,3,-1|,-3,5,3|,6,7] => 5
 * [1,3,-1,-3|,5,3,6|,7] => 6
 * [1,3,-1,-3,5,|3,6,7|] => 7
 */

//n = 8, w = 3, window = n - w +1 => 6

// total number of window form of size w in array having size n => n-w+a
//brute force
// let n = arr.length;
// let w = 3;
// let result = [];
// for (let currWindow = 0; currWindow < n - w + 1; currWindow++) {
//   let max = arr[currWindow];
//   for (let i = currWindow; i < currWindow + w; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   result.push(max);
// }
// console.log(result);
