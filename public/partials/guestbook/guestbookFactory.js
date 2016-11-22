'use strict';
(function() {
angular.module('techniColor')
  .factory('guestbookFactory', guestbookFactory);

  var factory = {};

  function guestbookFactory($http) {

    factory.writeToGuestbook = function (user, phoneNumber, msg) {
      return $http.post('/write', {'user':user, 'phone':phoneNumber, 'message': msg}).then(function(data) {
        return data;
      }).catch(function(error) {
        console.log('FACTORY ERROR ', error);
      });
    }

    factory.secretMessage = function() {
      return $http.get('/secret').then(function(data) {
        return data;
      })
    }

    factory.readGuestbook = function () {
      return $http.get('/read').then(function(data) {
        return data;
      }).catch(function(error) {
        console.log('FACTORY ERROR ', error);
      });
    }
    return factory;
  }
})();
