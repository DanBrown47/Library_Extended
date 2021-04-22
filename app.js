// Imports
const express = require('express');
const app = new express();
const dotenv = require('dotenv').config()

// Port specs
const port = process.env.PORT || 4000;



const nav = [{ link: '/books', name: 'Books' },
    { link: '/authors', name: 'Authors' },
    { link: '/login', name: 'Login' },
    { link: '/signup', name: 'Sign up' },
    { link: '/admin', name: 'Admin' },
    { link: '/admins' },
    { link: '/deletebooks' },
    { link: '/deleteauthors' }
];


const booksRouter = require('./src/routes/bookRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);
app.use('/admin', adminRouter);

app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library'
    });
});


const authorsRouter = require('./src/routes/authorRoutes')(nav)
const adminsRouter = require('./src/routes/adminsRoutes')(nav)

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/authors', authorsRouter);
app.use('/admins', adminsRouter);

app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library'
    });
});


const signupRouter = require('./src/routes/signupRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/signup', signupRouter);

app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library'
    });
});

const loginRouter = require('./src/routes/loginRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/login', loginRouter);

app.get('/', function(req, res) {
    res.render("index", {
        // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title: 'Library'
    });
});



const deletebooksRouter = require('./src/routes/deletebookRoutes')(nav)
const deleteadminRouter = require('./src/routes/deleteadminRoutes')(nav)

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/deletebook', deletebooksRouter);
app.use('/deletebooks', deleteadminRouter);

app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library'
    });
});


const deleteauthorsRouter = require('./src/routes/deleteauthorRoutes')(nav)
const deleteadminsRouter = require('./src/routes/deleteadminsRoutes')(nav)

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/deleteauthor', deleteauthorsRouter);
app.use('/deleteauthors', deleteadminsRouter);

app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library'
    });
});


app.listen(port, () => { console.log("[+] Server Ready at" + port) });