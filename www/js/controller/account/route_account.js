app.config(function ($stateProvider) {
  $stateProvider.state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'views/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
})
