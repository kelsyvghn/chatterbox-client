var MessagesView = {
  //obtain the Messageview render function and get the Messages file's obtain function
  $chats: $('#chats'),

  // $username : $('')

  initialize: function() {
    //when you call the Messagesview function you will call the render
    // MessagesView.$chats.show(Messages.obtain());
  },

  render: function() {
    //post data to api object

    ///you make an object with username and message by using the messages.obtain function and append it to the messageview


    //we need to get access to the data
    // var a  = MessagesView.render();
    // console.log(a);
  },
  //store the name and text in object

  renderMessage: function(data) {
  //   // let {results} = data;
  //   var singlehtml = '';
  //   var recentUser = data.results[data.results.length -1];
  //   let {username, text} = recentUser;
  //   singlehtml = MessageView.render({username, text});
  //   MessagesView.$chats.append(singlehtml);
  // },
  // renderAllMessage: function(data) {
    console.log(data);
    let {results} = data;
    var html = '';
    for (var i = 0; i < results.length; i++) {

      let {username, text} = results[i];
      // var message = {
      //   username: data.results[i].username, text: data.results[i].text
      // };

      // html += MessageView.render(data.results[i].username);
      // console.log(message);

      html += MessageView.render({username, text});

    }


    MessagesView.$chats.empty().append(html);
  }


};


