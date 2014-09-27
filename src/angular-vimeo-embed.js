'use strict';

angular.module('vimeo-embed', [])

.directive('vimeoVideo', function () {

    return {
      restrict: 'EA',
      replace: true,
      scope: {
          videoId: '=?',
          videoUrl: '=?',
          playerId: '=?',
          query: '=?',
          playerHeight: '=?',
          playerWidth: '=?',
          api: '=?'
      },
      link: function (scope, element, attrs, ctrl) {
        // This is the oEmbed endpoint for Vimeo
        var videoUrl = scope.videoId ? 'https://vimeo.com/' + scope.videoId : scope.videoUrl,
            params = '?url=' + encodeURIComponent(videoUrl) + '&callback=JSON_CALLBACK' + '&player_id=' + attrs.id,
            //width = scope.playerWidth || 640,
            //height = scope.playerHeight || 360,
            query = scope.query;

        if (scope.playerWidth) { params += '&width=' + scope.playerWidth; }
        if (scope.playerHeight) { params += '&height=' + scope.playerHeight; }
        if (scope.api) { params += '&api=1'; }

        //If params obj is passed, loop through object keys and append query param
        if (query)  {
          for (var prop in query) {
            params += '&' + prop + '=' + query[prop];
          }
        }

        console.log(params);
        ctrl.getVideo(params);
        //element.html(scope.data.html);



      },
      controller: function($scope, Vimeo) {
        this.getVideo = function(params) {
          Vimeo.oEmbed(params).then(function(data) {
            console.log(data);
            $scope.data = data;
          }, function(data) {
            alert(data);
          });
        };

        this.play = function(win, videoId, playerId, msg) {
          var target = 'http://player.vimeo.com/video/'+videoId+'?player_id='+playerId+'api=1';
          console.log(target);
          win.postMessage(msg, target);
        };
      }
    };
})

.factory('Vimeo', function($http, $q) {
  var service = {},
      endpoint = 'http://www.vimeo.com/api/oembed.json';

  service.oEmbed = function (params) {
    console.log(endpoint + params);
    var d = $q.defer();

    $http.jsonp(endpoint + params).success(function(data) {
      d.resolve(data);
    }).error(function(error) {
      d.reject('There was an error!');
    });

    return d.promise;
  };

  return service;
});
