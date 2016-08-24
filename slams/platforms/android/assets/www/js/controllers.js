angular.module('starter.controllers', ['ionic'])


.controller('AppCtrl', function ($scope, $state, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    var homemenu = { stateName: 'app.home', labelName: 'home' };
    var chatmenu = { stateName: 'app.chat-rooms', labelName: 'Chat' };
    var sendaslam = { stateName: 'app.sendaslam', labelName: 'sendaslam' };
    var walls = { stateName: 'app.walls', labelName: 'walls' };

    $scope.subMenus = [homemenu, chatmenu, sendaslam, walls];
    $scope.activeSubMenuStateName = 'app.home';
    $scope.setActiveSubMenu = function (subMenuStateName) {
        return $state.go(subMenuStateName);
    }
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})



  .controller('tcController', ['$scope', function ($scope) {
      $scope.checkboxModel = {
          value1: true,
          value2: 'YES'
      };
  }]);

it('should change state', function () {
    var value1 = element(by.binding('checkboxModel.value1'));
    var value2 = element(by.binding('checkboxModel.value2'));

    expect(value1.getText()).toContain('true');
    expect(value2.getText()).toContain('YES');

    element(by.model('checkboxModel.value1')).click();
    element(by.model('checkboxModel.value2')).click();

    expect(value1.getText()).toContain('false');
    expect(value2.getText()).toContain('NO');
});


/*play music controller*/
function play() {
    audio.play();
}

function play() {
    audio.pause
}

function stop() {
    audio.pause();
    audio.src = audio.src;
}

