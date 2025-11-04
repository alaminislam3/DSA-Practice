const records =[
  {name : 'sakib', score : 23, city: "Dhaka"},
  {name : 'musfiq', score : 75, city: "Dhaka"},
  {name : 'tamim', score : 22, city: "cumilla"}
]
const arr = []
const arr1=  records.reduce((selection,playerStat)=> {
  const runs = playerStat?.score >=35? "top" : "bottom"
  runs === "top" && arr.push(playerStat)  
  return arr
},{})

const openingPlayer = arr.filter((player)=> player?.score> 50)
console.log(openingPlayer);

const product = [
  {name : 'xioami', price : 1500 , color : "blue"},
  {name : 'Iphone16', price : 2000 , color : "pink"},
  {name : 'google', price : 1500 , color : "blue"}
]
const result  = []
const mainProudct = product.reduce((Selection))


