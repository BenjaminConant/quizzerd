'use strict';

describe('Directive: myquestions', function () {

  // load the directive's module and view
  beforeEach(module('thirdfullstackApp'));
  beforeEach(module('app/myquestions/myquestions.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<myquestions></myquestions>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the myquestions directive');
  }));
});