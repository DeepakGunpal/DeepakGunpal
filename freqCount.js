//frequency counting method

let a = [3, 4, 3, 6]
let b = [16, 36, 9, 9]

let objA = {}
let objB = {}

// for (const i in a) {        //time complexity n
//     objA[a[i]] = + 1
// }

// for (const i in b) {        //time complexity n
//     objB[b[i]] = + 1
// }

// // console.log(objA, objB)

// for (const key in objA) {          //time complexity n
//     if (objB[key * key] != objA[key]) return false
//     else return true
// }

// time complexity 3n --> O(n)

// problem find the maximum occourance of a charter in an array 
const arr = ['1', '8', '8', '6', '1', '2', '5', '5', '5', '1', '9', '1', '8', '6', '9', '0', '0', '1', '9', '2']
// 1-> 5, 8-> 3, 6-> 2, 2->2, 5-> 3, 9-> 3, 0->2
// // naive approach 
// let max_occourance = 0, max_occourance_character = null; //c
// for (let i = 0; i < arr.length; i++) {
    
    //     let currCharacterCount = 0;//c
    //     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {//c
//             currCharacterCount = currCharacterCount + 1;//c
//         }
//     }

//     if (currCharacterCount > max_occourance) {//c

//         max_occourance = currCharacterCount;//c
//         max_occourance_character = arr[i];//c
//     }

// }

// //time complexity O(c) + loop(c + loop(c+c) + c+c+c)
// //O(c)+n(c+n*2c+3c) => O(c)+O(2cn^2+3nc) ~= O(n^2)

// console.log(max_occourance, ">>>>>>", max_occourance_character)

// Better Approach
let freqObject = {};

let max_occourance = 0, max_occourance_character = null; //c
for (let i = 0; i < arr.length; i++) {
    if (freqObject.hasOwnProperty(arr[i])) {
        freqObject[arr[i]] += 1;
    } else {
        freqObject[arr[i]] = 1;
    }
    if (max_occourance < freqObject[arr[i]]) {
        max_occourance = freqObject[arr[i]];
        max_occourance_character = arr[i];
    }

}

// time complexity => loop(c+c+c+c+c+c) => 6nc == O(n)


console.log(max_occourance, ">>>>>>", max_occourance_character)