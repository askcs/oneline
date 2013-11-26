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
    'angular-route',
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
        'ngResource',
        'ngRoute'
      ]);
  }
);