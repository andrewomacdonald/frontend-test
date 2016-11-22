'use strict';

(function() {
  angular.module('techniColor')
    .controller('guestbookController', guestbookController);

    function guestbookController($state, loginFactory, guestbookFactory) {
      var guestbookCtrl = this;

      guestbookCtrl.phoneNumberRegex = /^\(\d{3}\)\d{3}-\d{4}$/;

      guestbookCtrl.writeToGuestbook = function() {
        guestbookFactory.writeToGuestbook(guestbookCtrl.user, guestbookCtrl.phoneNumber, guestbookCtrl.message).then(function(response){
          guestbookCtrl.messages = response.data;
        });
      }
      guestbookCtrl.readGuestbook = function() {
        guestbookFactory.readGuestbook().then(function(response) {
          guestbookCtrl.messages = response.data;
        })
      }
      guestbookCtrl.getSecret = function() {
        guestbookFactory.secretMessage().then(function(response) {
          guestbookCtrl.secret = response.data;
        })
      }
      guestbookCtrl.logout = function() {
        loginFactory.logout();
      }

      if(loginFactory.isLoggedin()){
          guestbookCtrl.readGuestbook();
          guestbookCtrl.getSecret();
      } else {
          $state.go('login');
      }
    }
})();
