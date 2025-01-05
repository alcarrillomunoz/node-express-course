const path = require('path');

/* backslach on Windows */ 
console.log(path.sep);

const filePath = path.join('OneDrive', 'Documents', 'CTD', 'Impala', 'node-express-course', '01-node-tutorial', 'answers');
console.log(filePath); 

const base = path.basename(filePath);
console.log(base); 

const absolute = path.resolve(__dirname); 
console.log(absolute);