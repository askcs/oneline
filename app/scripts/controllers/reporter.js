define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('reporter',
      [
        '$rootScope', '$scope', 'Core',
        function ($rootScope, $scope, Core)
        {
          $rootScope.fixStyles();


          $scope.logs = [];


          $scope.logs = {

            local: function ()
            {
              return Core.connections.local();
            },

            list: function ()
            {
              $rootScope.statusBar.display('Getting the list of recent calls..');

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

                  var list = [];

                  angular.forEach($rootScope.data.blacklist, function (listed)
                  {
                    list.push(listed.id);
                  });

                  list.push(result.id);

                  Core.groups.update({
                    id:   $rootScope.data.groups.blacklist.id,
                    list: list
                  }).then(function ()
                    {
                      $rootScope.statusBar.off();

                      $scope.logs.list();

                      $rootScope.$broadcast('refreshBlockedNumbers');
                    });
                });
            },

            allow: function (log)
            {

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
      ]
    );
  }
);