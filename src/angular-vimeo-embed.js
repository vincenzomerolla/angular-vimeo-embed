'use strict';

angular.module('vimeoEmbed', [])

.directive('vimeoVideo', function (VimeoService) {

    return {
      restrict: 'EA',
      replace: true,
      scope: {
          videoId: '=',
          videoUrl: '=',
          playerOpts: '=',
          playerHeight: '=',
          playerWidth: '=',
          api: '='
      },
      link: function (scope, element, attrs, ctrl) {
        var playerId = attrs.playerId || element[0].id;
        element[0].id = playerId;

        var videoUrl = scope.videoId ? 'https://vimeo.com/' + scope.videoId : scope.videoUrl,
            params = '?url=' + encodeURIComponent(videoUrl) + '&callback=JSON_CALLBACK' + '&player_id=' + playerId,
            options = scope.playerOpts || null;

        if (scope.playerWidth) { params += '&width=' + scope.playerWidth; }
        if (scope.playerHeight) { params += '&height=' + scope.playerHeight; }
        if (scope.api) { params += '&api=1'; }

        //If params obj is passed, loop through object keys and append query param
        if (options)  {
          for (var prop in options) {
            params += '&' + prop + '=' + options[prop];
          }
        }

        console.log(params);
        VimeoService.oEmbed(params).then(function (data) {
          element.html(data.html);
        }, function (data) {
          element.html('<div>' + data + '</div>');
        });


      }
    };
})

.factory('VimeoService', function ($q, $http) {
  var endpoint = 'https://www.vimeo.com/api/oembed.json';

  return {
    oEmbed: function (params) {
      console.log(endpoint + params);
      var d = $q.defer();

      $http.jsonp(endpoint + params).success(function(data) {
        d.resolve(data);
      }).error(function(error) {
        console.log(error);
        d.reject('Oops! It looks like there was an error!');
      });

      return d.promise;
    }
  };
});