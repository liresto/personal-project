require('dotenv').config();
const morgan = require('morgan');
const express=require('express');
const session = require('express-session');
const app = express();

const path = require('node:path');
const passport = require('passport')
const methodOverride = require('method-override');
const indexRoutes = require('./routes/index-routes')
require('./config/connection');
const PORT = 3400;

app.use(morgan('combined'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use('/', indexRoutes)
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())



app.listen(PORT, () => {
  console.log(`Server is listening on${PORT}`)
});