(function() {
	'use strict';

	angular
		.module('starter.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = [ 'homeDataService', 'externalAppsService',  '$cordovaAppRate'];

	/* @ngInject */
	function HomeController(menuItems, homeDataService, externalAppsService, $cordovaAppRate) {
		var vm = angular.extend(this, {
		    entries: menuItems,

					openFacebookPage: openFacebookPage,
			rateThisAppNow: rateThisAppNow
		});

		

		
		function openFacebookPage() {
			externalAppsService.openExternalUrl(homeDataService.facebookPage);
		}

		function rateThisAppNow(){
			$cordovaAppRate.promptForRating(true);
		}
	}
})();
