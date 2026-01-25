const name = "Sameer"
const repoCount = 10


//console.log(name + repoCount + "Value");


console.log(`hllo my name is ${name} myrepo count is ${repoCount}`);

//use backticks

const gameName = new String('Thakur')

console.log(gameName[0]);

console.log(gameName.__proto__);



console.log(gameName.length);

console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));

console.log(gameName.indexOf('T'));

const newstr = gameName.substring(0,4)
console.log(newstr);

const anotherstr = gameName.slice(-8,5);
console.log(anotherstr);


const newstr1 = "    sameer   "
console.log(newstr1);
console.log(newstr1.trim());
// trim remove spaces


const url = "http://sam.com/thakur"
console.log(url.replace('thakur','hlo'));

console.log(url.includes('thakur'));

const abc = 'sameer-thakur'
console.log(abc.split("a") );
