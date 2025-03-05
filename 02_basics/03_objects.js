//singleton

//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Atul",
    "full Name": "Atul Singh",
    [mySym]: "mykey1",
    age: 21,
    location: "faridabad",
    email: "atul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser[mySym]);


jsUser.email = "atul@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "atul@microsoft.com"
// console.log(jsUser);


jsUser.greetings = function(){
    console.log("hello JS user");
    
}
jsUser.greetingsTwo = function(){
    console.log(`hello JS user, ${this.name}`);
    
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());

