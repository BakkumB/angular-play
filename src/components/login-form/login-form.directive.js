angular
  .module('pt')
  .directive('loginForm', function () {
    return {
      restrict: 'E',
      templateUrl: 'login-form/login-form.html',
      controller: 'LoginFormController'
    }
  })
  .controller('LoginFormController', function ($scope, $location) {
    $scope.submit = function () {
      var name = $scope.name;

      if (name === 'mike') {
        $location.path('/vraag/1');
      }
    }
  });