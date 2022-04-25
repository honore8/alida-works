const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const taskRoutes = require('./routes/TaskRoute');
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



app.use(morgan('dev'))

//static files
app.use(express.static('assets'))
app.use(express.urlencoded({ urlencoded: true }))
//routing
app.use('/', taskRoutes);

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found' })

    // res.status(404).sendFile('./views/404.html', { root: __dirname })

})