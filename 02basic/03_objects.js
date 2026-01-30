// singleton       -object made from constructor
// object.create


// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Sameer",
"full name": "sam Thakur",
[mySym] : "mykey", // []
    age : 18,
    loca: "hp",
    email : "st2410th@gmail.com",
    isLoggedin : false,
    lastlogindays: ["Mon","Sat"]
}
/*
console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"]
);
console.log(JsUser[mySym]);
*/

JsUser.email ="cvbnm"
//Object.freeze(JsUser)
JsUser.email = "mnbvc"
console.log(JsUser);

JsUser.greetings = function() {
    console.log("hello1 ");
    
}

console.log(JsUser.greetings());

JsUser.greetings2 = function() {
    console.log(`hllo, ${this.name}`);
    
}
console.log(JsUser.greetings2());





