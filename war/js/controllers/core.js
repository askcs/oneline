/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Core', [])


/**
 * Core controller
 */
.controller('core',
[
	'$rootScope', '$scope', '$location', 'Generators',
	function ($rootScope, $scope, $location, Generators)
	{
		/**
		 * Fix styles
		 */
		$rootScope.fixStyles();


	  /**
	   * General order container
	   */
	  $scope.order = {
	  	package: 	'',
	  	country: 	{}
	  };


		/**
		 * Pass containers
		 */
		$scope.packages 	= $rootScope.config.packages;
		$scope.countries 	= $rootScope.config.countries;

		$scope.virtuals 			= $rootScope.config.virtuals;


		/**
		 * Set defaults
		 */
		$scope.defaults = {
			package: 	1,
			country: 	31
		};

		$scope.order.country = $scope.defaults.country;


	  /**
	   * Watcher on -order- container
	   */
    $scope.$watch('order', function ()
    {
	  	console.log('order -->', $scope.order);

	  	$scope.regions = $rootScope.config.regions[$scope.order.country];

    }, true);





		/**
		 * Reset purchaser
		 */
		$scope.resetPurchaser = function ()
		{
			$scope.order = {
				package: 	null,
				country: 	$scope.defaults.country.id,
				region: 	null
			};
		};


		/**
		 * Set region
		 */
		$scope.setRegion = function ()
		{
			if ($scope.order.region)
				$scope.numbers = Generators.list($scope.order.country, $scope.order.region);
		}


	  /**
	   * Set number type
	   */
	  $scope.setPackage = function (pack)
	  {  
		  $scope.order.package 	= Number(pack);
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
	    $scope.purchaser = {step: step};
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