var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click('button', RoomsView.render);

    RoomsView.$select.click('select', RoomsView.show);
  },

  render: function() {

  },

  show: function() {
    database = App.fetch();
    console.log(database.results);
  }


};
