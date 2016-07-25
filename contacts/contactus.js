'use strict';

angular.module('saarang2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contactus', {
        url: '/contactus',
        template: '<contactus></contactus>'
      });
  });
