const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// Create express app
const app = express();

// Connect to mangoDB
const dbURI = "mongodb+srv://muha:BJNT18158@cluster0.kfoae37.mongodb.net/note-tuts?retryWrites=true&w=majority";
// Opens mongoose default connection to mongoDB
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}) // Second argument is an options object
    .then((result)=>app.listen(3000))
    .catch((error)=>console.log(error));

// Register view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); // Used for accpeting form data
app.use(morgan('dev'));

// Routings(routes)
app.get('/', (request, response)=>{
    response.redirect('/blogs');
    // response.send('<h1>Home Page</h1>');
    // response.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (request, response)=>{
    response.render('about', { title: 'About' });
})

// Blog routes using a scope
app.use('/blogs', blogRoutes); 

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