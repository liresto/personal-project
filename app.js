const morgan = require('morgan');
const express=require('express');
const session = require('express-session');
const app = express();
const PORT = 3400;
const path = require('node:path');

app.use(morgan('combined'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index-routes')

app.use('/', indexRoutes)

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

app.listen(PORT, () => {
  console.log(`Server is listening on${PORT}`)
});