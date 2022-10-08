const fs = require('fs');
const http = require('http');


const server = http.createServer((request, response)=>{

    // Set the headers
    response.setHeader('Content-Type', 'text/html');

    // Routing
    let path = './templates/';
    switch(request.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    // Reading the data or displaying an error
    fs.readFile(path, (error, data)=>{
        if(error){
            console.log(error);
            response.end();
        }
        else {
            response.write(data);
            response.end();
        }
    });
});

// Starts the server
server.listen(3000, 'localhost', ()=>{
    console.log('Listening for request on port 3000');
})