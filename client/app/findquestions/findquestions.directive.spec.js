'use strict';

describe('Directive: findquestions', function () {

  // load the directive's module and view
  beforeEach(module('thirdfullstackApp'));
  beforeEach(module('app/findquestions/findquestions.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<findquestions></findquestions>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the findquestions directive');
  }));
});