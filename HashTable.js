// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // this.data = [];
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     const address = this._hash(key);
//     const currentBucket = this.data[address]
//     console.log(currentBucket)
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1]
//         }
//       }
//     }
//     return undefined;
//   }

//   keys() {
//     const keysArray = [];
//     console.log(this.data.length);
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0])
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(20);
// myHashTable.set('grapes', 10000)
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')
// myHashTable.keys()

// function _hash(key) {

//   let hash = 0;
//   for (let i = 0; i < key.length; i++) {
//     hash = (hash + key.charCodeAt(i) * i) % 50
//   }
//   return hash;
// }

// console.log(_hash("hello"))
// console.log(_hash("hello"))

