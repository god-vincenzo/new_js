// # Primitive 


// 7 types : String, Number, Boolean,Null, undefined, Symbol, BigInt

const score =100
const scoreValue  =23.34
const isLoggedIn =false
const temp =null
let userEmail; //undefined

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id===id2);


const bigNumber = 223456789322323n
// Reference (Non primitive)

//Array, Objects , Functions

const heros = ["shatiman", "nagraj", "joro"];

let obj= {
    name: "sameer",
    age: 22,
}

const myfunc =function() {
    console.log("Hello world");
    
}

console.log(typeof bigNumber);
console.log(typeof temp);
console.log(typeof myfunc);