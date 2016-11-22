'use strict';
(function () {
  angular.module('techniColor')
    .controller('loginController', loginController);

    function loginController($cookies, $state, loginFactory) {
      var loginCtrl = this;

      loginCtrl.loginUser = function() {
        loginFactory.login(loginCtrl.username, loginCtrl.password).then(function(response) {
          if(response === undefined) {
            return;
          }
          if(response.status===200) {
            $state.go('states');
          }
        }).catch(function(error) {
          console.log('LOGIN ERROR ', error);
        });
      }
    }
})();
