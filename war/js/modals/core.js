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
    /**
     * Empty resource
     */
    var Core = $resource();

    /**
     * Contacts resource
     */
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

    /**
     * Contact Infos resource
     */
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
      }
    };

    return new Core;
	}
]);