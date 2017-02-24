app.config(function ($stateProvider) {
  $stateProvider.state('tab.chats', {
    url: '/chats',
    cache: false,
    views: {
      'tab-chats': {
        templateUrl: 'views/tab-chats.html',
        controller: 'ChatsPres'
      }
    }
  })
})
