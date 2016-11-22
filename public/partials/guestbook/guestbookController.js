'use strict';

(function() {
  angular.module('techniColor')
    .controller('guestbookController', guestbookController);

    function guestbookController($scope, $state, loginFactory, guestbookFactory) {

      $scope.phoneNumberRegex = /^\(\d{3}\)\d{3}-\d{4}$/;

      $scope.writeToGuestbook = function() {
        guestbookFactory.writeToGuestbook($scope.user, $scope.phoneNumber, $scope.message).then(function(response){
          $scope.messages = response.data;
        });
      }
      $scope.readGuestbook = function() {
        guestbookFactory.readGuestbook().then(function(response) {
          $scope.messages = response.data;
        })
      }
      $scope.getSecret = function() {
        guestbookFactory.secretMessage().then(function(response) {
          $scope.secret = response.data;
        })
      }
      $scope.logout = function() {
        loginFactory.logout();
      }

      if(loginFactory.isLoggedin()){
          $scope.readGuestbook();
          $scope.getSecret();
      } else {
          $state.go('login');
      }
    }
})();
