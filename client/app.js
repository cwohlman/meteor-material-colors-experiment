App.subs = {
  userData: Meteor.subscribe('current_user_data')
};

// App admin code like Meteor.startup or 
// Deps.autorun will stay in this file
Deps.autorun(function() {
  
});

App.login = function (email, password, cb) {

  onLogin = function (err) {
    cb && cb(err);
  };

  Meteor.loginWithPassword(email, password, onLogin);
};


App.logout = function (cb) {
  var onLogout = function (err) {
    if (cb){
      cb(err);
    }else{
      Router.go('home');
    }
  };

  Meteor.logout(onLogout);
};

//Global Helpers are also in here!
Helpers = {};

_.each(Helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper)
});