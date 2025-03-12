
function sayMyName (){
    console.log("A");
    console.log("t");
    console.log("u");
    console.log("l");
}
// sayMyName()

// function addTwoNumbers (number1, number2){
//          console.log(number1 + number2);
         
// }
// addTwoNumbers(3, 6)

function addTwoNumbers (number1, number2){
    let result = number1 + number2
    return result
    
}
const result = addTwoNumbers(3, 6)
// console.log("result:",  result);


function loginUserMassage(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMassage("Atul"));
// console.log(loginUserMassage());

function calculatCartPrice(...num1){
    return num1 
}
console.log(calculatCartPrice(200, 300, 400));


