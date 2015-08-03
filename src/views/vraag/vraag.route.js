angular
  .module('pt')
  .config(function ($stateProvider) {
    $stateProvider.state('vraag', {
      url: '/vraag/:id',
      templateUrl: 'vraag/vraag.html',
      controller: function ($scope, $stateParams) {
        $scope.questionId = $stateParams.id;
      }
    });
  });