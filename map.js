/* The core Transformation Toolkit (map,filter,sort,slice) */

const numbers = [40,100,1,5,25,10]
const fruits = ['banana','apple', 'cherry', 'date']

// const sortedNumber = numbers.sort((a,b)=> a -b)
// fruits.sort((a,b)=> a.localeCompare(b))
fruits.sort((a,b)=> a.localeCompare(b))

// console.log(fruits)

const arr = [40,100,1,5,25,[10,90]];

const flatArr = arr.flat();

// console.log(flatArr)

const tagPost = [
    ["Java", "react", "html"],
    ["CSS", "node", "Java"],
    ["Tailwind", "flutter", "react"]
]
// const filterTags = new Set (tagPost.flat()) /* This will return object */
// const filterTags = [...new Set(tagPost.flat())] /* This will return array */

console.log(filterTags)
