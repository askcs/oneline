/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Core', [])


/**
 * Core controller
 */
.controller('core',
[
	'$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location)
	{
		/**
		 * Fix styles
		 */
		$rootScope.fixStyles();


		$scope.countries = $rootScope.config.countries;

		$scope.types = $rootScope.config.types;


		$scope.defaults = {
			country: {
        id:     9,
        label: 'Netherlands'
      }
		}

	  /**
	   * General order container
	   */
	  $scope.order = {
	  	type: 	''
	  };


	  /**
	   * View setter
	   */
	  function setView (hash)
	  {
	    $scope.views = {
	      purchaser: 	false,
	      manager: 		false,
	      notifier: 	false,
	      reporter:  	false,
	      guarder:  	false
	    };

	    $scope.views[hash] = true;
	  };


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


	  /**
	   * If no params or hashes given in url
	   */
	  if (!$location.hash())
	  {
	    var view = 'purchaser';

	    $location.hash('purchaser');
	  }
	  else
	  {
	    var view = $location.hash();
	  }


	  /**
	   * Set view
	   */
	  setView(view);


	  /**
	   * Switch step
	   */
	  $scope.switchStep = function (step)
	  {
	    // $scope.$watch(step, function ()
	    // {
		    $scope.purchaser = {step: step};
	    // });
	  };

	  $scope.switchStep(1);

	  $scope.increaseStep = function ()
	  {
	  	if ($scope.purchaser.step < 5) $scope.switchStep($scope.purchaser.step + 1);
	  };

	  $scope.decreaseStep = function ()
	  {
	  	if ($scope.purchaser.step > 1) $scope.switchStep($scope.purchaser.step - 1)
	  };


	  $scope.setCountry = function ()
	  {
	  	console.log('selected country -->', $scope.order);
	  }

	}
]);