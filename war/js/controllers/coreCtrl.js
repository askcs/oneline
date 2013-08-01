/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Core', [])


/**
 * Core controller
 */
.controller('coreCtrl',
[
	'$rootScope', '$scope', '$location', 'Generators', 'Core', '$modal',
	function ($rootScope, $scope, $location, Generators, Core, $modal)
	{
		/**
		 * Fix styles
		 */
		$rootScope.fixStyles();


    /**
     * View setter
     */
    function setView(hash)
    {
      $scope.views = {
        purchaser:  false,
        manager:    false,
        notifier:   false,
        reporter:   false,
        guarder:    false
      };

      $scope.views[hash] = true;

      switch (hash)
      {
      case 'purchaser':
        break;

      case 'manager':
        $rootScope.$broadcast('connectedNumbersList');
        break;

      case 'notifier':
        $rootScope.$broadcast('notificationsList');
        break;

      case 'reporter':
        break;

      case 'guarder':
        break;
      }

    }


    /**
     * Switch between the views and set hash accordingly
     */
    $scope.setViewTo = function (hash)
    {
      $scope.$watch(hash, function ()
      {
        $location.hash(hash);

        setView(hash);
      });
    };

    var view;

    /**
     * If no params or hashes given in url
     */
    if (!$location.hash())
    {
      view = 'purchaser';

      $location.hash('purchaser');
    }
    else
    {
      view = $location.hash();
    }


    /**
     * Set view
     */
    setView(view);



    $rootScope.$on('setView', function ()
    {
      $scope.setViewTo(arguments[1]);
    });
	}
]);