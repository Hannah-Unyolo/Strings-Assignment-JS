// Characters
let word = 'extravaganza';
console.log({character: word[8]});
console.log({character: word[9]});
console.log({character: word[10]});
console.log({character: word[11]});

// Insert String
const food ="The quick fox jumped over the lazy dog";
let h = "eat"
let concatenate = `The quick fox jumped ${h} over the lazy dog`;
console.log({concatenate});

// Count Strings
const story = "The quick brown fox jumps over the lazy dog";
console.log((story.match(/the/)).length);
console.log((story.match(/brown/)).length);

//Find words from the string
const string1 = "The puipls are reading in the library"
const substring1 = "are"
console.log(string1.includes(substring1))
const string2 = "The child was sitting on the table before it felt"
const substring2 = "sitting"
console.log(string2.includes(substring2))

//Converting strings into a specified format
let a = "wonderful";
const upper = a.toUpperCase();
console.log({upper});
let b = "amazing";
const lower = b.toLowerCase();
console.log({lower});
let c = "UndERneath";
const lower2 = c.toLowerCase();
console.log({lower2})
let d = "A wonderful world"
function titlecase(str){
    return str.toLowerCase().replace(/\b\w/g,s=>s.toUpperCase())
}
console.log(titlecase('A Wonderful world'))




