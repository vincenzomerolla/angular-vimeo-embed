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


vimeoEmbed.controller('MainController', function ($scope, $document, $window) {
    // Use an id
    $scope.id = '30509290';

    // or a URL
    $scope.url = 'https://vimeo.com/76979871';

    $scope.play = function(videoId, playerId) {
      var target = 'http://player.vimeo.com/video/'+videoId+'?player_id='+playerId+'api=1';
      console.log(target);
      var msg = JSON.stringify({ method: 'play' });
      $document.getElementById(playerId).firstChild.contentWindow.postMessage(msg, target);
    };


    function onMessageReceived(e) {
        var data = JSON.parse(e.data);
        console.log(e);
        console.log(data);
        switch (data.event) {
            case 'ready':
                //onReady();
                console.log('Ready!');
                break;
        }
    }

    if ($window.addEventListener){
        $window.addEventListener('message', onMessageReceived, false);
    }
    else {
        $window.attachEvent('onmessage', onMessageReceived, false);
    }
});
