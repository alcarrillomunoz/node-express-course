const express = require('express');
require('dotenv').config();

const app = express(); 

const mainRouter = require('./routes/main');

//middleware
app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1', mainRouter);

const port = process.env.port || 3000; 

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    }
    catch (error) {
        console.log(error); 
    }
}

start();