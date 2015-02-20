/**
 * angular-vimeo-embed.js
 * (c) 2014 Vincenzo Merolla
 * License: MIT
 */

(function(window, angular) {
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

        var options = scope.playerOpts;

        var params = {
          url: scope.videoId ? 'https://vimeo.com/' + scope.videoId : scope.videoUrl,
          callback: 'JSON_CALLBACK',
          player_id: playerId
        };

        if (scope.playerWidth) params['width'] = scope.playerWidth;
        if (scope.playerHeight) params['height'] = scope.playerHeight;
        if (scope.api) params['api'] = 1;

        //If params obj is passed, loop through object keys and append query param
        if (options)  {
          for (var prop in options) {
            if (options.hasOwnProperty(prop)) params[prop] = options[prop];
          }
        }

        VimeoService.oEmbed(params).then(function (data) {
          element.html(data.html);
        }, function () {
          element.html('<div>Failed to retreive video.</div>');
        });
      }
    };
  })

  .factory('VimeoService', function ($http) {
    var endpoint = 'https://www.vimeo.com/api/oembed.json';

    return {
      oEmbed: function (params) {
        return $http.jsonp(endpoint, {params: params}).then(function(res) {
          return res.data;
        });
      }
    };
  });
})(window, window.angular);







