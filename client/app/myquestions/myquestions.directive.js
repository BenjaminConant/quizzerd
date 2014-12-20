'use strict';

angular.module('thirdfullstackApp')
  .directive('myquestions', function () {
    return {
      templateUrl: 'app/myquestions/myquestions.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });