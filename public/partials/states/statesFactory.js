'use strict';
(function() {
angular.module('techniColor')
  .factory('statesFactory', statesFactory);

  var factory = {}

  function statesFactory($http) {

    factory.getStates = function () {
      return $http.get('/states').then(function(data){
        return data;
      });
    }
    factory.getStateFromDropdownMenu = function (abbrev) {
      return $http.get('/states/'+abbrev).then(function(data) {
        return data;
      })
    }
    factory.getStateAbbreviations = function () {
      return $http.get('/states/abbreviations').then(function(data) {
        return data;
      })
    }
    factory.lazyLoad = function (offset) {
      offset+=10;
      return $http.get('/states', {'offset':offset}).then(function(data) {
        console.log(offset);
        return data;
      })
    }
    return factory;
  }
})();
