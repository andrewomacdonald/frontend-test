'use strict';

(function() {
  angular.module('techniColor')
    .controller('guestbookController', guestbookController);

    function guestbookController($scope, $rootScope, guestbookFactory) {

      console.log($rootScope);


      $scope.logger = function() {
        console.log('hello. i am the guestbook controller. how are you today.');
      }

      $scope.writeToGuestbook = function() {
        guestbookFactory.writeToGuestbook($scope.name, $scope.phoneNumber, $scope.message).then(function(response){
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
