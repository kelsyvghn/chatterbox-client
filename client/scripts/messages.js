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



// var compiled = _.template("hello: <%= name %>"); // compiled({name: 'moe'});s
// => "hello: moe"

//messages should be rendered in the following format:

/*
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};
*/


//TEMPLATE using UNDERSCORE to implement a message to HTML

// var compiled = _.template("hello: <%= name %>");
// compiled({name: 'moe'});
// => "hello: moe"

// var template = _.template("<b><%- value %></b>");
// template({value: '<script>'});
// => "<b>&lt;script&gt;</b>"



//message requests ...

/*

$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});

*/

// USEFUL methods to employ... via http

/*
GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect. (This is also true of some other HTTP methods.)[1] The W3C has published guidance principles on this distinction, saying, "Web application design should be informed by the above principles, but also by the relevant limitations."[24] See safe methods below.
HEAD
The HEAD method asks for a response identical to that of a GET request, but without the response body. This is useful for retrieving meta-information written in response headers, without having to transport the entire content.
POST
The POST method requests that the server accept the entity enclosed in the request as a new subordinate of the web resource identified by the URI. The data POSTed might be, for example, an annotation for existing resources; a message for a bulletin board, newsgroup, mailing list, or comment thread; a block of data that is the result of submitting a web form to a data-handling process; or an item to add to a database.[25]
PUT
The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified; if the URI does not point to an existing resource, then the server can create the resource with that URI.[26]
DELETE
The DELETE method deletes the specified resource.
TRACE
The TRACE method echoes the received request so that a client can see what (if any) changes or additions have been made by intermediate servers.
OPTIONS
The OPTIONS method returns the HTTP methods that the server supports for the specified URL. This can be used to check the functionality of a web server by requesting '*' instead of a specific resource.
CONNECT
[27] The CONNECT method converts the request connection to a transparent TCP/IP tunnel, usually to facilitate SSL-encrypted communication (HTTPS) through an unencrypted HTTP proxy.[28][29] See HTTP CONNECT method.
PATCH
The PATCH method applies partial modifications to a resource.[30]

*/