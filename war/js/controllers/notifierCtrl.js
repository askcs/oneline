/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Notifier', [])


/**
 * Notifier controller
 */
  .controller('notifierCtrl',
  [
    '$rootScope', '$scope',
    function ($rootScope, $scope)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();

      /**
       * Listener for listing notifications
       */
      $rootScope.$on('notificationsList', function ()
      {
        $scope.notifications.list();
      });


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
         * List notifications
         */
        list: function ()
        {
//        $rootScope.statusBar.display('Getting notifications information..');
//
//        Core.notifications.list()
//          .then(function (result)
//          {
//            $rootScope.statusBar.off();
//
//            console.log('notification settings ->', result);
//
////            angular.forEach(result, function (setting)
////            {
////              if (setting.medium === 'SMS')
////              {
////                Core.connectedNumbers.get({ id: setting.targetContactInfos[0] })
////                  .then(function (suc)
////                  {
////                    $scope.notification.sms = {
////                      status: true,
////                      target: suc
////                    }
////                  });
////              }
////            });
//
//          });
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