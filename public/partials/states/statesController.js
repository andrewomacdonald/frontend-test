'use strict';

(function() {
  angular.module('techniColor')
    .controller('statesController', statesController);

    function statesController($scope, $state, statesFactory, loginFactory) {

      $scope.stateList = function () {
        statesFactory.getStates().then(function(response) {
          $scope.oneState = false;
          $scope.states = response.data;
        });
      }
      $scope.getSpecificState = function () {
          statesFactory.getStateFromDropdownMenu($scope.abbrev).then(function(response) {
            $scope.oneState = true;
            $scope.states = [response.data];
          });
      }
      $scope.stateAbbreviations = function () {
        statesFactory.getStateAbbreviations().then(function(response) {
          $scope.abbreviations = response.data;
        });
      }

      if(loginFactory.isLoggedin()) {
        $scope.stateAbbreviations();
        $scope.stateList();
      } else {
        $state.go('login');
      }

    }
})();
