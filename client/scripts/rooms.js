var Rooms = {
  $roomInput: $('#newRoom'),

  addRoom : function() {
    Parse.create(message, function() {
      App.fetch();
    });
  },

  saveRoom : function(event) {
    // Stop the browser from returning to default, empty page
    event.preventDefault();
    //var texts = document.getElementById('message')
    var message = Rooms.$roomInput.val();
    console.log(message);
    var object = {
      roomname: message
    };
    Messages.add(object);

  }
};