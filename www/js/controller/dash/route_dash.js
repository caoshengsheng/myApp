app.config(function ($stateProvider) {
  $stateProvider
    .state('tab.dash',{
      url:'/dash',
      cache:false,
      views:{
        'tab-dash':{
          templateUrl:'views/tab-dash.html',
          controller:'DashCtrl'
        }
      }
    })
})
