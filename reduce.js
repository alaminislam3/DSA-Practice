/* From simple Total to powerful Agregation Reduce  Mod - 2.5 */

// count subtotal 

const cartItem = [
  {id:1, name : 'laptop', price: 500, quantity : 1},   
  {id:2, name : 'mobile', price: 1500, quantity : 2},
  {id:3, name : 'keyboard', price: 600, quantity : 2}
]

const subTotal = cartItem.reduce((subtotal,product)=> {
    // console.log(subtotal,product)
    return subtotal + product.price  * product.quantity
},0)

// console.log(subTotal)

// FIND BEST SCORER 

const players = [
    {name : 'tamim', score: 200},
    {name : 'sakib', score: 500},
    {name : 'musfiq', score: 700},
    {name : 'topy', score: 200},
    {name : 'arif', score: 200}
]

const bestScorer = players.reduce((bestPlayer, player)=> {
    if(bestPlayer.score > player.score){
        return bestPlayer
    }
    return player
}, players[0])

// console.log(bestScorer)

const rawApiData = [
  {
    id: "p-001",
    productName: "Quantum Laptop",
    category: "Electronics",
    price: 1200,
    rating: 4.8,
    stock: 15,
  },
  {
    id: "p-002",
    productName: "The Art of Code",
    category: "Books",
    price: 45,
    rating: 4.5,
    stock: 100,
  },
  {
    id: "p-003",
    productName: "Cyber Hoodie",
    category: "Clothing",
    price: 80,
    rating: 4.7,
    stock: 50,
  },
  {
    id: "p-004",
    productName: "4K Drone",
    category: "Electronics",
    price: 650,
    rating: 4.3,
    stock: 20,
  },
  {
    id: "p-005",
    productName: "Basic JavaScript",
    category: "Books",
    price: 25,
    rating: 3.8,
    stock: 200,
  },
  {
    id: "p-006",
    productName: "Smart Watch",
    category: "Electronics",
    price: 250,
    rating: 4.7,
    stock: 70,
  },
  {
    id: "p-007",
    productName: "Classic T-Shirt",
    category: "Clothing",
    price: 30,
    rating: 4.2,
    stock: 300,
  },
  {
    id: "p-008",
    productName: "Design Patterns",
    category: "Books",
    price: 55,
    rating: 4.9,
    stock: 80,
  },
  {
    id: "p-009",
    productName: "VR Headset",
    category: "Electronics",
    price: 400,
    rating: 4.6,
    stock: 30,
  },
  {
    id: "p-010",
    productName: "USB-C Cable",
    category: "Electronics",
    price: 15,
    rating: 4.0,
    stock: 500,
  },
  {
    id: "p-011",
    productName: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 300,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "p-012",
    productName: "Algorithms Explained",
    category: "Books",
    price: 50,
    rating: 4.5,
    stock: 60,
  },
]
const result = rawApiData.filter((item) => item.category === 'Electronics').sort((a,b)=> b.rating - a.rating).slice(0,3).map((item)=> {
  return{
    name : item.productName
  } 
})
/* Here we are filtering Electronics product with #filter method. Then we use #sort method for find best rating product. Then we use slice method to reduce size and try to take best quality product. And lastly we use map to show item name one by one in array  */

console.log(result)