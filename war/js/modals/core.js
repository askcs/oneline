/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Modals.Core', ['ngResource'])


/**
 * Core modal
 */
.factory('Core',
[
	'$rootScope', '$resource', '$config', '$q', 'Storage',
	function ($rootScope, $resource, $config, $q, Storage)
	{
    /**
     * Empty resource
     */
    var Core = $resource();


    /**
     * Contacts resource
     */
//    var Contacts = $resource(
//      $config.host + '/accounts/contacts/',
//      {},
//      {
//        process: {
//          method: 'GET',
//          params: {username: '', password: ''}
//        }
//      }
//    );


    /**
     * Contact Infos resource
     */
    var ContactInfos = $resource(
      $config.host + '/accounts/contactinfos/:id',
      {},
      {
        list: {
          method: 'GET',
          params: {},
          isArray: true
        },
        get: {
          method: 'GET',
          params: {id: ''}
        },
        create: {
          method: 'POST',
          params: {}
        },
        update: {
          method: 'PUT',
          params: {id: ''}
        },
        remove: {
          method: 'DELETE',
          params: {id: ''}
        }
      }
    );


    /**
     * Verification resource
     */
    var Verification = $resource(
      $config.host + '/products/verifyme/:action',
      {},
      {
        initiate: {
          method: 'POST',
          params: {action: 'initiate'}
        },
        confirm: {
          method: 'POST',
          params: {action: 'verify'}
        }
      }
    );


    /**
     * Notifocation resource
     */
    var Notifications = $resource(
      $config.host + '/settings/notifications/:id',
      {},
      {
        list: {
          method: 'GET',
          params: {},
          isArray: true
        },
        get: {
          method: 'GET',
          params: {id: ''}
        },
        // TODO (URL should be made competible with this one)
//        getWithnumber: {
//          method: 'GET',
//          params: {id: 'number' + id}
//        },
        create: {
          method: 'POST',
          params: {}
        },
        update: {
          method: 'PUT',
          params: {id: ''}
        },
        remove: {
          method: 'DELETE',
          params: {id: ''}
        }
      }
    );


    /**
     * Notifications
     */
    Core.prototype.notifications = {

      /**
       * Get localStorage cache for notiticationSettings
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('notificationSettings'));
      },

      /**
       * List notifications
       */
      list: function ()
      {
        var deferred = $q.defer();

        Notifications.query(
          function (result)
          {
            Storage.add('notificationSettings', angular.toJson(result));

            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Get a particular notification
       */
      get: function ()
      {

      }
    };


    /**
     * Connected numbers
     */
    Core.prototype.connectedNumbers = {

      /**
       * Get local cache for connected numbers
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('connectedNumbers'));
      },

      /**
       * List numbers
       */
      list: function ()
      {
        var deferred = $q.defer();

        ContactInfos.list(
          function (result)
          {
            Storage.add('connectedNumbers', angular.toJson(result));

            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Get contactinfo
       */
      get: function (id)
      {
        var deferred = $q.defer();

        ContactInfos.get(
          {
            id: id
          },
          function (result)
          {
            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Save a number
       */
      save: function (connection)
      {
        var deferred = $q.defer();

        var payload = {
          contactInfo:    connection.contactInfo,
          contactInfoTag: 'Phone',
          label:          connection.label
        };

        if (connection.id)
        {
          payload.id = connection.id;

          ContactInfos.update({id: connection.id}, payload,
            function (result)
            {
              deferred.resolve(result);
            },
            function (error)
            {
              deferred.resolve({error: error});
            }
          );
        }
        else
        {
          ContactInfos.create(payload,
            function (result)
            {
              deferred.resolve(result);
            },
            function (error)
            {
              deferred.resolve({error: error});
            }
          );
        }

        return deferred.promise;
      },

      /**
       * Delete a connected number
       */
      remove: function (connection)
      {
        var deferred = $q.defer();

        ContactInfos.remove({
            id: connection.id
          },
          function (result)
          {
            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Verify a connected number
       */
      verify: {

        /**
         * Initiate a verification
         */
        initiate: function (number)
        {
          var deferred = $q.defer();

          Verification.initiate(
            {
              verificationMedium: 'SMS',
              verificationInfo: {
                address:  number.contactInfo
              }
            },
            function (result)
            {
              deferred.resolve(result);
            },
            function (error)
            {
              deferred.resolve({error: error});
            }
          );

          return deferred.promise;
        },

        /**
         * Confirm verification
         */
        confirm: function (verificationCode, verificationInfoID)
        {
          var deferred = $q.defer();

          Verification.confirm(
            {
              verificationCode: verificationCode,
              id:               verificationInfoID
            },
            function (result)
            {
              deferred.resolve(result);
            },
            function (error)
            {
              deferred.resolve({error: error});
            }
          );

          return deferred.promise;
        }
      }
    };

    return new Core();
	}
]);