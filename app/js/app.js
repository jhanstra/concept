var app = angular.module('concept', [
'ngRoute'
]);

// CONTROLLERS
app.controller('MainCtrl', ['$rootScope','$scope', function($rootScope, $scope) {
  $scope.test = "hello test";
}]);


// CONFIG / ROUTING
app.config(function($routeProvider) {
  $routeProvider
  .when('/', { templateUrl: '/views/concept.html' })
  .when('/components', { templateUrl: '/views/components.html' })
  .when('/css', {templateUrl: '/views/css.html'})
  .otherwise({ redirectTo: '/' });

});
