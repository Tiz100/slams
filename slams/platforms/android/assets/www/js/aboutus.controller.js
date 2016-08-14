(function () {
    'use strict';

    angular
		.module('starter.aboutus')
		.controller('AboutusController', AboutusController);

    AboutusController.$inject = ['$scope', 'aboutusservice'];

    /* @ngInject */
    function aboutuscontroller($scope, aboutusservice) {
        var vm = angular.extend(this, {
        });

        }
       
    }
)();