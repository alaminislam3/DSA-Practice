const numbers = ([1,2,3,4,5,5,6])

const newSet = [...new Set(numbers)]


// console.log(newSet.size)

// console.log(numbers)
// console.log(numbers)


const allFruits = ["apple", "mango", " banana", "mango"]
// const fruits = new Set (allFruits)
// const test = Array.from(fruits)      
//  test.push("tomato")

const removeDup = (arr) => {
    const setn = new Set(arr)

    return Array.from(setn)
}

console.log(removeDup(allFruitsj))



// console.log(result.has("tomato"))
/* If we want to add something in array we'll use push  */
//  /* if we want to make array we use Array.from */
// console.log(test)
// const test = fruits.forEach((value)=> console.log(value))
// console.log (test)

// fruits.add("tomato")
// fruits.add("mango")
// fruits.add("banana")

// console.log(fruits.size)
// fruits.delete("mango")
// console.log(fruits.has("tomato"))
// console.log(fruits)
// console.log(fruits)

// for(let item of fruits){
//     //   console.log(item)
// }


const mezba = {username : "mezba"}
const mizan = {username : "mizan"}
const sakib = {username : "sakib"}

const people = new Set ()

// people.add(mezba)
// people.add(mizan)
// people.add(sakib)


const username = [...people].map(p => p.username)
// console.log(username)


// console.log(people)


// for (let p of people){
//      console.log(p.username)
// }

// const fru