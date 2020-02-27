var MessagesView = {
  //obtain the Messageview render function and get the Messages file's obtain function
  $chats: $('#chats'),

  // $username : $('')

  initialize: function() {

  },

  render: function() {

  },
  //store the name and text in object

  renderMessage: function(data) {
    let {username, text} = data;


      html += MessageView.render({username, text});

    }


    MessagesView.$chats.empty().append(html);
  }


};


