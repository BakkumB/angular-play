angular
  .module('pt')
  .directive('myProfile', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'my-profile/my-profile.html',
      controller: 'MyProfileController'
    }
  });