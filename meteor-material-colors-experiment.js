if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter"
    , 0);

  Template.hello.helpers({
    colors: [
      "red"
      , "pink"
      , "purple"
      , "deep-purple"
      , "indigo"
      , "blue"
      , "light-blue"
      , "cyan"
      , "teal"
      , "green"
      , "light-green"
      , "lime"
      , "yellow"
      , "amber"
      , "orange"
      , "deep-orange"
      , "brown"
      , "grey"
      , "blue-grey"
    ]
    , weights: _.range(1, 10)
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
