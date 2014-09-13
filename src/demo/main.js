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
    // have a video ID
    $scope.theBestVideo = 'sMKoNBRZM1M';

    // or a URL
    $scope.anotherGoodOne = 'https://www.youtube.com/watch?v=18-xvIjH8T4';
});
