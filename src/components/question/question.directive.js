angular
  .module('pt')
  .directive('question', function () {
    return {
      restrict: 'E',
      templateUrl: 'question/question.html',
      controller: 'QuestionController',
      scope: {
        id: '@'
      }
    }
  })
  .controller('QuestionController', function ($scope) {

  });