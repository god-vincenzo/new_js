const accId = 144553
let accountEmail = "st2410thakur@gmail"
var accountPass = "1234"
accountCity = "Jaipur"
let accState;

//  accId = 2 not allowed



accountEmail = "2345"
accountPass = "6543"
accountCity = "hp"
console.log(accId);

/*prefer not to use var 
because of issue in block scope and functional scope */

console.table([accId, accountEmail,accountPass, accountCity, accState])
