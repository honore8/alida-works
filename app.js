const express = require('express')
const fs = require('fs');
const morgan = require('morgan')
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
const session = require('express-session');
//express app
const app = express()

//connect to db
const dbURI = 'mongodb+srv://user:Kb69sY9vu463jtDz@cluster0.aer5d.mongodb.net/express_db?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected'))
    .catch((err) => console.log(err))
//register views engine
app.set('view engine', 'ejs')
//listen
app.use(session({
    secret: 'expressJs',
    saveUninitialized: true,
    resave: true
}));

app.listen(3000)


// Kb69sY9vu463jtDz
//middleware
// app.use((req, res, next) => {
//     console.log('New request made: ');
//     console.log('Host: ', req.hostname);
//     console.log('Path: ', req.path);
//     console.log('Method: ', req.method);
//     next()
// })
// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next()
// })


// app.get('/new-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'a',
//         snippet: 'a',
//         body: 'a'
//     })
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

app.get('/all-blogs', (req, res) => {
    const filter = req.query.filter
    const search = req.query.search
    let order = -1
    let mQuery;
    filter == 'oldest' ? order = 1 : ''
    search ? mQuery = Blog.find({ $or: [{ title: { $regex: search, $options: 'i' } }, { body: { $regex: search, $options: 'i' } }, { snippet: { $regex: search, $options: 'i' } }] }) : mQuery = Blog.find()
    mQuery.sort({ createdAt: order })
        .then((result) => {
            const msg = req.session.mgs
            delete req.session.mgs;
            res.render('blog', { title: 'Blog', activeB: true, blogs: result, msg, search })
        })
        .catch((err) => {
            console.log(err);
        })

})

app.get('/single-blog', (req, res) => {
    Blog.findById()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })

})

app.use(morgan('dev'))

//static files
app.use(express.static('assets'))
app.use(express.urlencoded({ urlencoded: true }))
//routing
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', activeA: true })
})

app.get('/blog', (req, res) => {
    //res.send('<p>Home page</p>')
    const blogs = JSON.parse(fs.readFileSync('./assets/files/blogs.json', 'utf8'))
    res.render('blog', { title: 'Blog', activeB: true, blogs })

})

app.get('/about', (req, res) => {
    //res.send('<p>Home page</p>')
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('about', { title: 'About', activeC: true })

})

app.get('/new-blog', (req, res) => {
    // console.log(res.body);
    //res.send('<p>Home page</p>')
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('new-blog', { title: 'New blog', activeD: true, errors: {}, datas: {}, success: '' })

})

app.post('/new-blog', (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            const success = 'You have added blog successfully.';
            res.render('new-blog', { title: 'About', activeC: true, errors: {}, datas: {}, success: success })

        })
        .catch((err) => {
            if (err.name === "ValidationError") {
                let errors = {};

                Object.keys(err.errors).forEach((key) => {
                    errors[key] = err.errors[key].message;
                });
                return res.render('new-blog', { title: 'About', activeC: true, errors: errors, datas: req.body, success: '' })

                // return res.redirect('/new-blog')
                // return res.status(400).send(errors);
            }
            return res.render('new-blog', { title: 'About', activeC: true, errors: {}, datas: req.body, success: '' })


        })
    // console.log(req.body);

})

app.get('/blog/:slug', (req, res) => {
    const slug = req.params.slug
    Blog.findOne({ 'slug': slug })
        .then((result) => {
            // res.send(result)
            res.render('details-blog', { title: result.title, blog: result })
        })
        .catch((err) => {
            return res.redirect('/all-blogs')
            console.log(err);
        })
})

app.delete('/blog/:id', (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result) => {
            var sessionDatas = req.session;
            sessionDatas.mgs = 'You successfully deleted blog.';
            res.json({ redirect: '/all-blogs' })
            // res.render('details-blog', { title: result.title, blog: result })
        })
        .catch((err) => {
            console.log(err);
        })
})

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about', { title: 'about', activeE: true })
})
//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found' })

    // res.status(404).sendFile('./views/404.html', { root: __dirname })

})