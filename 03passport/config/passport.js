const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


passport.use(new LocalStrategy(

  function(email, password, done) {
    User.findOne({
       email: email }, function (err, user) {
      if (err) { 
        return done(err); 
      }
      if (!user) { 
        return done(null, false); 
      }
      if (!user.verifyPassword(password)) { 
        return done(null, false); 
      }
      return done(null, user);
    });
  }
));


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


module.exports = passport;
