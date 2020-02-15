var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click('button', RoomsView.render);

    RoomsView.$select.on('change', function() {

      Parse.readfilter(RoomsView.$select.val(), (result) => {
        console.log(result);
      });

    });

  },

  render: function(data) {
    let {results} = data;

    //if clicked, then start filter and store into the object array and pass in an array renderMessage


  },


  renderRoom: function(data) {
    let {results} = data;
    var html = '';
    var uniqrooms = [];
    for (var i = 0; i < results.length; i++) {
      uniqrooms.push(results[i].roomname);
    }
    var a = _.uniq(uniqrooms);
    var singleroom = '';
    for (var j = 0; j < a.length; j++) {
      room = a[j];
      singleroom += RoomsView.rendertemplate(room);
    }

    RoomsView.$select.append(singleroom);
  },

  rendertemplate: _.template(`
    <option value="<%= room %>"><%= room %></option>
  `)



  // show: function() {
  //   database = App.fetch();
  //   console.log(database.results);
  // }


};
