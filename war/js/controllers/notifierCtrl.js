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

          angular.forEach(emails, function (email)
          {
            $scope.notification.email.targets.push({
              id:     email.id,
              value:  email.contactInfo
            });
          });

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

        }
      };


      /**
       * Initiate setup
       */
      $scope.notifications.local();

    }
  ]);