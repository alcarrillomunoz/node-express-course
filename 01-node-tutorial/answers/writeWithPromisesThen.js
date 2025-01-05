const { writeFile, readFile } = require("fs").promises;

let data;

console.log('First line write');
writeFile('./temp.txt', 'First line then...\n')
.then(() => {
    console.log('Second line write');
    return writeFile('./temp.txt', 'Second line then...\n', {flag: 'a'})
})
.then (() => {
    console.log('Third line write');
    return writeFile('./temp.txt', 'Third line then...\n', {flag: 'a'})
})
.then ( /* async */ () => {
    console.log('Data being read...');
    data = /* await */ readFile('./temp.txt', 'utf8') 
})
.then(() => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})