//what is time complexity and why we need it ?
//time taken by the code or algorithm or function

//how to calculate the time complexity

var a = 1;  //(c) constant time taken by the statement
var b = 2;  //(c) constant time taken by the statement

var c = a + b;  // c (addition) + c (assignment) => 2c

//total time taken by the code to execute or complete is (c+c+c+2c) => 4C

var arr = [] // time complexity (c) constant time

// we need to calculate total even number in array

arr = [1, 2, 5, 7, 9, 10, 20, 22] //(8c)

//even number divided by 2

// let even_count = 0 //c
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {  //c
//         even_count++  //2c
//     }
// }
// //total time complexity => c + loop(c + 2c) => c + loop(3c) => c + no. of time loop runs(in our case arr.length) * 3c => c + 8 * 3c => 25c

//array size of n => c + n*2c => c + 2nc => c(2n + 1)
// console.log(even_count)

// what is big O?
// Big O is process to define how the program performs as the input grows
//big O is the worst case scenario rather than average or best case scenario

// two important
// constant dont matters
// 

// let array = [2,5,9,12,98,43];
// for (let i = 1; i < array.length-1; i++) {
//     array[i] = array[i+1];

// }
// console.log(array.pop())
// array.pop()
// console.log(array)
let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
// var setZeroes = function (matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] == 0) {

//                 console.log(i, j)
//                 for (let k = 0; k < matrix.length; k++) {

//                     for (let l = 0; l < matrix[k].length; l++) {
//                         matrix[i][l] = 0;
//                         matrix[k][j] = 0;

//                         // console.log(matrix)
//                     }

//                 }
//                 return matrix;
//             }


//         }

//     }
// };

// var setZeroes = function (matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] == 0) {
//                 let matrix2 = matrix
//                 for (let k = 0; k < matrix2.length; k++) {

//                     for (let l = 0; l < matrix2[k].length; l++) {
//                         matrix2[i][l] = 0;
//                         matrix2[k][j] = 0;

//                         // console.log(matrix2)
//                     }

//                 }
//                 return matrix2;
//             }


//         }

//     }
// };

// console.log(setZeroes(matrix));

// for (var index = 0; index < 3; index++) {
//     setTimeout(() => {
//         console.log(index)
//     }, 1);    
// }
// for (let index = 0; index < 3; index++) {
//     setTimeout(() => {
//         console.log(index)
//     }, 1);    
// }

// as you know javascript is non-blocking so for loop run 3 times without waiting to execute setTimeut and increased value of i after some time when setTimeout going to execute it's storing reference of i ,because var has global scope its value is now 3, and print 3 times 3 
// when we use let as you know let has block scope so when for loop is going to execute it's treated i as a new variable every time and makes a new memory reference every time and it prints 0,1,2

function quickSort(array, left, right) {

    left = 0;
    right = array.Length - 1;
    const pivot = partition(array, left, right);

    if (left < pivot - 1) {
        quickSort(array, left, pivot - 1)
    }
    if (right > pivot) {
        quickSort(array, pivot, right)
    }
    return array;


    function partition(array, left, right) {

        const pivot = Math.floor((left + right) / 2)

        while (left <= right) {

            while (array[left] < array[pivot]) {
                left++
            }
            while (array[right] > array[pivot]) {
                right--
            }
            if (left <= right) {
                [array[left], array[right]] = [array[right], array[left]]
                left++
                right--
            }
        }
        return left;
    }

}

let array = [8, 45, 3, 6, 7, 4, 34, 5]

console.log(quickSort(array))