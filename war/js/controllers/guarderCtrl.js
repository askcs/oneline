/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Guarder', [])


/**
 * Guarder controller
 */
  .controller('guarderCtrl',
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