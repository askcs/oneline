/*jslint node: true */
/*global angular */
/*global $ */
/*global error */
'use strict';


angular.module('WebPaige.Modals.Core', ['ngResource'])


/**
 * Core modal
 */
.factory('Core',
[
	'$rootScope', '$resource', '$config', '$q',
	function ($rootScope, $resource, $config, $q)
	{
    /**
     * Empty resource
     */
    var Core = $resource();


    /**
     * Contacts resource
     */
    var Contacts = $resource(
      $config.host + '/accounts/contacts/',
      {},
      {
        process: {
          method: 'GET',
          params: {username: '', password: ''}
        }
      }
    );


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
     * Add Member to a group
     */
    Core.prototype.connectedNumbers = {
      /**
       * List numbers
       */
      list: function ()
      {
        var deferred = $q.defer();

        ContactInfos.list(function (result)
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


//            var result = angular.fromJson({
//              "initiateResponse": {
//                "jsonrpc": "2.0",
//                "id": null,
//                "result": "{\"sessionKey\":\"CM|Ask|[\\\"0614765863\\\"]\",\"count\":1,\"successResult\":{\"0614765863\":\"Parsed successfully\"},\"errorResult\":{}}"
//              },
//              "verificationInfo": {
//                "verificationMedium": "SMS",
//                "verificationStartTimestamp": 1375194529511,
//                "address": "0614765863",
//                "addressType": "MOBILE",
//                "phoneNumberOrigin": "Netherlands",
//                "adapterConfigId": "eddb1160-751b-11e2-a979-00007f000001",
//                "verified": false,
//                "id": "a09ed515-171b-400a-9cf8-afcd6da4a575"
//              }
//            });
//
//            deferred.resolve(result);


          return deferred.promise;
        },

        /**
         * Confirm verification
         */
        confirm: function (verificationCode, verificationInfoID)
        {
          var deferred = $q.defer();

//          console.log('confirming this ->', {
//            verificationCode: verificationCode,
//            id:               verificationInfoID
//          });


            var result = angular.fromJson({
              "verificationMedium": "SMS",
              "verificationStartTimestamp": 1375194529511,
              "address": "0614765863",
              "addressType": "MOBILE",
              "phoneNumberOrigin": "Netherlands",
              "verified": true,
              "id": "a09ed515-171b-400a-9cf8-afcd6da4a575"
            });

            deferred.resolve(result);


//          Verification.confirm(
//            {
//              verificationCode: verificationCode,
//              id:               verificationInfoID
//            },
//            function (result)
//            {
//              deferred.resolve(result);
//            },
//            function (error)
//            {
//              deferred.resolve({error: error});
//            }
//          );

          return deferred.promise;
        }
      }
    };

    return new Core;
	}
]);