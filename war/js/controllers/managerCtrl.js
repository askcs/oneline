/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Manager', [])


/**
 * Manager controller
 */
  .controller('managerCtrl',
  [
    '$rootScope', '$scope', '$modal', 'Core',
    function ($rootScope, $scope, $modal, Core)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


      /**
       * Connected number container
       */
      $scope.connection = {
        label:        '',
        contactInfo:  ''
      };


      /**
       * Connected numbers verified switch
       */
      $scope.verified = {
        status: false,
        result: null
      };


      /**
       * Connected numbers
       */
      $scope.connections = {

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
          $rootScope.statusBar.display('Getting the list of connected numbers..');

          Core.connections.list()
            .then(function ()
            {
              $rootScope.statusBar.off();
            });
        },

        /**
         * Save a connected number
         */
        save: function ()
        {
          var self = this;

          $rootScope.statusBar.display('Saving the number..');

          Core.connections.save($scope.connection)
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
          angular.forEach($scope.connectionsList, function (connection)
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

            Core.connections.verify.initiate(number)
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

            Core.connections.verify.confirm(verificationCode, verificationInfoID)
              .then(function (result)
              {
                $rootScope.statusBar.off();

                $scope.verified = {
                  status: true,
                  result: result.verified
                };

                $rootScope.$emit('setView', 'manager');
              });
          }
        }
      };


      /**
       * Fetch localStorage for connectionsList
       */
      $scope.connectionsList = $rootScope;
    }
  ]);