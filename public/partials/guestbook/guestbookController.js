'use strict';

(function() {
  angular.module('techniColor')
    .controller('guestbookController', guestbookController);

    function guestbookController($scope, guestbookFactory) {

      $scope.logger = function() {
        console.log('hello. i am the guestbook controller. how are you today.');
      }

      $scope.factoryTest = function(user, phoneNumber, message) {
        guestbookFactory.writeToGuestbook('bob', '2222222222', 'hi')
        guestbookFactory.readGuestbook();
      }

      $scope.factoryTest();
      $scope.logger();

    }
})();
