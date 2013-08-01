/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Purchaser', [])


/**
 * Purchaser controller
 */
  .controller('purchaserCtrl',
  [
    '$rootScope', '$scope',
    function ($rootScope, $scope)
    {
      console.log('-->', $rootScope, $scope);
    }
  ]);