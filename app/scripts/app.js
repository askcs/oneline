'use strict';

define(
  [
    'angular',
    'modals/modals',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives',
    'angular-resource',
    'jquery-ui'
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