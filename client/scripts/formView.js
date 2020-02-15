var FormView = {

  $form: $('form'),
  $input: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //var texts = document.getElementById('message')
    var message = FormView.$input.val();
    var object = {
      username: JSON.stringify(App.username),
      text: JSON.stringify(message),
      roomname: RoomsView.$select.val(),
    };
    console.log();
    Messages.add(object);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};