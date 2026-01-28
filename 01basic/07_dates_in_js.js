let myDate  = new Date()
/*
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

*//*
console.log(typeof myDate);


//let mycreateddate = new Date(2026, 0,23)
//let mycreateddate = new Date(2026, 0,23, 5,3)
let mycreateddate = new Date("2026-01-14")
console.log(mycreateddate.toLocaleString());

*/
/*
let myTimestamps = Date.now()

console.log(myTimestamps);
let mycreateddate = new Date("2026-01-14")
console.log(mycreateddate.getTime());

*/
let myTimestamps = Date.now()
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate.getDay());

console.log(newDate.getMonth()+1);




newDate.toLocaleString('default',{weeday: "long"})