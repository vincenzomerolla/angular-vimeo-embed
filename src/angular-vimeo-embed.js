'use strict';

angular.module('vimeo-embed', [])

.directive('vimeoVideo', function () {

    return {
      restrict: 'EA',
      scope: {
          videoId: '=?',
          videoUrl: '=?',
          player: '=?',
          playerVars: '=?',
          playerHeight: '=?',
          playerWidth: '=?'
      },
      link: function (scope, element, attrs, ctrl) {
        // This is the oEmbed endpoint for Vimeo
        var endpoint = 'http://www.vimeo.com/api/oembed.json';

        var url = endpoint + '?url=' + encodeURIComponent(scope.videoUrl) + '&callback=JSON_CALLBACK',
          width = scope.playerWidth || 640,
         height = scope.playerHeight || 360;


        url += '&width=' + width + '&height=' + height;

        ctrl.getVideo(url).success(function(data) {
          console.log(data);
          element.html(data.html);
        }).error(function(error) {
          console.log(error);
        });

      },
      controller: function($http) {
        this.getVideo = function(url) {
          return $http.jsonp(url);
        };
      }
    };
});
