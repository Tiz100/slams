(function() {
    'use strict';

    angular
		.module('starter.home')
		.controller('HomeController',function($scope,$state){
		    //var homemenu ={stateName : 'app.home', labelName: 'home'};
		    //var chatmenu ={stateName : 'app.chat-rooms', labelName : 'Chat'};
		    //var sendaslam ={stateName : 'app.sendaslam', labelName : 'sendaslam'};
		    //var walls ={stateName : 'app.walls', labelName: 'walls'};

		    //$scope.subMenus = [homemenu, chatmenu, sendaslam, walls];
		    //$scope.activeSubMenuStateName = 'app.home';
		    //$scope.setActiveSubMenu = function(subMenuStateName){
		    //    return $state.go(subMenuStateName);
		    //}
		
		

homeController.$inject = [ 'homeDataService',   '$cordovaAppRate'];

		    /* @ngInject */
		    //function HomeController( homeDataService,  $cordovaAppRate) {
		    //	var vm = angular.extend(this, {
		    //	    entries: menuItems,

		    //				openFacebookPage: openFacebookPage,
		    //		rateThisAppNow: rateThisAppNow
		    //	});

		

		
		    function openFacebookPage() {
		        externalAppsService.openExternalUrl(homeDataService.facebookPage);
		    }

		    function rateThisAppNow(){
		        $cordovaAppRate.promptForRating(true);
		    }
		}
   ) })
();
