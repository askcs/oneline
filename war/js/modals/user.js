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
	  var self = this;


	  var User = $resource();


	  var Login = $resource(
	    $config.host + '/login',
	    {
	    },
	    {
	      process: {
	        method: 'GET',
	        params: {username:'', password:''}
	      }
	    }
	  );


	  var Logout = $resource(
	    $config.host + '/logout',
	    {
	    },
	    {
	      process: {
	        method: 'GET',
	        params: {}
	      }
	    }
	  );


	  var Owner = $resource(
	    $config.host + '/accounts/contactinfos/owner',
	    {
	    },
	    {
	      get: {
	        method:   'GET',
	        params:   {},
          isArray:  true
	      }
	    }
	  );


//	  var Resources = $resource(
//	    $config.host + '/resources',
//	    {
//	    },
//	    {
//	      get: {
//	        method: 'GET',
//	        params: {}
//	      }
//	    }
//	  );


//	  var Reset = $resource(
//	    $config.host + '/passwordReset',
//	    {
//	    },
//	    {
//	      password: {
//	        method: 'GET',
//	        params: {uuid: '', path:''}
//	      }
//	    }
//	  );

	  // var changePassword = $resource($config.host+'/passwordReset', 
	  //   {uuid: uuid,
	  //    pass: newpass,
	  //    key: key});
	  
	  
	  /**
	   * TODO
	   * RE-FACTOR
	   * 
	   * User login
	   */
	  User.prototype.password = function (uuid)
	  {
	    var deferred = $q.defer();

	    Reset.password(
	      {
	        uuid: uuid.toLowerCase(),
	        path: $location.absUrl()
	      }, 
	      function (result)
	      {
	        if (angular.equals(result, []))
	        {
	          deferred.resolve("ok");
	        }
	        else
	        {
	          deferred.resolve(result);
	        };
	      },
	      function (error)
	      {
	        deferred.resolve(error);
	      }
	    );

	    return deferred.promise;
	  };


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
	          deferred.reject("Something went wrong with login!");
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
	   * RE-FACTORY
	   * change user password
	   */
	  User.prototype.changePass = function (uuid, newpass, key)
	  {
	    var deferred = $q.defer();
	    
	    /**
	     * RE-FACTORY
	     */
	    changePassword.get(
	      function (result)
	      {
	        deferred.resolve(result);
	      },
	      function (error)
	      {
	        deferred.resolve(error);
	      }
	    );
	    
	    return deferred.promise;
	  }


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

        angular.forEach(result, function (resource, index)
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
              account.purchased_number = resource.contactInfo;
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
            deferred.reject("User has no resources!");
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


    /**
     * Get user resources
     */
//    User.prototype.resources = function ()
//    {
//      var deferred = $q.defer();
//
//      Resources.get(null,
//        function (result)
//        {
//          if (angular.equals(result, []))
//          {
//            deferred.reject("User has no resources!");
//          }
//          else
//          {
//            Storage.add('resources', angular.toJson(result));
//
//            deferred.resolve(result);
//          }
//        },
//        function (error)
//        {
//          deferred.resolve({error: error});
//        }
//      );
//
//      return deferred.promise;
//    };




	  return new User;
	}
]);