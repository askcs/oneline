define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('reporter',
      [
        '$rootScope', '$scope', 'Core', 'Storage',
        function ($rootScope, $scope, Core, Storage)
        {
          $rootScope.fixStyles();

          $scope.logs = [];

          $scope.logs = {
            local: function () { return Core.connections.local(); },

            list: function ()
            {
              $rootScope.statusBar.display('Getting the list of recent calls..');

              $scope.logsLoading = true;

              Core.logs.list()
                .then(function (logs)
                {
                  $rootScope.statusBar.off();

                  $scope.logsLoading = false;

//                  angular.forEach(logs, function (log)
//                  {
//                    angular.forEach($rootScope.data.blacklist.list, function (id)
//                    {
//                      log.blocked = !!(log.address === id.contactInfo);
//                    });
//                  });

                  $scope.logsList = logs;
                });
            },

            block: function (log)
            {
              $rootScope.statusBar.display('Adding a blacklisted number..');

              Core.blacklists.save({
                contactInfo: log.address,
                label: 'From Logs'
              })
                .then(function (result)
                {
                  $rootScope.statusBar.off();

                  var connections = angular.fromJson(Storage.get('connections'));

                  connections.push(result);

                  Storage.add('connections', angular.toJson(connections));

                  var groups = angular.fromJson(Storage.get('groups'));

                  angular.forEach(groups, function (group)
                  {
                    if (group.id === $rootScope.data.blacklist.group.id) { group.contactInfoIds.push(result.id); }
                  });

                  Storage.add('groups', angular.toJson(groups));

                  Core.factory.process();

                  $rootScope.$broadcast('setView', 'guarder');
                });
            }
          };


          $scope.logs.list();
        }
      ]
    );
  }
);