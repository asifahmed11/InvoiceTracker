'use strict';

describe('Component: DashboardComponent', function () {

  // load the controller's module
  beforeEach(module('invoiceTrackerApp'));

  var DashboardComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    DashboardComponent = $componentController('dashboard', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
