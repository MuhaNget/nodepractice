const express = require('express');
const morgan = require('morgan');

// Creates an express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Listen to request
app.listen(5000);

// Middleware
app.use(morgan('dev'));
app.use(express.static('public'));

// Routing and Response
app.get('/', (request, response)=>{
    // response.send('Home Page');
    // response.sendFile('../views/index.html', { root: __dirname });
    const blogs = [
        { title: 'Muha is a programmer', snippet: 'He really knows how to code'},
        { title: 'Ann is a labor office', snippet: 'He respects his work very well'},
        { title: 'Ousman is an android developer', snippet: 'He knows a lot about android'}
    ]
    response.render('index', { title: 'Home', blogs});
})

app.get('/about', (request, response)=>{
    // response.sendFile('../views/about.html', { root: __dirname });
    response.render('about', { title: 'About'});
})

app.get('/blogs/create', (request, response)=>{
    response.render('create', { title: 'Create blogs'});
})

// Redirecting
app.get('/about-me', (request, response)=>{
    response.redirect('/about');
})

// 404 Page
app.use((request, response)=>{
    // response.status(404).sendFile('../views/404.html', { root: __dirname });
    response.status(404).render('404', { title: '404'});
})