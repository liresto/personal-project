const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose')
const{Schema} = mongoose;


const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongooseFindOrCreate = require('mongoose-findorcreate');


const userSchema = new Schema({
    username: {
        type:String,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(mongooseFindOrCreate);

const User = mongoose.model('User', userSchema)

passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserealizeUser(User.deserializeUser());

passport.serializeUser(function(user,cb) {
    process.nextTick(function(){
        cb(null, { id:user.id, username: user.username, name: user.displayName});
    });
});

passport.deserializeUser(function(user,cb){
    process.nextTick(function(){
        return cb(null, user);
    });
});

// var GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/admin"
//   },
  
// ));

// function(accessToken, refreshToken, email, cb) {
//     User.findOrCreate({ googleId: email.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    // process.env. instead of GOOGLE
    callbackURL: "http://localhost:3400/auth/google/posts"
  
    // put in place of this --> "http://www.example.com/auth/google/callback"
  },
  // change profile to email
  function(accessToken, refreshToken, email, cb) {
    User.findOrCreate({ googleId: email.id }, function (err, user) {
      return cb(err, user);
    });
  }
  ));
  

module.exports = User;