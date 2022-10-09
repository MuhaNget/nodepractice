const express = require('express');
const morgan = require('morgan');

// Create express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Listen for request
app.listen(3000);

// Middleware
app.use(express.static('public'));
app.use(morgan('dev'));

// Routings
app.get('/', (request, response)=>{
    // response.send('<h1>Home Page</h1>');
    // response.sendFile('./views/index.html', { root: __dirname });
    const blogs = [
        {title: 'Muha finds eggs', snippet: 'Lorem ipsum dolor sit amet.'},
        {title: 'Ann finds stars', snippet: 'Lorem ipsum dolor sit amet.'},
        {title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet.'}
    ];
    response.render('index', { title: 'Home', blogs });
})

app.get('/about', (request, response)=>{
    response.render('about', { title: 'About' });
})

app.get('/blogs/create', (request, response)=>{
    response.render('create', { title: 'Create a new Blog' });
})

// Redirecting
app.get('/about-me', (request, response)=>{
    response.redirect('/about');
})

// 404 Page
// Note: This response is only going to be sent if their are no matching urls
//       in the above routings. It must also always be at the bottom of the routing list.
app.use((request, response)=>{
    response.status(404).render('404', { title: '404' });
})