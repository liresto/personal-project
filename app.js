require('dotenv').config();
//allows app.js to read the .env file allows us to access environment variables
const express = require("express");
const morgan = require('morgan');
const path = require('node:path');
const session = require('express-session');
const passport = require('passport')

const methodOverride = require('method-override');
// const routes = require('./routes/index')
const app = express();
// const PORT = 3000;
const PORT = process.env.PORT || 3400;
const indexRoutes = require('./routes/index-routes')

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/styles')));
app.use(express.static(path.join(__dirname, 'public/scripts')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
// app.use(morgan('dev'));
// app.use(routes);
//aded this do I need it or is it redundant ^

app.use(morgan('combined'));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());

// const mongoose = require('mongoose');

// const Comic = require('./models/comic-model');
//how should I use this?

// const comicSample = new comic({
//     title: "Fun Home: A Family Tragicomic",
//     author: "Alison Bechdel",
//     publisher: "Mariner Books",
//     genre: "memoir",
//     pages: 232,
//     rating: 5,
//     synopsis: "In this graphic memoir, Alison Bechdel charts her fraught relationship with her late father.\nDistant and exacting, Bruce Bechdel was an English teacher and director of the town funeral home, which Alison and her family referred to as the Fun Home. It was not until college that Alison, who had recently come out as a lesbian, discovered that her father was also gay. A few weeks after this revelation, he was dead, leaving a legacy of mystery for his daughter to resolve.",
//     image: "fun-home.jpg"
// });

// comicSample.save();
app.use('/', indexRoutes)
require('./config/connection');

app.listen(PORT, () => {
    console.log(`Server is listening on${PORT}`)
});




// require('dotenv').config();
// const morgan = require('morgan');
// const express=require('express');
// const session = require('express-session');
// const app = express(); 


// const path = require('node:path');
// const passport = require('passport')
// const methodOverride = require('method-override');
// const indexRoutes = require('./routes/index-routes')
// require('./config/connection');
// const PORT = 3400;

// app.use(morgan('combined'));
// app.set('view engine', 'ejs');
// app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json())
// app.use('/', indexRoutes)
// app.use(session({
//   secret: process.env.SECRET_KEY,
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize());
// app.use(passport.session());




// app.listen(PORT, () => {
//   console.log(`Server is listening on${PORT}`)
// });