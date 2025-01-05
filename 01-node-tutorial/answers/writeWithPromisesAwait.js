const { writeFile, readFile } = require("fs").promises;

const writer = async() => {
    try {
        await writeFile('./temp.txt', 'First line...\n');
        await writeFile('./temp.txt', 'Second line...\n', { flag: 'a' });
        await writeFile('./temp.txt', 'Third line.', { flag: 'a' });
    } catch (error) {
        console.log(error); 
    }
}

//writer(); 

const reader = async() => {
    try {
        const read = await readFile('./temp.txt', 'utf8');
        console.log(read); 
    } catch (error) {
        console.log(error); 
    }
}

//reader(); 

const readWrite = async() => {
    try {
        await writer();
        await reader(); 
    } catch (error) {
        console.log(error); 
    }
}

readWrite(); 