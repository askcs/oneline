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


      $scope.notification = {
        sms: {
          status: false,
          target: null
        },
        email: {
          status: false,
          target: 2,
          targets: [
            {
              id:   1,
              value: 'testing'
            },
            {
              id:   2,
              value: 'another'
            }
          ]
        }
      };

      /**
       * Notifications
       */
      $scope.notifications = {

        /**
         * Get local notifications
         */
        local: function ()
        {

        },

        /**
         * List notifications
         */
        list: function ()
        {
//        $rootScope.statusBar.display('Getting notifications information..');

        Core.notifications.local()
          .then(function (result)
          {
//            $rootScope.statusBar.off();

            console.log('notification settings ->', result);

//            angular.forEach(result, function (setting)
//            {
//              if (setting.medium === 'SMS')
//              {
//                Core.connectedNumbers.get({ id: setting.targetContactInfos[0] })
//                  .then(function (suc)
//                  {
//                    $scope.notification.sms = {
//                      status: true,
//                      target: suc
//                    }
//                  });
//              }
//            });

          });
        },

        /**
         * Get a notification
         */
        get: function ()
        {

        }
      };

    }
  ]);