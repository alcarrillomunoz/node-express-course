const { readFile, writeFile, write } = require('fs'); 

console.log("beginning...");

writeFile('./temporary/fileB.txt', 'Line 1\n', (err, result) => {
    console.log("At line 1"); 
    if (err) {
        console.log("This error happened: ", err);
    }
    else {
        writeFile('./temporary/fileB.txt', 'Line 2\n', {flag: 'a'}, (err, result) => {
            console.log("At line 2");
            if(err) {
                console.log("This error happened: ", err);
            }
            else {
                writeFile('./temporary/fileB.txt', 'Line 3', {flag: 'a'}, (err, result) => {
                    console.log("At line 3");
                    if(err) {
                        console.log("This error happened: ", err);
                    }
                    else {
                        console.log ("ending...");
                    }
                })
            }
        })
    }
})

console.log("Starting next task...");