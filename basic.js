//what is time complexity and why we need it ?
//time taken by the code or algorithm or function

//how to calculate the time complexity

var a = 1;  //(c) constant time taken by the statement
var b = 2;  //(c) constant time taken by the statement

var c = a + b;  // c (addition) + c (assignment) => 2c

//total time taken by the code to execute or complete is (c+c+c+2c) => 4C

var arr = [] // time complexity (c) constant time

// we need to calculate total even number in array

arr = [1,2,5,7,9,10,20,22] //(8c)

//even number divided by 2

let even_count = 0 //c
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {  //c
        even_count++  //2c
    }    
}
//total time complexity => c + loop(c + 2c) => c + loop(3c) => c + no. of time loop runs(in our case arr.length) * 3c => c + 8 * 3c => 25c

//array size of n => c + n*2c => c + 2nc => c(2n + 1)
console.log(even_count)