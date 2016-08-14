(function() {
	'use strict';

	angular
		.module('starter.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Booyah Chat',
		    
           path: 'chat-rooms',
			icon: 'ion-chatbox'
		}, {
			title: 'Send a Slam',
			path: 'sendaslam',
			icon: 'ion-thumbsup'
		}, {
			title: 'Slamming Walls',
			path: 'chat-rooms',
			icon: 'ion-android-people'
		}, {
			title: 'About Us',
			path: 'aboutus',
			icon: 'ion-information-circled'
		}];

		return data;
	}
})();