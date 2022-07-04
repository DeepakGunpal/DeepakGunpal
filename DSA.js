var containsNearbyDuplicate = function (nums, k) {
    let hash = {};
    for (let i = 1; i <= nums.length; i++) {
        let numValue = nums[i - 1];
        if (!hash[numValue]) {
            hash[numValue] = i;
        } else {
            if (i - hash[numValue] <= k) {
                console.log(hash)
                return true;
            } else {
                hash[numValue] = i;
            }
        }
    }
    console.log(hash)
    return false;
};

// console.log("test 1 ",containsNearbyDuplicate([1,2,3,1],3))
// console.log("test 2 ",containsNearbyDuplicate([1,0,1,1],1))
// console.log("test 3 ",containsNearbyDuplicate([1,2,3,1,2,3],2))

// str1 = "listen"
// str2 = "islent"

// s1 = [...new Set(str1)]
// s2 = [...new Set(str2)]

// // console.log(s1.join(""))
// // console.log(s2.join(""))
// // console.log(s1==s2)
// for (let i = 0; i < s1.length; i++) {

//     console.log(s1.includes(s2[i]))

// }

//------------------------------------------

// function a(n) {

//     console.log(n)
//     if (n == 0) return console.log("Done")
//     a(n - 1)
// }
// a(5) 

// let s = "hello"
// // let S = [...new Set(s)]
// // S[0] = "A"
// let S;
// for (let i = 0; i < s.length/2; i++) {

//      S = s.replace(s[i],s[s.length-i-1])
//     console.log(S)

// }
// console.log(S)

/*
start = 0
end = 0
lowercase.indexof(s[0]) = y , if(!-1) start = i
if(s[i+1] == uppercase[y]) continue
else end = i+1  


*/
// let a = 122
// console.log(a.toString().split(""))

// reverse an Array
// let arr = [1,2,3,4,5]
// let arr = ["h","e","l","l","o"]
// for (let i = 0; i < arr.length/2; i++) {
//     let temp=arr[i];
//     arr[i]=arr[arr.length-i-1];
//     arr[arr.length-i-1] = temp;

// }
// console.log(arr)

//sum of n natural number using recursion

// function sumNatural(n){
// //base condition
// if(n<=0){
//     return "It is not a natural number";
// }else if(n==1){
//     return 1;
// }
// //recursive call
// return n + sumNatural(n-1);
// };
// const result = sumNatural(5);
// console.log(result);

// //sum of n even numbers;

// function sumEven(n){
//     //base condition
//     if(n===1) return 0;
//     else if (n<=0) return "No Sum"

//     //recursive call
//     return 2*n-2 + sumEven(n-1)
// }
// const result = sumEven(2);
// console.log(result)


//sum of  even numbers from n1 to n2;

// function sumEven(n1,n2){
//     //base condition
//     if(n2==n1) return 0;
//     else if (n2<=n1) return "No Sum"

//     //recursive call
//     return 2*n2-2 + sumEven(n2-1)
// }
// const result = sumEven(2,6);
// console.log(result)

// console.log(Math.log(16))

// var isPowerOfThree = function(n) { 

//     let int = n/3;   

//       if(int>1) {
//           n=int;            
//           isPowerOfThree(n)
//       }else{       
//           if(int==1){                  
//                return console.log(true);          
//           }else{           
//               return console.log(false);
//           }
//       }

//   };

//   isPowerOfThree(27)
//   isPowerOfThree(45)

//deep flaten an array

// let input = [1, 2, 3, 4, 5, [6, [7, 8, 9]]];

// function flat(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {

//         if (Array.isArray(arr[i])) {
//             newArr = newArr.concat(flat(arr[i]));
//         } else {
//             newArr.push(arr[i]);
//         }

//     }
//     return newArr;
// }

// console.log(flat(input))

// // swap values
// let a = 5;
// let b = 10;
// // b=(a+b)-(a=b)
// [a, b] = [b, a]

// console.log(a)
// console.log(b)

// count = 0
// function limit(count){
//   console.log(count)
//   if (count>3) {
//     return 2
//   }
//   count++
//   // limit(count+1)//undefined
//   // return limit(++count)//2
//   return limit(count)//2
// }
// console.log(limit(count))

// //call stack
// function runMe() {
//     console.log(1)

//     setTimeout(()=>console.log(2), 0);
//      console.log("deepak")
//     setTimeout(()=>console.log(3), 0);
//     console.log(4)
//   }
//   runMe()

//capitalize the first letter
var capitalizeTitle = function (title, i) {

    title = title.split(" ")

    if (i < title.length) {
        title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase();
        i++
          capitalizeTitle(title.join(" "), i)
    }
        return title

};

// capitalizeTitle("capiTalIze tHe titLe", 0)
console.log(capitalizeTitle("capiTalIze tHe titLe", 0))