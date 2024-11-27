const express = require('express');
//const { products, people } = require('./data');
const peopleRouter = require('./routes/people');

const app = express(); 

/* ------------- week 3 assignment ------------- */
// app.use(express.static('./public'));

// /* example from video 
// app.get('/', (req, res) => {
//     console.log('user hit the resource');
//     res.send('Home Page');
// })
// */

// /* example 2 from video, links homepage to products page using href 
// app.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
// })
// */

// app.get('/api/v1/test', (req, res) => {
//     res.json({message: 'It worked!'});
// })

// app.get('/api/v1/products', (req, res) => {
//     res.json({products});
// })

// /* example from video, retrieving only certain values from products 
// app.get('/api/prducts/', (req, res) => {
//     const newProducts = products.map((product) => {
//         const { id, name, image } = product;
//         return { id, name, image };
//     })
//     res.json(newProducts); 
// })
// */

// app.get('/api/v1/products/:productID', (req, res) => {
//     //res.json(req.params);
//     console.log(req.params); 
//     /* parseInt needed becuase query params are always passed as strings, so need to convert to int */
//     const idToFind = parseInt(req.params.productID);
//     console.log(idToFind);
//     const product = products.find((p) => p.id === idToFind);
//     if (!product) {
//         res.status(404).send('That product was not found.');    
//     }
//     console.log(product); 
//     res.json(product);
// })

// app.get('/api/v1/query', (req, res) => {
//     //console.log(req.query); 
//     const { search, limit } = req.query;
//     let sortedProducts = [...products];
//     /*
//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search);
//         })
//     }
//         */
//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, parseInt(limit))
//     }
//     /*
//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.desc.includes(search); 
//         })
//     }
//     */
//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.price < parseInt(search);
//         })
//     }
//     if (sortedProducts.length < 1 ){
//         return res.status(200).send('No products match your search');
//     }
//     res.status(200).json(sortedProducts); 
// })

/* ------------- week 4 assignment ------------- */

// using video frontend example 
// app.use(express.static('./methods-public'));

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log(method, url, time.toLocaleTimeString()); 
    //res.send('Test');     -----> will terminate cycle here
    next();     // passes to next middleware 
}

app.use(logger);   

app.get('/', (req, res) => {
    res.send('Home');
})
app.get('/about', (req, res) => {
    res.send('About');
})

//parses form data 
app.use(express.urlencoded({ extended: false }));
//parses json 
app.use(express.json()); 
//must be after parsiong of body
app.use('/api/v1/people', peopleRouter); 

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});

console.log('Express Tutorial')
