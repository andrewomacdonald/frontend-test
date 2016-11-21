'use strict';
(function () {
  angular.module('techniColor', ['ui.router', 'infinite-scroll']);
})();



(function() {
  angular.module('techniColor', ['ui.router', 'infinite-scroll'])
    .config(['$stateProvider', function($stateProvider) {

      var applicationStates = [{
        name: 'login',
        url: '/',
        templateUrl: 'partials/login/login.html',
        controller: 'loginController'
      },
      {
        name: 'guestbook',
        url: '/guestbook',
        templateUrl: 'partials/guestbook/guestbook.html',
        controller: 'guestbookController'
      },
      {
        name: 'states',
        url: '/states',
        templateUrl: 'partials/states/states.html',
        controller: 'statesController'
      }];

      applicationStates.forEach(function(state) {
         $stateProvider.state(state);
      });

    }])
})();
