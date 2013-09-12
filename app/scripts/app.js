'use strict';

// The app/scripts/app.js file, which defines our AngularJS app
define(
  [
    'angular',
    'angular-resource',
    'modals/modals',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives'
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