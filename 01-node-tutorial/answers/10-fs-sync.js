const { readFileSync, writeFileSync } = require('fs');

const first = "First I'd like to say...";
const second = "Secondly, I believe...";
const third = "Lastly...";

writeFileSync('./temporary/fileA.txt', `${first} and ${second} then ${third}`, {flag: 'a'});

const text = readFileSync('./temporary/fileA.txt', 'utf8');
console.log(text); 