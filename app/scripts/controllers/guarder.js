define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('guarder',
      [
        '$rootScope', '$scope', 'Core',
        function ($rootScope, $scope, Core)
        {
          $rootScope.fixStyles();


          $scope.blacklist = {};


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

            save: function ()
            {
              if ($scope.blacklist.label !== undefined || $scope.blacklist.contactInfo !== undefined)
              {
                var self = this;

                $rootScope.statusBar.display('Adding a blacklisted number..');

                Core.blacklists.save($scope.blacklist)
                  .then(function (result)
                  {
                    $rootScope.statusBar.display('Updating blacklist group..');

                    var list = [];

                    angular.forEach($rootScope.data.blacklist, function (listed) { list.push(listed.id); });

                    list.push(result.id);

                    Core.groups.update({
                      id:   $rootScope.data.groups.blacklist.id,
                      list: list
                    }).then(function ()
                      {
                        $rootScope.statusBar.off();

                        self.list();
                      });
                  });
              }
            },

            remove: function (number)
            {
              var self = this,
                  list = [];

              $rootScope.statusBar.display('Allowing a blacklisted number..');

              angular.forEach($rootScope.data.blacklist, function (listed)
              {
                if (listed.id !== number.id) { list.push(listed); }
              });

              Core.blacklists.remove(number)
                .then(function ()
                {
                  $rootScope.statusBar.display('Updating blacklist group..');

                  var lids = [];

                  angular.forEach(list, function (l) { lids.push(l.id); });

                  Core.groups.update({
                    id:   $rootScope.data.groups.blacklist.id,
                    list: lids
                  }).then(function ()
                    {
                      $rootScope.statusBar.off();

                      self.list();
                    });
                });
            }
          };


          $rootScope.$on('refreshBlockedNumbers', function ()
          {
            // $scope.blacklists.list();
          });
        }
      ]
    );
  }
);