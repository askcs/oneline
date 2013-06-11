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
	}
]);