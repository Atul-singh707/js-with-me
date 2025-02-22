// Primitive datatype 

// 7 types : String, Numbers, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.34

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); 

// const bigNumbers = 68736487617264812634n

// Reference(non-primitive) datatype

// Array, Objects, functions 
// const heroes [ "shaktiman" , "nagraj" , "doga"];
 let myObj = {
        name: "Atul",
        age: "21",
   }

const myFunction = function () {
    console.log("Hello world");
    
}

//********************************* */

// Stack(Primitive), Heap(non-primitive) 
let myYoutubeName = "Atul"

let anothername = myYoutubeName

console.log(anothername);

let userOne = {
    email: "atul@122gmail.com",
    upi: "user@jbl"
}

let userTwo = userOne

userTwo.email = "atul@google.com"

console.log(userOne.email);
console.log(userTwo.email);

