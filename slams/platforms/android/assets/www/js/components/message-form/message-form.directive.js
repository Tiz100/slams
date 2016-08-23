angular.module('starter').directive('messageForm', function() {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'js/components/message-form/message-form.html',
    scope: {},
    
    controller: function($scope, currentUser, MessageService){

      $scope.uuid = currentUser;
      $scope.messageContent = '';

      $scope.sendMessage = function(){
      	MessageService.sendMessage($scope.messageContent);
      	$scope.messageContent = '';
      }
    }
  };
});