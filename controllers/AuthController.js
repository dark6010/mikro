var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  console.log(mongoose.connection.readyState)
  res.render('index', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.render('register');
};

// Post registration
userController.doRegister = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  if(mongoose.connection.readyState==1){
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  }else{
    res.redirect('/desconectado')
  }
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};
userController.verificar= function(req, res){
  const { exec } = require('child_process');
  exec('setter.bat', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }else{
      //console.log(stdout.toString().split('\n'));
      exec('interfacecon.bat', (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }else{
          console.log("**"+stdout.toString().trim()+"**")
        }
      })
    }
  });
}
userController.desconectado= function(req, res){
  res.render('desconectado', {user: req.user})
}

module.exports = userController;
