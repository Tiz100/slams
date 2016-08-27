(function () {
    'use strict';

    sportService.$inject = ['$http'];

    angular
        .module('starter',[azure-mobile-service-module])
        .factory('sportService', sportService);

  

    function sportService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {
            Azureservice.query('sport', {})
        .then (function(sport)
        {
            vm.sport = sport;
        })}
    }
})();


angular.module('starter').constant('AzureMobileServiceClient', {
    API_URL: "https://booyahslamv1.azurewebsites.net",
    API_KEY: "S2RlAHk+K9OXUcnboMRYLnAfDka2K2WrPuqhMzpZQPw=",

});