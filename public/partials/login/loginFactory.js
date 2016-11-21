'use strict';
(function() {
angular.module('techniColor')
  .factory('loginFactory', loginFactory);

  var factory = {};

  function loginFactory($http) {

    factory.login = function (username, password) {
      return $http.post('/login', {'user': username, 'password': password}).then(function(data) {
        console.log('INSIDE FACTORY ', data);
        return data;
      }).catch(function(error) {
        console.log('FACTORY ERROR ', error);
      });
    }
    return factory;
  }
})();