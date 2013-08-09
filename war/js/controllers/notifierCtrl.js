/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Notifier', [])


/**
 * Notifier controller
 */
  .controller('notifierCtrl',
  [
    '$rootScope', '$scope', 'Core',
    function ($rootScope, $scope, Core)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


//      Core.settings.update({
//        id:   27004,
//        target: []
//      });


      /**
       * Notifications
       */
      $scope.settings = {

        /**
         * Get local notifications
         */
        local: function ()
        {
          $scope.notificationSettings = Core.settings.local();
        },

        /**
         * List notifications
         */
        list: function ()
        {
          $rootScope.statusBar.display('Getting notifications information..');

          Core.settings.list()
            .then(function ()
            {
              $rootScope.statusBar.off();

              this.local();
            });
        },

        /**
         * Get a notification
         */
        get: function (type)
        {
          var i;

          for (i = 0; i < $scope.notificationSettings.length; i++)
          {
            if ($scope.notificationSettings[i].medium === type)
            {
              return $scope.notificationSettings[i].targetContactInfos[0];
            }
          }

          return false;
        },

        /**
         * Process settings
         */
        process: function (settings)
        {
          console.log('changing these settings ->', settings);

          if (settings.removed.length > 0)
          {
            console.log('there are some removals');
          }
        },

        /**
         * Change a setting
         */
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

        /**
         * Delete a setting
         */
        remove: function (type)
        {
          console.log('deleting for ->', type);
        },

        /**
         * Add a setting
         */
        add: function (type, id)
        {
          console.log('creating for ->', type, id);
        },

        /**
         * Check whether a setting already exists
         */
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

        /**
         * Save notification settings
         */
        save: function ()
        {
          var settings = {
            changed: [],
            added:   [],
            removed: []
          };

          /**
           * SMS setting
           */
          if ($scope.notification.sms.status)
          {
            if (this.exists('SMS'))
            {
              if ($scope.notification.sms.target !== this.get('SMS'))
              {
                settings.changed.push('SMS', $scope.notification.sms.target);
              }
            }
            else
            {
              settings.added.push('SMS', $scope.notification.sms.target);
            }
          }
          else
          {
            if (this.exists('SMS'))
            {
              settings.removed.push('SMS');
            }
          }

          /**
           * Email setting
           */
          if ($scope.notification.email.status)
          {
            if (this.exists('Email'))
            {
              if ($scope.notification.email.target !== this.get('Email'))
              {
                settings.changed.push('Email', $scope.notification.email.target);
              }
            }
            else
            {
              settings.added.push('Email', $scope.notification.email.target);
            }
          }
          else
          {
            if (this.exists('Email'))
            {
              settings.removed.push('Email');
            }
          }
        }
      };


      /**
       * Initiate setup
       */
      $scope.settings.local();

    }
  ]);