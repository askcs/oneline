define(
  ['controllers/controllers', 'config'],
  function (controllers, config)
  {
    'use strict';

    controllers.controller('purchaser',
      [
        '$rootScope', '$scope', 'Generators',
        function ($rootScope, $scope, Generators)
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
           * Tabs arranger
           */
          $scope.tabs = {
            normals:  true,
            premiums: false
          };


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
      ]
    );
  }
);