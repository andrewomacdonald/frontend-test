'use strict';
(function () {
  angular.module('techniColor')
    .controller('loginController', loginController);

    function loginController($scope, $cookies, $state, loginFactory) {
      $scope.loginUser = function() {
        loginFactory.login($scope.username, $scope.password).then(function(response) {
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
