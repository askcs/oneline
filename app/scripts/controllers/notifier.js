define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('notifier',
      [
        '$rootScope', '$scope', 'Core',
        function ($rootScope, $scope, Core)
        {
          $rootScope.fixStyles();

          $scope.settings = {

            local: function ()
            {
              $scope.notificationSettings = Core.settings.local();
            },

            list: function ()
            {
              $rootScope.statusBar.display('Getting notifications information..');

              Core.settings.list()
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  Core.factory.process();
                });
            },

            get: function (type)
            {
              return $rootScope.data.settings[type].original;
            },

            process: function (settings)
            {
              console.log('changing these settings ->', settings);

              if (settings.removed.length > 0)
                console.log('there are some removals');
            },

            update: function (type, id)
            {
              console.log('updating for ->', type, id);

              $rootScope.statusBar.display('Getting notifications information..');

              Core.settings.list()
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  this.local();
                });
            },

            remove: function (type)
            {
              console.log('deleting for ->', type);
            },

            add: function (type, id)
            {
              console.log('creating for ->', type, id);
            },

            // TODO: Always assume that setting exists
            exists: function (type)
            {
              var exists = false;

              angular.forEach($scope.notificationSettings, function (setting)
              {
                if (setting.medium === type)
                {
                  exists = true;
                }
              });

              return exists;
            },

            save: function ()
            {
              var self = this;

              var settings = {
                  changed: {
                    sms: {
                      status: false
                    },
                    email: {
                      status: false
                    }
                  },
                  added: {
                    sms: {
                      status: false
                    },
                    email: {
                      status: false
                    }
                  },
                  removed: {
                    sms:    false,
                    email:  false
                  }
                },
                tmp = {
                  sms:    [],
                  email:  []
                };

              if ($rootScope.data.settings.sms.status)
              {
                if ($rootScope.data.settings.sms.target !== this.get('sms'))
                {
                  tmp.sms.push($rootScope.data.settings.sms.target);

                  settings.changed.sms = {
                    status: true,
                    value:  tmp.sms
                  };
                }
                else
                {
                  tmp.sms.push($rootScope.data.settings.sms.target);

                  settings.added.sms = {
                    status: true,
                    value:  tmp.sms
                  };
                }
              }
              else
              {
                settings.removed.sms = true;
              }

              if ($rootScope.data.settings.email.status)
              {
                if ($rootScope.data.settings.email.target !== this.get('email'))
                {
                  tmp.email.push($rootScope.data.settings.email.target);

                  settings.changed.email = {
                    status: true,
                    value:  tmp.email
                  };
                }
                else
                {
                  tmp.email.push($rootScope.data.settings.email.target);

                  settings.added.email = {
                    status: true,
                    value:  tmp.email
                  };
                }
              }
              else
              {
                settings.removed.email = true;
              }

              $rootScope.statusBar.display('Changing notifications settings..');

              Core.settings.save(settings)
                .then(function ()
                {
                  self.list();
                });
            }
          };

          $scope.settings.local();
        }
      ]
    );
  }
);