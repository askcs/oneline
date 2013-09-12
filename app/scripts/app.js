'use strict';

// The app/scripts/app.js file, which defines our AngularJS app
define(
  [
    'angular',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives'
  ],
  function (angular)
  {
    return angular.module('Oneline',
      [
        'controllers',
        'services',
        'filters',
        'directives'
      ]);
  }
);