const fs = require('fs');
const http = require('http');

// Create a server
const servlet = http.createServer((request, response) =>{

    // Set the header
    response.setHeader('Content-Type', 'text/html');

    // Gets the header value and displays it
    // Note: The response header names are case-insensitive
    const headers = response.getHeader('Content-Type');
    console.log(headers);

    // Routing
    let path = '../views/';
    switch(request.url){
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-me':
            response.statusCode = 301; // Redirect
            response.setHeader('Location', '/about');
            response.end();
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }

    // Reads the entire content of the file or displays an error
    fs.readFile(path, (error, data)=>{
        if(error){
            console.log(error);
            response.end();
        }
        else{
            response.write(data);
            response.end();
        }
    })

});

// Starts the server
servlet.listen('2000', 'localhost', ()=>{
    console.log('Listening for request on port 2000');
})