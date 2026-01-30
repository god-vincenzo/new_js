// const tinuser = new Object()  singelton

const tinuser = {}



tinuser.id = "123av"
tinuser.name = "sam"

//console.log(tinuser);


const reguser = {
    email : "st24@gmail.com",
    fullname: {
        userfullname: {
            fname : "sameer",
            lname : "thakur"
        }
    }
}

//console.log(reguser.fullname.userfullname.fname);


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)  // target = {} and source = obj1 , obj2


const obj3 = {...obj1,...obj2}

//console.log(obj3);

const users = [
    {
        id : 1,
        name : "sam"
    },
    {
        id : 1,
        name : "sam"
    },
    {
        id : 1,
        name : "sam"
    }
]

/*
console.log(users[1].name)

console.log(tinuser);

console.log(Object.keys(tinuser));
console.log(Object.values(tinuser));
console.log(Object.entries(tinuser));
console.log(tinuser.hasOwnProperty('isLogged'));


*/

const course = {

    coursename : "js",
    price : "999",
    courseIns : "sam"
}

// course.courseIns
// destructuring objects
const {courseIns} = course
console.log(courseIns);


const {coursename : name} = course
console.log(name);

 
//json
{
    "name": "sameer thakur",
 "cname"  :"js",
    "price" : "999"
}


[
    {},
    {},
    {},
]