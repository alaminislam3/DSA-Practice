// function greet (name : string): string{
// return `Hello, ${name}`;
// }

// const message :string=greet("world");
// console.log(message);

// function greet (name :string): string{
// return `Hello ${name}`
// }

// console.log(greet("sakib"))

// function total (a:number ,b: number): number{
// return a+ b;
// }
// console.log(total(5,3));

// const name2 :string []= []
// name.push("sakib")
// console.log(name);

// const numbers = [1,2,3,4]
// numbers.push(5)

// let head :number = numbers[0]
// console.log(head);

//  /* exampleone  */
// function greet (name: string){
// return `Hello ${name}`
// }
// console.log(greet("Mim"));
//

/* example two */
// let person :{name :string , age: number, position: string} = {
// name :" Alamin",
// age : 27 ,
// position :"web developer"
// }

/* example three  */
// function aboutMe (name : string, age?: number ): string {
// return age ? `${name} is ${age} years
//  old` : `${name} is not provide his ${age}`
// }
// console.log(aboutMe("Alamin"));
/* 
function calculatePrice (product:string,price:number,discount?:number):string{
  return discount? ` This ${product} ${price}taka is good enough` : `This ${product} has no discount`
}

console.log(calculatePrice("Iphone",1500,200)); */

// function getfirst<T>(arr: T[]): T {
//   return arr[0];
// }
// console.log(getfirst(["mango", "apple", "jackfrout"]));

/* interface User {
  name : string ;
  email : string ;
  isAdmin : boolean;
}

function printUser (user : User): void{
 console.log("name:", user.name,
   "email:", user.email,
   "isAdmin ?", user.isAdmin
 );
}

const user1 : User = {
  name : "Tumpa ",
  email : "tumpa@gmail.com",
  isAdmin: true 
}
printUser(user1) */

/* interface Product {
   id : number ;
   name : string ;
   price :number;
   inStock : boolean
}

function printProduct (product : Product): void {
    console.log("id:", product.id ,
      "name:" , product.name,
      "price", product.price,
      "inStock", product.inStock
    );
}
const Iphone : Product ={
   id : 101,
   name : "Iphone 17 pro",
   price: 1500,
   inStock: true
}
const Xioami :Product ={
  id :102,
  name : "Xioami",
  price : 1000,
  inStock : true
}

printProduct(Iphone)

printProduct(Xioami) */

type stringOrNumber = string | number 
type userType = {name : string ; age : number}


const userDetails = (
  id : stringOrNumber,
  user : userType
) => {
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age} `);
}

const sayHello = (user: {name : string ; age :number})=> {
  console.log(`Hello ${user.age>50?"sir" : "Mir"}${user.name}`);
}