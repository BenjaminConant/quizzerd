'use strict';

angular.module('thirdfullstackApp')
  .directive('findquestions', function () {
    return {
      templateUrl: 'app/findquestions/findquestions.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });