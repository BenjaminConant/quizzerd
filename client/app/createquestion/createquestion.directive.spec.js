'use strict';

describe('Directive: createquestion', function () {

  // load the directive's module and view
  beforeEach(module('thirdfullstackApp'));
  beforeEach(module('app/createquestion/createquestion.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<createquestion></createquestion>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the createquestion directive');
  }));
});