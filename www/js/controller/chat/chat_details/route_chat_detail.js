app.config(function ($stateProvider) {

  var param = {
    id: ''
  }

  $stateProvider.state('tab.chat-detail', {
    url: '/chats/detail',
    views: {
      'tab-chats': {
        templateUrl: 'views/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    },
    params: param
  })
})
