// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})


.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController'
                    }
                }
            })

        .state('app.aboutus', {
            url: '/aboutus',
            views: {
                'menuContent': {
                    templateUrl: 'templates/aboutus.html'
                }
            }
        })

        .state('app.chooseteam', {
            url: '/chooseteam',
            views: {
                'menuContent': {
                    templateUrl: 'templates/chooseteam.html'
                }
            }
        })


    .state('chat-rooms', {
        url: '/chat-rooms',
        templateUrl: 'templates/chat-rooms.html',
        controller: 'ChatController'
    })


    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
})

  .controller('HomeController', ['$scope', '$state', function ($scope, $state) {
      $scope.navTitle = 'Home Page';

      $scope.leftButtons = [{
          type: 'button-icon icon ion-navicon',
          tap: function (e) {
              $scope.toggleMenu();
          }
      }];
  }])


.controller('ChatController', ['$scope', $state, function ($scope, $state) {
    $scope.navTitle = 'chat-rooms';
    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function (e) {
            $scope.toggleMenu();
        }
    }];
}]);






