define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('profile',
      [
        '$rootScope', '$scope', 'Core', 'Storage',
        function ($rootScope, $scope, Core, Storage)
        {
          $rootScope.fixStyles();

          $scope.profile = {

            data: $rootScope.data.account,

            edit: function ()
            {
              $rootScope.statusBar.display('Verifying your number and code..');

              var payload = {};

              if ($scope.profile.data.name !== '')
              {
                payload.name = {
                  contactInfo:    $scope.profile.data.name,
                  contactInfoTag: 'NAME',
                  groupKeys:      [$rootScope.data.contact.group.id]
                };
              }

              if ($scope.profile.data.email !== '')
              {
                payload.email = {
                  contactInfo:    $scope.profile.data.email,
                  contactInfoTag: 'EMAIL',
                  groupKeys:      [$rootScope.data.contact.group.id]
                };
              }

              if ($scope.profile.data.address !== '')
              {
                payload.address = {
                  contactInfo:    $scope.profile.data.address,
                  contactInfoTag: 'ADDRESS',
                  groupKeys:      [$rootScope.data.contact.group.id]
                };
              }

              if ($scope.profile.data.phone !== '')
              {
                payload.phone = {
                  contactInfo:    $scope.profile.data.phone,
                  contactInfoTag: 'PHONE',
                  groupKeys:      [$rootScope.data.contact.group.id]
                };
              }

              angular.forEach(angular.fromJson(Storage.get('connections')), function (connection)
              {
                if (connection.groupKeys[0] === $rootScope.data.contact.group.id)
                {
                  switch (connection.contactInfoTag.toString().toUpperCase())
                  {
                  case 'NAME':
                    connection.contactInfo = $scope.profile.data.name;
                    payload.name = connection;
                    break;
                  case 'EMAIL':
                    connection.contactInfo = $scope.profile.data.email;
                    payload.email = connection;
                    break;
                  case 'ADDRESS':
                    connection.contactInfo = $scope.profile.data.address;
                    payload.address = connection;
                    break;
                  case 'PHONE':
                    connection.contactInfo = $scope.profile.data.phone;
                    payload.phone = connection;
                    break;
                  }
                }
              });

              var arrayyed = [];

              angular.forEach(payload, function (node)
              {
                arrayyed.push(node);
              });

              Core.connections.profiler(arrayyed)
                .then(function (result)
                {
                  console.log('returned result ->', result);

                  Core.factory.process();
                });
            }
          }
        }
      ]
    );
  }
);