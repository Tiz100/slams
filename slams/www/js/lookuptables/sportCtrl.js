(function () {
    'use strict';

    sportCtrl.$inject = ['sportService'];

    angular
        .module('starter')
        .controller('sportCtrl', sportCtrl);



    function sportCtrl(sportService) {
        var vm = this;


        activate();

        function activate() { }

        vm.sportname  = sportService.getData();
    }
})();


