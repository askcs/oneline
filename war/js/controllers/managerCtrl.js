/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Manager', [])


/**
 * Manager controller
 */
  .controller('managerCtrl',
  [
    '$rootScope', '$scope',
    function ($rootScope, $scope)
    {
      console.log('-->', $rootScope, $scope);
    }
  ]);