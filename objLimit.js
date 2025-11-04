/* Obj Limitation and map Introduction */
// 1
// const obj = {
//   nextLevel: { courseId: "level2" },
//   "programming Hero": { courseId: "level1" },
// };
// console.log(obj["programming Hero"])

// 2

// const obj ={}

// obj.nextLevel = {courseId: "Level2"}
// obj[true] = {courseId : "Level1"}
// console.log(obj)

// 3
const course1 = {name : "programming hero"}
const course2 = {name : "Next Level web Dev"}

const map = new Map()
     
map.set(course1, {courseId: "level1"})
map.set(course2, {courseId: "level2"})

// map.clear()
// map.delete(course1)
// console.log(map.has(course1))
// map.forEach((value,key)=> (key.name = "sohoz sorol simple " + key.name))

// console.log([...map.keys()])
// console.log([...map.values()])
for (let key of map.keys()){
    console.log(key)
}



