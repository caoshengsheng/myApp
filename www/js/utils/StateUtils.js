app.service('StateUtils', function ($state) {
  var stateService = this;

  /**
   * 跳转到 派工详情
   * @param param
   */
  this.goChats = function (param) {
    $state.go('tab.chat-detail', param);
  }
  
  return stateService;
})
