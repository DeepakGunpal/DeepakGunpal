//recursion (function calling itself with some conditional return or termination)
// if we do not use return or termination then stack overflow occur

//stack is a datastructure last in first out property

const arr = [3, 4, 5, 6, 7, 8];

function printArrayRecursive(index) {
    if (index>=arr.length)   return 
    // if (arr[index]==undefined)   return 
    
    console.log(arr[index]);
    index = index + 1;

    printArrayRecursive(index)
    console.log("index is ",index)
}

printArrayRecursive(0) 


// function printArrayRecursiveInRecursive(index) {
//     if (index>=arr.length)   return
    
//     index = index + 1;
    
//     printArrayRecursiveInRecursive(index)
//     console.log(arr[index-1]);
// }

// printArrayRecursiveInRecursive(0) 