const data = require('../data/data')

module.exports = {



index: (request, response) => {
    response.render('pages/home', {
        // book: data,
    });
    // response.send("Hello, this is the home page");  
},

about: (request,response) => {
    response.render('pages/about', {
    });
},

login: (request,response) => {
    response.render('pages/login', {
    });
},

register: (request,response) => {
    response.render('pages/register', {
    });
},


}



// app.get("/about", (request,response) =>{
//   response.render('pages/about');
//   console.log("This route points to the About page")
// });

// app.get("/login", (request,response) => {
//   response.render('pages/login');
//   console.log("This route points to the Login page");
// });

// app.get("/register", (request, response) => {
//   response.render('pages/register');
//   console.log("This route points to the register page");
// })
