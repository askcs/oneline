'use strict';

// The app/scripts/app.js file, which defines our AngularJS app
define(
  [
    'angular',
    'modals/modals',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives',
    'angular-resource'
  ],
  function (angular)
  {
    return angular.module('Oneline',
      [
        'modals',
        'controllers',
        'services',
        'filters',
        'directives',
        'ngResource'
      ]);
  }
);