angular.module('starter', [])
  .controller('notesCtrl', function () {
      var vm = this;
      vm.addNoteText = '';
      vm.notes = [
        { "notetext": "Fix driveway" },
        { "notetext": "Replace roof" },
        { "notetext": "Fix dryer" },
        { "notetext": "Tear out deck" },
        { "notetext": "Add electricity to garage" }
      ];
    
  });

