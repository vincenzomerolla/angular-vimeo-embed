'use strict';

var vimeoEmbed = angular.module('vimeoEmbed', ['vimeo-embed', 'ngRoute']);

vimeoEmbed.config(['$routeProvider', function($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'demo/main.html',
    controller: 'MainController'
  })
  .otherwise('/');
}]);


vimeoEmbed.controller('MainController', function ($scope) {
    // Use an id
    $scope.id = '30509290';

    // or a URL
    $scope.url = 'http://vimeo.com/30509290';
});
