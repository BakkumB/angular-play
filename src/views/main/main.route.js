angular
  .module('pt')
  .config(function ($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'main/main.html'
    });
  });