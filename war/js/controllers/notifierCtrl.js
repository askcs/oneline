/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Notifier', [])


/**
 * Notifier controller
 */
  .controller('notifierCtrl',
  [
    '$rootScope', '$scope', 'Core', 'User',
    function ($rootScope, $scope, Core, User)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


      /**
       * Notifications
       */
      $scope.notifications = {

        /**
         * Check status of notification setting
         */
        build: function ()
        {
          var phones = [],
              emails = [];

          // Compile from owner
          angular.forEach(User.owner.get(), function (node)
          {
            if (node.contactInfoTag === 'Phone')
            {
              phones.push(node);
            }

            if (node.contactInfoTag === 'Email')
            {
              emails.push(node);
            }
          });

          // Compile from connected numbers
          angular.forEach(Core.connectedNumbers.local(), function (node)
          {
            if (node.contactInfoTag === 'Phone')
            {
              phones.push(node);
            }

            if (node.contactInfoTag === 'Email')
            {
              emails.push(node);
            }
          });

          // Build notification list object
          $scope.notification = {
            sms: {
              status:   false,
              target:   phones[0].id,
              targets:  []
            },
            email: {
              status:   false,
              target:   emails[0].id,
              targets:  []
            }
          };

          // Setup selected ones
          angular.forEach($scope.notificationSettings, function (setting)
          {
            if (setting.medium === 'Email')
            {
              $scope.notification.email.status = true;
              $scope.notification.email.target = setting.targetContactInfos[0];
            }

            if (setting.medium === 'SMS')
            {
              $scope.notification.sms.status = true;
              $scope.notification.sms.target = setting.targetContactInfos[0];
            }
          });

          // Build list of emails
          angular.forEach(emails, function (email)
          {
            $scope.notification.email.targets.push({
              id:     email.id,
              value:  email.contactInfo
            });
          });

          // Build list of phones
          angular.forEach(phones, function (phone)
          {
            $scope.notification.sms.targets.push({
              id:     phone.id,
              value:  phone.contactInfo
            });
          });

        },

        /**
         * Get local notifications
         */
        local: function ()
        {
          $scope.notificationSettings = Core.notifications.local();

          this.build();

        },

        /**
         * List notifications
         */
        list: function ()
        {
          $rootScope.statusBar.display('Getting notifications information..');

          Core.notifications.list()
            .then(function ()
            {
              $rootScope.statusBar.off();

              this.local();
            });
        },

        /**
         * Get a notification
         */
        get: function ()
        {

        },

        /**
         * Save notification settings
         */
        save: function ()
        {
          console.warn('saving for ->', $scope.notification);
        }
      };


      /**
       * Initiate setup
       */
      $scope.notifications.local();

    }
  ]);