const express = require('express');

// Creates an express app
const app = express();

// Listen to request
app.listen(5000);

// Routing and Response
app.get('/', (request, response)=>{
    // response.send('Home Page');
    response.sendFile('../views/index.html', { root: __dirname });
})

app.get('/about', (request, response)=>{
    response.sendFile('../views/about.html', { root: __dirname });
})

// Redirecting
app.get('/about-me', (request, response)=>{
    response.redirect('/about');
})

// 404 Page
app.use((request, response)=>{
    response.status(404).sendFile('../views/404.html', { root: __dirname });
})