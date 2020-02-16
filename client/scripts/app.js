var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll(data => {
      MessagesView.renderMessage(data);
      RoomsView.renderRoom(data);
      RoomsView.render(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

// function fetch(callback) {
//   callback = callback || function() {}

//   Parse.readAll(function(data) {
//     callback(data);
//   })
// }
// var a = app.fetch = parse.redALL() = calllback(data)


// Parse.readAll(function(data) {
//     consopl
// })