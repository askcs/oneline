/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Core', [])


/**
 * Core controller
 */
.controller('core',
[
	'$rootScope', '$scope', '$location', 'Generators', 'Core',
	function ($rootScope, $scope, $location, Generators, Core)
	{
		/**
		 * Fix styles
		 */
		$rootScope.fixStyles();


    /**
     * General order container
     */
    $scope.order = {
      package:  null,
      country:  31
      // package: 1,
      // country: 31,
      // region:  10,
      // number:  1234567
    };

    // $scope.numbers = Generators.list();


		/**
		 * Pass containers
		 */
		$scope.packages   = $rootScope.config.packages;
		$scope.countries  = $rootScope.config.countries;
		$scope.virtuals   = $rootScope.config.virtuals;


		/**
		 * Set defaults
		 */
		$scope.defaults = {
      package:  1,
      country:  31
		};

		$scope.order.country = $scope.defaults.country;


    /**
     * Watcher on -order- container
     */
    $scope.$watch('order', function ()
    {
      $scope.regions	= $rootScope.config.regions[$scope.order.country];
      $scope.ranges   = $rootScope.config.ranges[$scope.order.virtual];

      if ($scope.order.package)
      {
        var prices = {
          monthly:  $rootScope.config.packages[$scope.order.package].prices.monthly,
          yearly:   $rootScope.config.packages[$scope.order.package].prices.yearly
        };

        $scope.prices = {
          monthly:  ($scope.order.premium) ? prices.monthly.premium : prices.monthly.normal,
          yearly:   ($scope.order.premium) ? prices.yearly.premium : prices.yearly.normal
        };
      }

    }, true);


		/**
		 * Reset purchaser
		 */
		$scope.resetPurchaser = function ()
		{
			$scope.order = {
        package:  null,
        country:  $scope.defaults.country,
        region:   null,
        number:   null
			};

			$scope.switchStep(1);
		};


		/**
		 * Set region
		 */
		$scope.setRegion = function ()
		{
			if ($scope.order.region)
      {
        $scope.numbers = Generators.list();
      }
		};


		/**
		 * Set virtual area code
		 */
		$scope.setVirtualArea = function ()
		{
			if ($scope.order.virtual)
      {
        $scope.numbers = Generators.list();
      }
		};


    /**
     * Set number type
     */
    $scope.setPackage = function (pack)
    {
      $scope.order.package  = Number(pack);

      $scope.order.number   = null;
    };


    /**
     * Verification box
     */
    $scope.modal = {
      content:  'Hello Modal',
      saved:    false
    };


    /**
     * Connected number container
     */
    $scope.connection = {
      contactInfo:    '',
      contactInfoTag: ''
    };


    /**
     * Connected numbers
     */
    $scope.connectedNumbers = {

      /**
       * List numbers
       */
      list: function ()
      {
        $scope.connection = {};

        $scope.connectedNumbersLoaded = false;

        Core.connectedNumbers.list()
          .then(function (numbers)
          {
            $scope.connectedNumbersLoaded = true;

            $scope.connectedNumbersList = numbers;
          });
      },

      /**
       * Save a connected number
       */
      save: function ()
      {
        var self = this;

        $rootScope.statusBar.display('Saving the number..');

        Core.connectedNumbers.save($scope.connection)
          .then(function ()
          {
            $rootScope.statusBar.off();

            self.list();
          });
      },

      /**
       * Delete a number
       */
      remove: function (number)
      {
        var self = this;

        $rootScope.statusBar.display('Deleting a number..');

        Core.connectedNumbers.remove(number)
          .then(function ()
          {
            $rootScope.statusBar.off();

            self.list();
          });
      },

      /**
       * Edit a number
       */
      edit: function (number)
      {
        angular.forEach($scope.connectedNumbersList, function (connection)
        {
          if (number.id === connection.id)
          {
            $scope.connection = connection;
          }
        });
      }
    };


    /**
     * Tabs arranger
     */
    $scope.tabs = {
      normals:  true,
      premiums: false
    };



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
        $scope.connectedNumbers.list();
        break;

      case 'notifier':
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
      if ($scope.purchaser.step < 3 && $scope.order.number)
      {
        $scope.switchStep($scope.purchaser.step + 1);
      }
    };


    /**
     * Go back in steps
     */
    $scope.decreaseStep = function ()
    {
      if ($scope.purchaser.step > 1)
      {
        $scope.switchStep($scope.purchaser.step - 1);
      }
    };


	}
]);