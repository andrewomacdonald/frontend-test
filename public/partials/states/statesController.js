'use strict';

(function() {
  angular.module('techniColor')
    .controller('statesController', statesController);

    function statesController($state, statesFactory, loginFactory) {
      var statesCtrl = this;
      statesCtrl.stateList = function () {
        statesFactory.getStates().then(function(response) {
          statesCtrl.oneState = false;
          statesCtrl.states = response.data;
        });
      }
      statesCtrl.getSpecificState = function () {
          statesFactory.getStateFromDropdownMenu(statesCtrl.abbrev).then(function(response) {
            statesCtrl.oneState = true;
            statesCtrl.states = [response.data];
          });
      }
      statesCtrl.stateAbbreviations = function () {
        statesFactory.getStateAbbreviations().then(function(response) {
          statesCtrl.abbreviations = response.data;
        });
      }

      if(loginFactory.isLoggedin()) {
        statesCtrl.stateAbbreviations();
        statesCtrl.stateList();
      } else {
        $state.go('login');
      }

      statesCtrl.logout = function() {
        loginFactory.logout();
      }

    }
})();
