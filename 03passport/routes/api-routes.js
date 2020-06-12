// Requirie passport
var passport = require("../config/passport");

module.exports = function(app) {
 
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });


  app.post("/api/signup", function(req, res) {
   
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
  
      res.json({});
    } else {
     
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
