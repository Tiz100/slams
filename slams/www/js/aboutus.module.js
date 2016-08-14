(function () {
    'use strict';

    angular
		.module('starter.aboutus', [
			'ionic'
		])
		.config(function ($stateProvider) {
		    $stateProvider

			.state('app.aboutus', {
			    url: '/aboutus',
			    views: {
			        'menuContent': {
			            templateUrl: 'www/templates/aboutus.html',
			            controller: 'AboutusController as vm'
			        }
			    }
			});
		});
})();