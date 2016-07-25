'use strict';

describe('Component: ContactusComponent', function () {

  // load the controller's module
  beforeEach(module('saarang2017App'));

  var ContactusComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ContactusComponent = $componentController('ContactusComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
