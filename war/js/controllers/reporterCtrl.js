/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Reporter', [])


/**
 * Reporter controller
 */
  .controller('reporterCtrl',
  [
    '$rootScope', '$scope',
    function ($rootScope, $scope)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();
    }
  ]);