define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('profile',
      [
        '$rootScope', '$scope', '$location', 'Core', 'Storage',
        function ($rootScope, $scope, $location, Core, Storage)
        {
          $rootScope.fixStyles();

          $scope.profile = {

            data: {},

            process: function (callback)
            {

              var payload = {
                name: {
                  contactInfo:    $scope.profile.data.name,
                  contactInfoTag: 'NAME',
                  groupKeys:      [$rootScope.data.contact.group.id]
                },
                email: {
                  contactInfo:    $scope.profile.data.email,
                  contactInfoTag: 'EMAIL',
                  groupKeys:      [$rootScope.data.contact.group.id]
                },
                address: {
                  contactInfo:    $scope.profile.data.address,
                  contactInfoTag: 'ADDRESS',
                  groupKeys:      [$rootScope.data.contact.group.id]
                },
                phone: {
                  contactInfo:    $scope.profile.data.phone,
                  contactInfoTag: 'PHONE',
                  groupKeys:      [$rootScope.data.contact.group.id]
                }
              };


              angular.forEach(angular.fromJson(Storage.get('connections')), function (connection)
              {
                if (connection.groupKeys[0] === $rootScope.data.contact.group.id)
                {
                  switch (connection.contactInfoTag.toString().toUpperCase())
                  {
                  case 'NAME':
                    payload.name.id = connection.id;
                    break;
                  case 'EMAIL':
                    payload.email.id = connection.id;
                    break;
                  case 'ADDRESS':
                    payload.address.id = connection.id;
                    break;
                  case 'PHONE':
                    payload.phone.id = connection.id;
                    break;
                  }
                }
              });


              var arrayyed = [];

              angular.forEach(payload, function (node)
              {
                arrayyed.push(node);
              });

              console.log('arrayed ->', arrayyed);

              Core.connections.profiler(arrayyed)
                .then(function (result)
                {
                  console.log('returned result ->', result);

                  Core.factory.process();

                  callback();
                });
            },

            validate: function ()
            {
              var result;

              if ($scope.profile.data.name  === undefined ||
                  $scope.profile.data.email === undefined ||
                  $scope.profile.data.phone === undefined)
              {
                $('#modal-profile-btn-save')
                  .attr('disabled', 'disabled');

                result = false;
              }
              else
              {
                $('#modal-profile-btn-save')
                  .removeAttr('disabled');

                result = true;
              }

              return result;
            },

            edit: function ()
            {
              if (this.validate())
              {
                $rootScope.profileEditing = true;

                $('#modal-profile-btn-save')
                  .text('Saving..')
                  .attr('disabled', 'disabled');

                this.process(function ()
                {
                  console.log('callback is executed.');

                  $('#modal-profile-btn-save')
                    .text('Save')
                    .removeAttr('disabled');

                  $rootScope.profileEditing = false;

                  $rootScope.profileEdited = {
                    status: true,
                    result: true
                  };
                });
              }
            }
          };

          if ($location.path() !== '/login')
          {
            $scope.profile.data = $rootScope.data.account;
          }
        }
      ]
    );
  }
);