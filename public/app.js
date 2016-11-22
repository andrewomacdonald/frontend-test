(function() {
  angular.module('techniColor', ['ui.router', 'ngCookies'])
    .config(['$stateProvider', function($stateProvider) {

      var applicationStates = [{
        name: 'login',
        url: '/',
        templateUrl: 'partials/login/login.html',
        controller: 'loginController',
        controllerAs: 'loginCtrl'
      },
      {
        name: 'guestbook',
        url: '/guestbook',
        templateUrl: 'partials/guestbook/guestbook.html',
        controller: 'guestbookController',
        controllerAs: 'guestbookCtrl'
      },
      {
        name: 'states',
        url: '/states',
        templateUrl: 'partials/states/states.html',
        controller: 'statesController',
        controllerAs: 'statesCtrl'
      },
      {
        name: 'otherwise',
        url: '*path',
        templateUrl: 'partials/login/login.html',
        controller: 'loginController',
        controllerAs: 'loginCtrl'
      }];

      applicationStates.forEach(function(state) {
         $stateProvider.state(state);
      });

    }])
})();
