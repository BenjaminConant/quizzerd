'use strict';

angular.module('thirdfullstackApp')
  .directive('createquestion', function () {
    return {
      templateUrl: 'app/createquestion/createquestion.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });