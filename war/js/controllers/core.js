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


	  /**
	   * General order container
	   */
	  $scope.order = {
	  	type: 	'',
	  	country: {}
	  };


		/**
		 * Pass containers
		 */
		$scope.countries 	= $rootScope.config.countries;
		$scope.types 			= $rootScope.config.types;


		/**
		 * Set defaults
		 */
		$scope.defaults = {
			country: 31
		};

		$scope.order.country = $scope.defaults.country;


	  /**
	   * Watcher on order container
	   */
    $scope.$watch('order', function ()
    {
	  	console.log('order -->', $scope.order);
    }, true);


		/**
		 * Reset purchaser
		 */
		$scope.resetPurchaser = function ()
		{
			$scope.order = {
				type: 		'local',
				country: 	$scope.defaults.country.id
			};

			$scope.setNumberType('local');
		};


	  /**
	   * Set number type
	   */
	  $scope.setNumberType = function (type)
	  {  	
		  $scope.number = {
		  	local: 		false,
		  	virtual: 	false,
		  	premium: 	false
		  };

		  $scope.number[type] = true;

		  $scope.order.type 	= type;
	  };


	  /**
	   * Set default number type
	   */
	  $scope.setNumberType('local');


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


	  /**
	   * Switch step in default value
	   */
	  $scope.switchStep(1);


	  /**
	   * Go further in steps
	   */
	  $scope.increaseStep = function ()
	  {
	  	if ($scope.purchaser.step < 5) $scope.switchStep($scope.purchaser.step + 1);
	  };


	  /**
	   * Go back in steps
	   */
	  $scope.decreaseStep = function ()
	  {
	  	if ($scope.purchaser.step > 1) $scope.switchStep($scope.purchaser.step - 1)
	  };

	}
]);