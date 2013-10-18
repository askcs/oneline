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

      $scope.pushMe = function ()
      {
        console.log('pushed');
      };


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

          console.log('getting the list of recents');

          $scope.logsLoading = true;

          Core.logs.list()
            .then(function (logs)
            {
              $rootScope.statusBar.off();

              $scope.logsLoading = false;

              angular.forEach(logs, function (log)
              {
                angular.forEach($rootScope.data.blacklist, function (id)
                {
                  log.blocked = !!(log.address == id.contactInfo);
                });
              });

              $scope.logsList = logs;

              // Core.factory.process();
            });
        },

        /**
         * Block a recent number
         */
        block: function (log)
        {
          var self = this;

          $rootScope.statusBar.display('Adding a blacklisted number..');

          Core.blacklists.save({
            contactInfo: log.address,
            label: 'From Logs'
          })
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

                  console.log('coming to here');

                  $scope.logs.list();

                  $rootScope.$broadcast('refreshBlockedNumbers');
                });
            });
        },

        /**
         * Allow a number
         */
        allow: function (log)
        {
          console.log('allow log ->', log);

//          $rootScope.statusBar.display('Adding a blacklisted number..');
//
//          Core.blacklists.save($scope.blacklist)
//            .then(function (result)
//            {
//              $rootScope.statusBar.display('Updating blacklist group..');
//
//              // Populate blacklist
//              var list = [];
//              angular.forEach($rootScope.data.blacklist, function (listed)
//              {
//                list.push(listed.id);
//              });
//              list.push(result.id);
//
//              // Park node temporarily
////              $rootScope.data.tmp.push(result);
//
//              // Update blacklist group
//              Core.groups.update({
//                id:   $rootScope.data.groups.blacklist.id,
//                list: list
//              }).then(function ()
//                {
//                  $rootScope.statusBar.off();
//
//                  self.list();
//                });
//            });
        }
      };

      $scope.logs.list();

    }
  ]);