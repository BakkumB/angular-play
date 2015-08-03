angular
  .module('pt', [
    'ui.router'
  ])
  .config(["$locationProvider", function ($locationProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  }]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxPQUFPLE1BQU07SUFDWjs7R0FFRCw2QkFBTyxVQUFVLG1CQUFtQjtJQUNuQztPQUNHLFVBQVU7T0FDVixXQUFXOztBQUVsQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ3B0JywgW1xuICAgICd1aS5yb3V0ZXInXG4gIF0pXG4gIC5jb25maWcoZnVuY3Rpb24gKCRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgJGxvY2F0aW9uUHJvdmlkZXJcbiAgICAgIC5odG1sNU1vZGUodHJ1ZSlcbiAgICAgIC5oYXNoUHJlZml4KCchJyk7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9