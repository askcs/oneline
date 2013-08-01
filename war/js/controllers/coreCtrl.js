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
        virtual:  null,
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
      },

      /**
       * Verify a number
       */
      verify: {

        /**
         * Send a verification number
         */
        initiate: function (number)
        {
          $rootScope.statusBar.display('Verification call inited or message is being sent..');

          Core.connectedNumbers.verify.initiate(number)
            .then(function (result)
            {
              $rootScope.statusBar.off();

              $scope.toBeVerified = number;

              $scope.verificationInfoID = result.verificationInfo.id;

              $modal({
                template: '/js/views/elements/con_verification.html',
                persist:  true,
                show:     true,
                backdrop: 'static',
                scope:    $scope
              });
            });
        },

        /**
         * Confirm a verification
         */
        confirm: function (verificationCode, verificationInfoID)
        {
          $rootScope.statusBar.display('Verifying your number and code..');

          Core.connectedNumbers.verify.confirm(verificationCode, verificationInfoID)
            .then(function (result)
            {
              $rootScope.statusBar.off();

              $scope.verified = {
                status: true,
                result: result.verified
              };

              setView('manager');
            });
        }
      }
    };


    /**
     * connected numbers verified switch
     */
    $scope.verified = {
      status: false,
      result: null
    };


    /**
     * Tabs arranger
     */
    $scope.tabs = {
      normals:  true,
      premiums: false
    };


    $scope.notification = {
      sms: {
        status: false,
        target: null
      },
      email: {
        status: false,
        target: 2,
        targets: [
          {
            id:   1,
            value: 'testing'
          },
          {
            id:   2,
            value: 'another'
          }
        ]
      }
    };

    /**
     * Notifications
     */
    $scope.notifications = {

      /**
       * List notifications
       */
      list: function ()
      {
//        $rootScope.statusBar.display('Getting notifications information..');
//
//        Core.notifications.list()
//          .then(function (result)
//          {
//            $rootScope.statusBar.off();
//
//            console.log('notification settings ->', result);
//
////            angular.forEach(result, function (setting)
////            {
////              if (setting.medium === 'SMS')
////              {
////                Core.connectedNumbers.get({ id: setting.targetContactInfos[0] })
////                  .then(function (suc)
////                  {
////                    $scope.notification.sms = {
////                      status: true,
////                      target: suc
////                    }
////                  });
////              }
////            });
//
//          });
      },

      /**
       * Get a notification
       */
      get: function ()
      {

      }
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
        $scope.notifications.list();
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