(function () {
    'use strict';

    // Ionic Starter App
    var app = angular.module('starter', [
    /*
     * Everybody has access to these.
     * We could place these under every feature area,
     * but this is easier to maintain.
     */
     'ionic',
     'starter',
    //'starter.core',
    //'starter.common.data',
    //'starter.common.services',
    //'starter.common.menu',
    //'starter.common.directives',
    /*
     * Feature areas
     */
    //'starter.menu.chat'
    'ngRoute', 'pubnub.angular.service', 'ngNotify'
    ]);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

    app.run(['Pubnub', 'currentUser', function (Pubnub, currentUser) {
        Pubnub.init({
            publish_key: 'pub-c-65cf2800-d79d-4148-af96-e8821c984109',
            subscribe_key: 'sub-c-30916d88-4ffc-11e6-971e-02ee2ddab7fe',
            //publish_key: 'pub-c-a1cd7ac1-585e-478e-925b-65d17ce62f7d',c:\project\slams\slams\www\js\shared\
            //subscribe_key: 'sub-c-204f063e-c559-11e5-b764-02ee2ddab7fe',
            uuid: currentUser,
            origin: 'pubsub.pubnub.com',
            ssl: true
        });

    }]);

    app.run(['ngNotify', function (ngNotify) {
        ngNotify.config({
            theme: 'paster',
            position: 'top',
            duration: 250
        });

    }]);

})();