'use strict';
(function() {
angular.module('techniColor')
  .factory('loginFactory', loginFactory);

  var factory = {};

  function loginFactory($http, $state, $cookies) {

    factory.login = function (username, password) {
      return $http.post('/login', {'user': username, 'password': password}).then(function(data) {
        return data;
      }).catch(function(error) {
        swal('Incorrect username/passowrd!', 'America weeps with you.');
        console.log('FACTORY ERROR ', error);
      });
    }
    factory.logout = function() {
      return $http.get('/logout').then(function(data) {
        $state.go('login');
        return data;
      }).catch(function(error) {
        console.log('LOGOUT ERROR: ', error);
      })
    }
    factory.isLoggedin = function () {
      return !!$cookies.get('login');
    }
    return factory;
  }
})();
