'use strict';
(function() {
angular.module('techniColor')
  .factory('guestbookFactory', guestbookFactory);

  var factory = {};

  function guestbookFactory($http) {

    factory.writeToGuestbook = function (user, phoneNumber, msg) {
      return $http.post('/write', {'user':user, 'phone':phoneNumber, 'message': msg}).then(function(data) {
        console.log('INSIDE WRITE TO GUESTBOOK FACTORY ', data);
        return data;
      }).catch(function(error) {
        console.log('FACTORY ERROR ', error);
      });
    }

    factory.readGuestbook = function () {
      return $http.get('/read').then(function(data) {
        console.log('INSIDE READ GUESTBOOK FACTORY', data);
      });
    }
    return factory;
  }
})();
