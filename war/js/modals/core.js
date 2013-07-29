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
	'$rootScope', '$resource', '$config', '$q', '$http',
	function ($rootScope, $resource, $config, $q, $http)
	{
    var Core = $resource();

    var Contacts = $resource(
      $config.host + '/accounts/contacts/',
      {
      },
      {
        process: {
          method: 'GET',
          params: {username:'', password:''}
        }
      }
    );


    var ContactInfos = $resource(
      $config.host + '/accounts/contactinfos/:id',
      {
      },
      {
        list: {
          method: 'GET',
          params: {},
          isArray: true
        },
        get: {
          method: 'GET',
          params: {id:''}
        },
        create: {
          method: 'POST',
          params: {}
        },
        update: {
          method: 'PUT',
          params: {id:''}
        },
        remove: {
          method: 'DELETE',
          params: {id:''}
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

        ContactInfos.create({
          contactInfo:    connection.contactInfo,
          contactInfoTag: 'Phone',
          label:          connection.label
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
      }
    };


//    var Groups = $resource(
//      $config.host + '/network/:action/:id',
//      {
//      },
//      {
//        query: {
//          method: 'GET',
//          params: {},
//          isArray: true
//        },
//        get: {
//          method: 'GET',
//          params: {id:''}
//        },
//        save: {
//          method: 'POST',
//          params: {id:''}
//        },
//        edit: {
//          method: 'PUT',
//          params: {id:''}
//        },
//        remove: {
//          method: 'DELETE',
//          params: {id:''}
//        },
//        search: {
//          method: 'POST',
//          params: {id:'', action:'searchPaigeUser'},
//          isArray: true
//        }
//      }
//    );


    return new Core;

	}
]);