'use strict';

angular.module('vimeo-embed', [])

.directive('vimeoVideo', ['', function () {


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
      link: function (scope, element, attrs) {

      }
    };
}]);
