'use strict';

describe('Directive: createansweroption', function () {

  // load the directive's module and view
  beforeEach(module('thirdfullstackApp'));
  beforeEach(module('app/createansweroption/createansweroption.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<createansweroption></createansweroption>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the createansweroption directive');
  }));
});