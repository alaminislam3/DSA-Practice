/* The core Transformation Toolkit (map,filter,sort,slice) */
/* number gula sajao choto theke boro */

const numbers = [40,100,1,5,25,10]
/* alphebetic way te organize koro */
const fruits = ['banana','apple', 'cherry','date']

// const sortedNumber = numbers.sort((a,b)=> a -b)

// fruits.sort((a,b)=> a.localeCompare(b))

// console.log(fruits)
/* Array sob falay deo . ekta rakho */
const arr = [40,100,1,5,25,[10,90]];


const flatArr = arr.flat()
// const flatArr = arr.flat();

// console.log(flatArr)

/* remove duplicate using flat  */
const tagPost = [
    ["Java", "react", "html"],
    ["CSS", "node", "Java"],
    ["Tailwind", "flutter", "react"]
]

const filterTags = new Set (tagPost.flat())
// const filterTags = new Set (tagPost.flat()) /* This will return object */
const filterTags2 = [...new Set (tagPost.flat())]
// const filterTags2 = [...new Set(tagPost.flat())] /* This will return array */

// console.log(filterTags2)
