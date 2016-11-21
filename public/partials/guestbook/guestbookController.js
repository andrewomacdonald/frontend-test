'use strict';

(function() {
  angular.module('techniColor')
    .controller('guestbookController', guestbookController);

    function guestbookController($scope, $rootScope, guestbookFactory) {

      $scope.writeToGuestbook = function() {
        guestbookFactory.writeToGuestbook($scope.user, $scope.phoneNumber, $scope.message).then(function(response){
          response.data.forEach(function(value) {
            console.log(typeof value.phone);
          })
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

      $scope.readGuestbook();
    }
})();
