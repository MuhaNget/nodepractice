const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// Create an express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Create Connection
const dbURI = "mongodb+srv://muha:BJNT18158@cluster0.kfoae37.mongodb.net/note-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> app.listen(2000))
    .catch((error)=> {console.log(error);})

// Middleware
app.use(express.static('public'));
app.use(morgan('dev'));

// Test Programs
// Adds a blog
// app.get('/add-blog', (request, response)=>{
//     const blog = new Blog({
//         title: 'Another new Blog 2',
//         snippet: 'Describes The Gambia',
//         body: 'Gives a history of The Gambia'
//     })
// 
    // Saves the data
//     blog.save()
//         .then((result)=>{
//             response.send(result)
//         })
//         .then((error)=>{
//             console.log(error);
//         });
// });

// Gets all the blogs
// app.get('/all-blogs', (request, response)=>{
//     Blog.find()
//         .then((result)=>{
//             response.send(result)
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
// });

// Gets a blog by id
// app.get('/single-blog', (request, response)=>{
//     Blog.findById("63454f0cd101b746266b3a0a")
//         .then((result)=>{
//             response.send(result)
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
// });

// Routing and Request type
app.get('/', (request, response)=>{
    response.redirect('/blogs');
})

app.get('/about', (request, response)=>{
    response.render('about', {title: 'About'});
})

// Blogs route
app.get('/blogs', (request, response)=>{
    Blog.find().sort({createdAt: -1})
        .then((result)=>{
            response.render('index', { title: 'All blogs', blogs: result});
        })
        .catch((error)=>{
            console.log(error);
        })
})

app.get('/blogs/create', (request, response)=>{
    response.render('create', {title: 'Create a new blog'});
})

// Redirecting
app.get('/about-me', (request, response)=>{
    response.redirect('/about');
})

// 404 Page
app.use((request, response)=>{
    response.status(404).render('404', {title: '404'});
})