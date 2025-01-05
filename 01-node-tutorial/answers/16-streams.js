const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', {highWaterMark: 10000, encoding: 'utf8'});

let counter = 0; 

stream.on('data', (result) => {         /* listening for data event */ 
    counter+=1; 
    console.log(result); 
})
stream.on('end', () => {
    console.log('Counter: ', counter);
})
stream.on('error', (err) => {
    console.log(err); 
})
