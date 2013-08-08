/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Guarder', [])


/**
 * Guarder controller
 */
  .controller('guarderCtrl',
  [
    '$rootScope', '$scope', 'Core',
    function ($rootScope, $scope, Core)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


      /**
       * Reset
       */
      $scope.blacklist = {};


      /**
       * Blacklists
       */
      $scope.blacklists = {

        /**
         * Get the locals
         */
        local: function ()
        {},

        /**
         * List blacklists
         */
        list: function ()
        {
          $rootScope.statusBar.display('Getting the list of blacklisted numbers..');

          Core.groups.list()
            .then(function ()
            {
              Core.connections.list()
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  $scope.blacklist = {};

                  Core.factory.process();
                });
            });

        },

        /**
         * Save a blacklisted number
         */
        save: function ()
        {
          var self = this;

          $rootScope.statusBar.display('Adding a blacklisted number..');

          Core.blacklists.save($scope.blacklist)
            .then(function (result)
            {
              $rootScope.statusBar.display('Updating blacklist group..');

              // Populate blacklist
              var list = [];
              angular.forEach($rootScope.data.blacklist, function (listed)
              {
                list.push(listed.id);
              });
              list.push(result.id);

              // Park node temporarily
//              $rootScope.data.tmp.push(result);

              // Update blacklist group
              Core.groups.update({
                id:   $rootScope.data.groups.blacklist.id,
                list: list
              }).then(function ()
                {
                  $rootScope.statusBar.off();

                  self.list();
                });
            });
        },

        /**
         * Remove a blacklisted number
         */
        remove: function ()
        {

        }
      };
    }
  ]);