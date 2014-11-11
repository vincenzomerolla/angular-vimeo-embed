'use strict';

angular.module('vimeoEmbedExample', ['vimeoEmbed', 'ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'demo/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  })
  .otherwise('/');
}])

.controller('MainController', function ( $document, $window) {
    // Use an id
    this.id = '103384798';

    // or a URL
    this.url = 'https://vimeo.com/76979871';

    
});
