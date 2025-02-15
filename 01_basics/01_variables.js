const accountId = 144553
let accountEmail = "atul@gmail.com"
var accountPassword = "12345"
accountCity = "Faridabad"
let accountState;
// accountId = 2// not allowed 
accountEmail = "atul@gmail.com"
accountPassword = "12345"
accountCity = "Faridabad"


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
