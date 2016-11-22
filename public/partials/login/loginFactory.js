'use strict';
(function() {
angular.module('techniColor')
  .factory('loginFactory', loginFactory);

  var factory = {};

  function loginFactory($http, $state, $cookies, $timeout) {

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
        swal('You have been logged out.', 'BUT NEVER FORGOTTEN.');
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
