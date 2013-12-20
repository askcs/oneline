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

          $rootScope.profile = {

            data: {},

            process: function (callback)
            {
              var payload = {
                name: {
                  contactInfo:    $rootScope.profile.data.name,
                  contactInfoTag: 'NAME',
                  groupKeys:      [$rootScope.data.owner.group.id]
                },
                email: {
                  contactInfo:    $rootScope.profile.data.email,
                  contactInfoTag: 'EMAIL',
                  groupKeys:      [$rootScope.data.owner.group.id]
                },
                address: {
                  contactInfo:    $rootScope.profile.data.address,
                  contactInfoTag: 'ADDRESS',
                  groupKeys:      [$rootScope.data.owner.group.id]
                },
                phone: {
                  contactInfo:    $rootScope.profile.data.phone,
                  contactInfoTag: 'PHONE',
                  groupKeys:      [$rootScope.data.owner.group.id]
                }
              };

              angular.forEach(angular.fromJson(Storage.get('connections')), function (connection)
              {
                if (connection.groupKeys[0] === $rootScope.data.owner.group.id)
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

              var arr = [];

              angular.forEach(payload, function (node)
              {
                arr.push(node);
              });

              Core.connections.profiler(arr)
                .then(function (result)
                {
                  if (result.error)
                  {
                    console.log('error happened?');

                    $('#modal-profile-btn-save')
                      .text('Save')
                      .removeAttr('disabled');

                    $rootScope.profileEdited = {
                      status: true,
                      result: false
                    };
                  }
                  else
                  {
                    Core.factory.process();

                    $rootScope.$watch(function ()
                    {
                      $rootScope.profileEditing = false;
                    });

                    callback();
                  }
                });
            },

            validate: function ()
            {
              var result;

              if ($rootScope.profile.data.name  === undefined ||
                $rootScope.profile.data.email === undefined ||
                $rootScope.profile.data.phone === undefined)
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
                  $('#modal-profile-btn-save')
                    .text('Save')
                    .removeAttr('disabled');

                  $rootScope.profileEdited = {
                    status: true,
                    result: true
                  };

                  $rootScope.profileEdit = false;
                });
              }
            }
          };

          if ($location.path() !== '/login')
          {
            $rootScope.profile.data = {};

            $rootScope.profile.data = $rootScope.data.account;
          }
        }
      ]
    );
  }
);