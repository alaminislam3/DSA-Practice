// const startTime = performance.now();

// for (let i = 0; i <5000 ; i++){
//   console.log(i);
// }

// const endTime = performance.now();

// console.log(`This code took ${endTime- startTime} ms`);

// const arr = ["apple", "banana", "cherry", "date", "elderberry"];

// const set = new Set(arr)

// const test = Array.from(set)

// test.push("tomato")

// console.log(test)

const numbers = [1,2,4,7,12,9]

// numbers.forEach(n=> console.log(n*2))

/* foreach isn't returning anything  */


const even = numbers.filter(n=>(n % 2 === 0))

/* filter is provide filtered data in []. like answer : [2,4,12] */

console.log(even)

