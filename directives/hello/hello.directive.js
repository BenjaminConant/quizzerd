'use strict';

angular.module('thirdfullstackApp')
  .directive('hello', function () {
    return {
      templateUrl: '../directives/hello/hello.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });