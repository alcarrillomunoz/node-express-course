const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
    response.end('Welcome to our homepage');
    }
    if (request.url === '/about') {
        response.end('This is the about page')
    }
    response.end(`<h1>Oops!</h1> 
        <p>We can't seem to find the page you are lookinf for.</p>
        <a href='/'>Back home</a>`)
})

server.listen(3000); 