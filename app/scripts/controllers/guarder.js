define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('guarder',
      [
        '$rootScope', '$scope', 'Core', 'Storage',
        function ($rootScope, $scope, Core, Storage)
        {
          $rootScope.fixStyles();

          $scope.blacklist = {};


          $scope.resetBlacklist = function ()
          {
            $scope.blacklist = {
              label:          '',
              contactInfo:    ''
            };
          };


          $scope.blacklists = {

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

            block: function ()
            {
              if ($scope.blacklist.label !== '' || $scope.blacklist.contactInfo !== '')
              {
                $rootScope.statusBar.display('Adding a blacklisted number..');

                Core.blacklists.save({
                  contactInfo:  $scope.blacklist.contactInfo,
                  label:        $scope.blacklist.label
                })
                  .then(function (result)
                  {
                    $rootScope.statusBar.off();

                    $scope.resetBlacklist();

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
            },

            allow: function (number)
            {
              $rootScope.statusBar.display('Removing a blacklisted number..');

              Core.blacklists.remove(number)
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  Core.factory.process();
                });
            }
          };
        }
      ]
    );
  }
);