/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Reporter', [])


/**
 * Reporter controller
 */
  .controller('reporterCtrl',
  [
    '$rootScope', '$scope', 'Core',
    function ($rootScope, $scope, Core)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


      $scope.logs = [];


      /**
       * Connected numbers
       */
      $scope.logs = {

        /**
         * Get local list
         */
        local: function ()
        {
          return Core.connections.local();
        },

        /**
         * List numbers
         */
        list: function ()
        {
          $rootScope.statusBar.display('Getting the list of recent calls..');

          $scope.logsLoading = true;

          Core.logs.list()
            .then(function (logs)
            {
              $rootScope.statusBar.off();

              $scope.logsLoading = false;

              $scope.logs = logs;

              // Core.factory.process();
            });
        },

        /**
         * Save a connected number
         */
        save: function ()
        {
          if ($scope.connection.label !== '' || $scope.connection.contactInfo !== '')
          {
            var self = this;

            $rootScope.statusBar.display('Saving the number..');

            Core.connections.save($scope.connection)
              .then(function ()
              {
                $rootScope.statusBar.off();

                $scope.connection = {
                  label:            '',
                  contactInfo:      '',
                  contactInfoTag:   'Phone'
                };

                self.list();
              });
          }
        },

        /**
         * Delete a number
         */
        remove: function (number)
        {
          var self = this;

          $rootScope.statusBar.display('Deleting a number..');

          Core.connections.remove(number)
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
          angular.forEach($rootScope.data.connections, function (connection)
          {
            if (number.id === connection.id)
            {
              $scope.connection = connection;
            }
          });
        }
      };

      $scope.logs.list();

    }
  ]);