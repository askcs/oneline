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

          console.log('-->', $rootScope.data.connected.list);

          $('#verifieds').sortable(
            {
              items: 'tbody tr',

              update: function ()
              {
                var row = $('#verifieds tbody tr');

                $.each(row, function (i)
                {
                  $rootScope.data.sequence[i] = $(row[i]).attr('data-rank');
                });
              }
            }
          );


          $scope.cleanSequence = function ()
          {
            $rootScope.statusBar.display('Cleaning the sequence..');

            Core.scenarios.run({})
              .then(function ()
              {
                $rootScope.statusBar.off();
              });
          };


          $scope.reGenerate = function ()
          {
            $rootScope.statusBar.display('Regenerating the list..');

            $('#sequenceBtn').attr('disabled', 'disabled');

            Core.scenarios.run()
              .then(function (result)
              {
                $rootScope.statusBar.off();

                var groups = angular.fromJson(Storage.get('groups'));

                angular.forEach(groups, function (group)
                {
                  if (group.scenarioId == result.scenarioId)
                  {
                    group.contactInfoSequence = result.contactInfoSequence;
                  }
                });

                $('#sequenceBtn').removeAttr('disabled');

                Storage.add('groups', angular.toJson(groups));

                Core.factory.process();
              });
          };

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

                    $rootScope.phoneNumberParsed.message = '';

                    $scope.resetConnection();

                    Core.factory.process();
                  });
              }
            },

            remove: function (number, section)
            {
              $rootScope.statusBar.display('Deleting a number..');

              Core.connections.remove(number, section)
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  Core.factory.process();
                });
            },

            edit: function (number)
            {
              console.log('number ->', number);

              angular.forEach($rootScope.data.connected.list.notVerified, function (connection)
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

                    if (result.verified)
                    {
                      var connections = angular.fromJson(Storage.get('connections'));

                      angular.forEach(connections, function (connection)
                      {
                        if (connection.id === number.id)
                        {
                          connection.verified = true;

                          var sequence  = $rootScope.data.sequence,
                              count     = 0,
                              groups    = angular.fromJson(Storage.get('groups'));

                          angular.forEach($rootScope.data.sequence, function () { count++; });

                          sequence[count] = connection.id;

                          $rootScope.data.sequence = sequence;

                          angular.forEach(groups, function (group)
                          {
                            if (group.name.toString().toUpperCase() == 'CONNECTEDNUMBERSEQUENCE')
                            {
                              group.contactInfoSequence = sequence;
                            }
                          });

                          Storage.add('groups', angular.toJson(groups));
                        }
                      });

                      Storage.add('connections', angular.toJson(connections));

                      Core.factory.process();
                    }

                    $scope.resetVerifiers();

                  });
              }
            }
          };
        }
      ]
    );
  }
);