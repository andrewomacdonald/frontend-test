'use strict';
(function () {
  angular.module('techniColor')
    .controller('loginController', loginController);

    function loginController($scope, loginFactory) {

      $scope.loginUser = function() {
        console.log('INSIDE CONTROLLER');
        console.log($scope.username);
        console.log($scope.password);
        loginFactory.login($scope.username, $scope.password).then(function(data) {
          console.log(data);
          return data;
        }).catch(function(error) {
          console.log('error ', error);
        });
      }
    }
})();
