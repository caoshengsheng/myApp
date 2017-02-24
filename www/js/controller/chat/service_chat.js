app.service('ChatsCtrl', function (ChatsModel) {
  var chatsService = this;

  this.all = function () {
    return ChatsModel.chats;
  }

  this.remove = function (chat) {
    ChatsModel.chats.splice(ChatsModel.chats.indexOf(chat), 1);
  }

  this.get = function (chatId) {
    for (var i = 0; i < ChatsModel.chats.length; i++) {
      if (ChatsModel.chats[i].id === parseInt(chatId)) {
        return ChatsModel.chats[i];
      }
    }
    return null;
  }

  return chatsService;

})
