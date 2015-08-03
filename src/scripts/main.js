angular
  .module('pt', [
    'ui.router'
  ])
  .config(function ($locationProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  });
