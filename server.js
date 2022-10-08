const http = require('http');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method);

    // Set Header content type
    res.setHeader('Content-Type', 'text/html');

    // Gets the header value and displays it
    // const headers = res.getHeader('Content-Type');
    // console.log(headers);

    // Routing of the html pages
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;   //Redirects
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Reads the entire content of the file or displays an error
    fs.readFile(path, (err, data)=> {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            // res.write(data);
            res.end(data);
        }
    })

});

// Starts the server
server.listen(3000, 'localhost', ()=>{
    console.log('Listening for request on port 3000');
});





