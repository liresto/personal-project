const morgan = require('morgan');
const express=require('express');
const app = express();
const PORT = 3300;
const path = require('node:path');

app.use(morgan('combined'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//SITE ROUTES

app.get("/", (request, response) =>{
  // response.send("Hello, this is the home page");
  response.render('pages/home');
  // response.send("Hello, this is the home page");
  console.log("This route points to the home page");
});

app.get("/about", (request,response) =>{
  response.render('pages/about');
  console.log("This route points to the About page")
});

app.get("/login", (request,response) => {
  response.render('pages/login');
  console.log("This route points to the Login page");
});

app.get("/register", (request, response) => {
  response.render('pages/register');
  console.log("This route points to the register page");
})

//ADMIN ROUTES

app.get("/admin", (request, response) => {
  response.render('pages/admin');
  console.log("This route points to the Admin console page")
});

app.get("/admin/create", (request,response) =>{
  response.render('pages/create');
  console.log("This route points to the Create page")
});

app.get("/admin/update", (request,response) => {
  response.render('pages/update')
});

//DESIGN ROUTES

app.get("/designs", (request,response) => {
  response.render('pages/posts')
  console.log("This points to the post detail")
});

app.get("/designs/:id", (request,response) => {
  response.render('pages/post-detail')
  console.log("This points to the post detail")
});



app.listen(PORT, () => {
  console.log(`Server is listening on${PORT}`)
});