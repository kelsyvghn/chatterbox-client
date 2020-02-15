var MessageView = {
  //this one is to create each chat box with username and messages

  render :_.template(`

    <div class="chat">
      <div class="username"><%- username %></div>
        <div class="message"><%- text %></div>
    </div>

    `)


};