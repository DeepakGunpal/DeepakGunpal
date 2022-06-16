//const arr = [-5,-3,-2,1,5,7]









//----------------------------

//given a sorted array of integer find whether a pair exist with given sum

const arr = [1, 4, 5, 7, 9, 10]  //a+b = given sum

// function givenSumPresent(sum) {
//     let isPairExist = false;

//     //outer loop (considering each number)
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) {
//                 isPairExist = true;
//             }
//         }

//     }
//     return isPairExist;
// }

// //time compexity O(n^2)
// console.log(givenSumPresent(23))

//optimized solution

function isSumPresent(sum) {
    let left = 0,right = arr.length-1;
    let isPairExist = false

    while (left<right) {
        if(arr[left]+arr[right]===sum){
            isPairExist=true;
            break;
        }else if (arr[left]+arr[right]>sum) {
            right--;//we are updation right pointer because array is sorted in ascending order
        } else {
            left++;
        }
    }
    return isPairExist;
} 
//time complexity O(n )
console.log(isSumPresent(13))