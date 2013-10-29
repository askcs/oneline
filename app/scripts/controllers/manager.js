define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('manager',
      [
        '$rootScope', '$scope', 'Core', 'Storage',
        function ($rootScope, $scope, Core, Storage)
        {
          $rootScope.fixStyles();


          /*
          Core.groups.update({
           id:   $rootScope.data.connected.group.id,
           list: []
          });
          */
          /*
          Core.settings.update({
            id:   27004,
            target: []
          });
          Core.settings.update({
            id:   24003,
            target: []
          });
          */
          /*
          Core.connections.remove({
            id: 4785074604081152
          });
          Core.connections.remove({
            id: 5642556234792960
          });
          */


          $scope.resetConnection = function ()
          {
            $scope.connection = {
              label:          '',
              contactInfo:    '',
              contactInfoTag: 'Phone'
            };
          };

          $scope.resetConnection();

          $scope.verified = {
            status: false,
            result: null
          };

          $scope.verifying = {};
          $scope.verificationCode = {};

          $scope.resetVerifiers = function ()
          {
            angular.forEach($rootScope.data.connected.list, function (connection)
            {
              $scope.verifying[connection.id] = false;

              $scope.verificationCode[connection.id] = '';

              $('#verifyBtn-' + connection.id)
                .text('Verify')
                .removeAttr('disabled');
            });
          };


          $scope.connections = {

            local: function () { return Core.connections.local(); },

            list: function ()
            {
              $rootScope.statusBar.display('Getting the list of connected numbers..');

              Core.connections.list()
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  Core.factory.process();
                });
            },

            save: function ()
            {
              if ($scope.connection.label !== '' || $scope.connection.contactInfo !== '')
              {
                $rootScope.statusBar.display('Saving the number..');

                Core.connections.save($scope.connection)
                  .then(function ()
                  {
                    $rootScope.statusBar.off();

                    $scope.resetConnection();

                    Core.factory.process();
                  });
              }
            },

            remove: function (number)
            {
              $rootScope.statusBar.display('Deleting a number..');

              Core.connections.remove(number)
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  Core.factory.process();
                });
            },

            edit: function (number)
            {
              angular.forEach($rootScope.data.connected.list, function (connection)
              {
                if (number.id === connection.id) { $scope.connection = connection; }
              });
            },

            verify: {
              initiate: function (number)
              {
                $rootScope.statusBar.display('Verification call initiated or message is being sent..');

                $scope.resetVerifiers();

                $('#verifyBtn-' + number.id)
                  .text('Sending verification code..')
                  .attr('disabled', 'disabled');

                Core.connections.verify.initiate(number)
                  .then(function (result)
                  {
                    $scope.resetVerifiers();

                    $scope.verifying[number.id] = true;

                    $rootScope.statusBar.off();

                    $scope.verificationInfoID = result.verificationInfo.id;
                  });
              },

              confirm: function (number)
              {
                $rootScope.statusBar.display('Verifying your number and code..');

                Core.connections.verify.confirm($scope.verificationCode[number.id], $scope.verificationInfoID)
                  .then(function (result)
                  {
                    $rootScope.statusBar.off();

                    $scope.verified = {
                      status: true,
                      result: result.verified
                    };

                    var connections = angular.fromJson(Storage.get('connections'));

                    angular.forEach(connections, function (connection)
                    {
                      if (connection.id === number.id) { connection.verified = true; }
                    });

                    Storage.add('connections', angular.toJson(connections));

                    $scope.resetVerifiers();

                    Core.factory.process();
                  });
              }
            }
          };

        }
      ]
    );
  }
);