/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Core', [])


/**
 * Core controller
 */
.controller('coreCtrl',
[
	'$rootScope', '$scope', '$location', 'Core',
	function ($rootScope, $scope, $location, Core)
	{




    Core.factory.process();




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
      view = 'manager';

      $location.hash('manager');
    }
    else
    {
      view = $location.hash();
    }


    /**
     * Set view
     */
    setView(view);


    /**
     * Listen for setView broadcasts
     */
    $rootScope.$on('setView', 'args', function ()
    {
      $scope.setViewTo(arguments[1]);
    });
	}
]);