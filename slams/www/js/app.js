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


    .state('app.chat-rooms', {
        url: '/chat-rooms',
        views: {
            'menuContent': {
                templateUrl: 'templates/chat-rooms.html',
            }
        }
    })

    .state('app.sendaslam', {
        url: '/sendaslam',
        views: {
            'menuContent': {
                templateUrl: 'templates/sendaslam.html',
            }
        }
    })
        .state('app.walls', {
            url: '/walls',
            views: {
                'menuContent': {
                    templateUrl: 'templates/walls.html',
                }
            }
        })


    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
})


/*azure connection*/

var client = new WindowsAzure.MobileServiceClient('https://booyahslamv2.azurewebsites.net')
var table = client.getTable(Sport);
/**
 * Process the results that are received by a call to table.read()
 *
 * @param {Object} results the results as a pseudo-array
 * @param {int} results.length the length of the results array
 * @param {Object} results[] the individual results
 */
function success(results) {
    var numItemsRead = results.length;

    for (var i = 0 ; i < results.length ; i++) {
        var row = results[i];
        // Each row is an object - the properties are the columns
    }
}

function failure(error) {
    throw new Error('Error loading data: ', error);
}

table
    .read()
    .then(success, failure);

