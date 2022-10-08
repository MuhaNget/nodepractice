const express = require('express');

// Create an express app
const app = express();

// Listens for request
app.listen(2000);

// Routing and Request type
app.get('/', (request, response)=>{
    // response.send('Software Monster');
    response.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (request, response)=>{
    response.sendFile('./views/about.html', { root: __dirname });
})

// Redirecting
app.get('/about-me', (request, response)=>{
    response.redirect('/about');
})

// 404 Page
app.use((request, response)=>{
    response.status(404).sendFile('./views/404.html', { root: __dirname });
})