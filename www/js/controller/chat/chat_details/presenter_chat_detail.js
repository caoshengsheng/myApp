app.controller('ChatDetailCtrl', function ($scope, $stateParams, ChatsCtrl) {
  console.log($stateParams.id);
  $scope.chat = ChatsCtrl.get($stateParams.id);
})
