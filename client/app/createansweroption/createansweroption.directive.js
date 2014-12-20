'use strict';

angular.module('thirdfullstackApp')
  .directive('createansweroption', function () {
    return {
      templateUrl: 'app/createansweroption/createansweroption.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });