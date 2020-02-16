var Messages = {

  // obtain: function() {
  //   Parse.readAll();
  // },

  add: function(message) {
    //Parse.create(message, App.fetch())
    Parse.create(message, function() {
      App.fetch();
    });
  },


  filterMessages: function() {
    Parse.readfilter(RoomsView.$select.val(), (result) => {
      MessagesView.renderMessage(result);
    });
  }



};

