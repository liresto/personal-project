const data = require('../data/data')
const passport = require('passport');
const User = require('../models/user-model');
const Post = require('../models/post-model');

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

login_post: async function (request, response) {
    const { username, password } = request.body;
  
    
      const user = new User({
        username:username,
        password: password,
      });
  
      request.login(user, (error) => {
        if(error){
            console.log(error)
        } else{    
      passport.authenticate('local')(request, response, () => {
        response.redirect('/admin');
      });
    }
    });
  },

register: (request,response) => {
    response.render('pages/register', {
    });
},

register_post: async function (request, response) {
    try {
      const { username, password } = request.body;
  
      const user = await User.register({ username }, password);
  
      passport.authenticate('local', {session:false})(request, response, () => {
        response.redirect('/');
      });
    } catch (error) {
      console.log(error);
      response.redirect('/register');
    }
  },

  logout: ('/logout', function(request, response, next) {
    request.logout(function(err) {
      if (err) { return next(err); }
      response.redirect('/');
    });
  }),

// logout:(request,response) => {
//     request.logout();
//     response.redirect('/');
// },

google_get: passport.authenticate('google', { scope: ['openid',
    'profile', 'email'], session:true }),

google_redirect_get: [
        passport.authenticate('google', {failureRedirect: '/login', session:true}),
        //changed back to true
        function(request, response){
            response.redirect('/admin');
        }
    ]
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
