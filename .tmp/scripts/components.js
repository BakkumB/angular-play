angular
  .module('pt')
  .controller('MyProfileController', ["$scope", function ($scope) {
    $scope.message = 'test';
  }]);
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
angular
  .module('pt')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'main/main.html'
    });
  }]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUvbXktcHJvZmlsZS5jb250cm9sbGVyLmpzIiwibXktcHJvZmlsZS9teS1wcm9maWxlLmpzIiwibWFpbi9tYWluLnJvdXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csT0FBTztHQUNQLFdBQVcsa0NBQXVCLFVBQVUsUUFBUTtJQUNuRCxPQUFPLFVBQVU7TUFDaEI7QUNKTDtHQUNHLE9BQU87R0FDUCxVQUFVLGFBQWEsWUFBWTtJQUNsQyxPQUFPO01BQ0wsVUFBVTtNQUNWLFNBQVM7TUFDVCxhQUFhO01BQ2IsWUFBWTs7S0FFYjtBQ1RMO0dBQ0csT0FBTztHQUNQLDBCQUFPLFVBQVUsZ0JBQWdCO0lBQ2hDLGVBQWUsTUFBTSxRQUFRO01BQzNCLEtBQUs7TUFDTCxhQUFhOztNQUVkIiwiZmlsZSI6ImNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ3B0JylcbiAgLmNvbnRyb2xsZXIoJ015UHJvZmlsZUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgJHNjb3BlLm1lc3NhZ2UgPSAndGVzdCc7XG4gIH0pOyIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHQnKVxuICAuZGlyZWN0aXZlKCdteVByb2ZpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgdGVtcGxhdGVVcmw6ICdteS1wcm9maWxlL215LXByb2ZpbGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTXlQcm9maWxlQ29udHJvbGxlcidcbiAgICB9XG4gIH0pOyIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHQnKVxuICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdtYWluJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ21haW4vbWFpbi5odG1sJ1xuICAgIH0pO1xuICB9KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=