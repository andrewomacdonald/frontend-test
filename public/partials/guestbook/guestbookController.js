'use strict';

(function() {
  angular.module('techniColor')
    .controller('guestbookController', guestbookController);

    function guestbookController($scope, $state, loginFactory, guestbookFactory) {

      $scope.phoneNumberRegex = /^\(\d{3}\)\d{3}-\d{4}$/;

      $scope.writeToGuestbook = function() {

        guestbookFactory.writeToGuestbook($scope.user, $scope.phoneNumber, $scope.message).then(function(response){
          $scope.messages = response.data;
          console.log($scope.messages);
        });
      }

      $scope.readGuestbook = function() {
        guestbookFactory.readGuestbook().then(function(response) {
          $scope.messages = response.data;
          console.log($scope.messages);
        })
      }

      if(loginFactory.isLoggedin()){
        $scope.readGuestbook();
      } else {
        $state.go('login');
      } 

    }
})();
