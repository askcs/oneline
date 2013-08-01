/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Modals.User', ['ngResource'])


/**
 * User
 */
.factory('User', 
[
	'$resource', '$config', '$q', '$location', 'Storage', '$rootScope', 
	function ($resource, $config, $q, $location, Storage, $rootScope) 
	{
    var User = $resource();


    var Login = $resource(
      $config.host + '/login',
      {},
      {
        process: {
          method: 'GET',
          params: {username: '', password: ''}
        }
      }
    );


    var Logout = $resource(
      $config.host + '/logout',
      {},
      {
        process: {
          method: 'GET',
          params: {}
        }
      }
    );


    var Owner = $resource(
      $config.host + '/accounts/contactinfos/owner',
      {},
      {
        get: {
          method:   'GET',
          params:   {},
          isArray:  true
        }
      }
    );


    /**
     * User login
     */
    User.prototype.login = function (username, password)
    {
      var deferred = $q.defer();

      Login.process({username: username, password: password},
        function (result)
        {
          if (angular.equals(result, []))
          {
            deferred.reject('Something went wrong with login!');
          }
          else
          {
            deferred.resolve(result);
          }
        },
        function (error)
        {
          deferred.resolve(error);
        }
      );

      return deferred.promise;
    };


    /**
     * User logout
     */
    User.prototype.logout = function ()
    {
      var deferred = $q.defer();

      Logout.process(null,
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
    };


    /**
     * Get or set user resources
     */
    User.prototype.owner = {
      /**
       * Get user account from localStorage
       */
      get: function ()
      {
        angular.fromJson(Storage.get('resources'));
      },
      /**
       * Set user account to localStorage
       */
      set: function (result)
      {
        var account = {};

        angular.forEach(result, function (resource)
        {
          switch (resource.contactInfoTag)
          {
          case 'Name':
            account.name = resource.contactInfo;
            break;
          case 'Phone':
            account.phone = resource.contactInfo;
            break;
          case 'Email':
            account.email = resource.contactInfo;
            break;
          case 'Address':
            account.address = resource.contactInfo;
            break;
          case 'PURCHASED_NUMBER':
            account.purchasedNumber = resource.contactInfo;
            break;
          }
        });

        account.id = result[0].ownerKey;

        $rootScope.app.resources = account;

        Storage.add('resources', angular.toJson(account));
      }
    };


    /**
     * Get user resources
     */
    User.prototype.resources = function ()
    {
      var deferred = $q.defer();

      Owner.get(null,
        function (result)
        {
          if (angular.equals(result, []))
          {
            deferred.reject('User has no resources!');
          }
          else
          {
            /**
             * Process resources for storing in dom
             */
            User.prototype.owner.set(result);

            deferred.resolve(result);
          }
        },
        function (error)
        {
          deferred.resolve({error: error});
        }
      );

      return deferred.promise;
    };


    return new User();
	}
]);