app.controller('ChatsPres', function ($scope, ChatsCtrl, StateUtils) {
  $scope.chats = ChatsCtrl.all();
  $scope.remove = function (chat) {
    ChatsCtrl.remove(chat);
  };

  $scope.goToDeteil = function (id) {
    var param = {};
    param.id = id;
    StateUtils.goChats(param);
  }
})
