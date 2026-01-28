const h1 = ["a","b","c","d","e"]

const h2 = ["f","g","h","i","j"]

// h1.push(h2)
/*
console.log(h1);
console.log(h1[5][1]);
*/
/*
const all = h1.concat(h2)
console.log(all);
*/

// spread
/*
const all = [...h1,...h2]
console.log(all);
*/
/*
[
  'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h',
  'i', 'j'
] */
//**************************** */
/*
const anArr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const realArr = anArr.flat(Infinity);  //depth can be  1,2.. , infinity
console.log(realArr)
/* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/


//*************************************// */



// isArray , from , of
console.log(Array.isArray("Sameer"));

console.log(Array.from("Sameer"));

console.log(Array.from({name: "thakur"}));


let sc1 =100
let sc2 = 200
let sc3 =300

console.log(Array.of(sc1,sc2,sc3));
