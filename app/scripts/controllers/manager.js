define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('manager',
      [
        // TODO: add $modal later on
        '$rootScope', '$scope', 'Core',
        function ($rootScope, $scope, Core)
        {
          $rootScope.fixStyles();


          $scope.connection = {
            label:            '',
            contactInfo:      '',
            contactInfoTag:   'Phone'
          };


          $scope.verified = {
            status: false,
            result: null
          };


          $scope.connections = {

            local: function ()
            {
              return Core.connections.local();
            },

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
                var self = this;

                $rootScope.statusBar.display('Saving the number..');

                Core.connections.save($scope.connection)
                  .then(function ()
                  {
                    $rootScope.statusBar.off();

                    $scope.connection = {
                      label:            '',
                      contactInfo:      '',
                      contactInfoTag:   'Phone'
                    };

                    self.list();
                  });
              }
            },

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

            edit: function (number)
            {
              angular.forEach($rootScope.data.connections, function (connection)
              {
                if (number.id === connection.id) { $scope.connection = connection; }
              });
            },

            verify: {
              initiate: function (number)
              {
                $rootScope.statusBar.display('Verification call inited or message is being sent..');

                Core.connections.verify.initiate(number)
                  .then(function (result)
                  {
                    console.log('result ->', result);

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

                    Core.factory.process();

                    $rootScope.$emit('setView', 'manager');
                  });
              }
            }
          };

        }
      ]
    );
  }
);