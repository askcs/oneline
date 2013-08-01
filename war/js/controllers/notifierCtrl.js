/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Notifier', [])


/**
 * Notifier controller
 */
  .controller('notifierCtrl',
  [
    '$rootScope', '$scope',
    function ($rootScope, $scope)
    {
      console.log('-->', $rootScope, $scope);
    }
  ]);