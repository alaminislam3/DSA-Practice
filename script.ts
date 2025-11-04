import { player } from "./classes/player"

let calculation : (x: number , y: number, z:string) => number /* It is function type defination */

calculation = (a:number ,b :number, c :string )=> {
    if (c==="add"){
        return a+b
    }
    else {
        return a-b
    }
}
// console.log( calculation(5,6,"munis"))


/* This is called function signeture  */
// let userdeatils: (id : number | string, userinfo :{
//     name : string ,
//     age :number 
// }) => void /* This is also function type defination */

// userdeatils = (id : number| string, userinfo: {
//     name :string ,
//     age : number
// })=> void

/* classes  */


const masrafi = new player ('Mashrafi', 40, 'Bangladesh')
/* Access modifiers */

/* working  with Interface */

interface RectangleOption {
    width : number ,
    length : number 
}

function drawRectangle(options: RectangleOption){
      let width = options.width
      let length = options.length
}

let threeDOption = {
 width: 30 ,
    length: 40,
    height : 30
}

drawRectangle(threeDOption)