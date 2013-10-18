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
     * Settings resource
     */
    var Settings = $resource(
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
     * Group resource
     */
    var Groups = $resource(
      $config.host + '/accounts/groups/:id',
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
        update: {
          method: 'PUT',
          params: {id: ''}
        }
      }
    );


    /**
     * Logs
     */
    var Logs = $resource(
      $config.host + '/log',
      {},
      {
        list: {
          method: 'GET',
          params: {},
          isArray: true
        }
      }
    );


    /**
     * Logs
     */
    Core.prototype.logs = {

      /**
       * Get localStorage cache for settings
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('settings'));
      },

      /**
       * List notifications
       */
      list: function ()
      {
        var deferred = $q.defer();

//        Logs.query(
//          function (result)
//          {
//            // Storage.add('settings', angular.toJson(result));
//
//            deferred.resolve(result);
//          },
//          function (error)
//          {
//            deferred.resolve({error: error});
//          }
//        );

        deferred.resolve(
          [
            {"id":52001,"scenarioId":1,"startTime":1,"endTime":1,"address":"0643002549","type":"phone","callState":"answered"},
            {"id":52001,"scenarioId":1,"startTime":1,"endTime":324,"address":"0629143143","type":"phone","callState":"answered"},
          ]
        );

        return deferred.promise;
      }
    };


    /**
     * Notifications
     */
    Core.prototype.settings = {

      /**
       * Get localStorage cache for settings
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('settings'));
      },

      /**
       * List notifications
       */
      list: function ()
      {
        var deferred = $q.defer();

        Settings.query(
          function (result)
          {
            Storage.add('settings', angular.toJson(result));

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
       * Update a setting
       */
      update: function (settings)
      {
        var deferred = $q.defer();

        Settings.update({id: settings.id}, {
            targetContactInfos: settings.target
          },
          function (result)
          {
            Storage.add('settings', angular.toJson(result));

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
       * Save settings
       */
      save: function (settings)
      {
        var deferred  = $q.defer(),
          calls     = [],
          setting   = {
            sms:    [],
            email:  []
          };

        if (!settings.added.sms.status)
        {
          if (!settings.removed.sms)
          {
            setting.sms = settings.changed.sms.value;
          }
        }
        else
        {
          setting.sms = settings.added.sms.value;
        }

        if (!settings.added.email.status)
        {
          if (!settings.removed.email)
          {
            setting.email = settings.changed.email.value;
          }
        }
        else
        {
          setting.email = settings.added.email.value;
        }

        if (setting.sms)
        {
          calls.push(Core.prototype.settings.update({
            id:     $rootScope.data.settings.sms.id,
            target: setting.sms
          }));
        }

        if (setting.email)
        {
          calls.push(Core.prototype.settings.update({
            id:     $rootScope.data.settings.email.id,
            target: setting.email
          }));
        }

        $q.all(calls)
          .then(function (result)
          {
            deferred.resolve(result);
          });

        return deferred.promise;
      }
    };


    /**
     * Connected numbers
     */
    Core.prototype.connections = {

      /**
       * Get local cache for connected numbers
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('connections'));
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
            Storage.add('connections', angular.toJson(result));

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
          contactInfoTag: connection.contactInfoTag,
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
              verificationMedium: (number.contactInfoTag === 'Email') ? 'Email' : 'SMS',
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


    /**
     * Groups
     */
    Core.prototype.groups = {

      /**
       * Get localStorage value of groups
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('groups'));
      },

      /**
       * List groups
       */
      list: function ()
      {
        var deferred = $q.defer();

        Groups.query(
          function (result)
          {
            Storage.add('groups', angular.toJson(result));

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
       * Update groups
       */
      update: function (group)
      {
        var deferred = $q.defer();

        Groups.update({id: group.id}, {
            contactInfoIds: group.list
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

    /**
     * Blacklists
     */
    Core.prototype.blacklists = {

      /**
       * List blacklists
       */
      list: function ()
      {

      },

      /**
       * Block a number
       */
      save: function (blacklisted)
      {
        var deferred = $q.defer();

        ContactInfos.create({
            contactInfo:    blacklisted.contactInfo,
            contactInfoTag: 'Phone',
            label:          blacklisted.label
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
       * Allow a blacklisted number
       */
      remove: function (number)
      {
        var deferred = $q.defer();

        ContactInfos.remove({
            id: number.id
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


    /**
     * Data factory
     */
    Core.prototype.factory = {

      /**
       * Process data
       */
      process: function ()
      {
        // Prepare raw data
        var raws = {
            resources:    angular.fromJson(Storage.get('resources')),
            groups:       angular.fromJson(Storage.get('groups')),
            connections:  angular.fromJson(Storage.get('connections')),
            settings:     angular.fromJson(Storage.get('settings'))
          };

        // Prepare containers
        var nodes       = {},
            connections = {},
            blacklist   = {},
            settings    = {},
            account     = {},
            groups      = {},
            phones      = [],
            emails      = [];
            // ,
            // tmp         = [];

        // Initialize root container
        $rootScope.data = {};

        // Compile contactinfos
        angular.forEach(raws.connections, function (connection)
        {
          nodes[connection.id] = connection;
        });

        // Process resources information
        angular.forEach(raws.resources, function (resource)
        {
          switch (resource.contactInfoTag)
          {
          case 'Name':
            account.name = resource.contactInfo;
            break;
          case 'Phone':
            account.phone = resource.contactInfo;

            nodes[resource.id] = resource;
            break;
          case 'Email':
            account.email = resource.contactInfo;

            nodes[resource.id] = resource;
            break;
          case 'Address':
            account.address = resource.contactInfo;
            break;
          case 'PURCHASED_NUMBER':
            account.purchasedNumber = resource.contactInfo;
            break;
          }
        });

        // Setup user id
        account.id          = raws.resources[0].ownerKey;
        account.contactKey  = raws.resources[0].contactKey;

        // TODO (Remove this later on)
        $rootScope.app.resources = account;

        // Get blacklisted items
        var blacklisted = raws.groups[0].contactInfoIds;

        // Build blacklisted group node
        groups.blacklist = raws.groups[0];

        // Pass connections
        connections = nodes;

        // Compile blacklist
        angular.forEach(blacklisted, function (listed)
        {
          blacklist[listed] = nodes[listed];

          delete connections[listed];
        });

        // Watch for parked blacklist items
//        if ($rootScope.data.tmp && $rootScope.data.tmp.length > 0)
//        {
//          console.log('there is one ! ->', $rootScope.data.tmp);
//
//          angular.forEach($rootScope.data.tmp, function (blacklisted)
//          {
//            blacklist[blacklisted.id] = blacklisted;
//          });
//
//          $rootScope.data.tmp = [];
//        }

        // Arrayize connections
        var cons = [];
        angular.forEach(connections, function (connection)
        {
          cons.push(connection);
        });
        connections = cons;

        // Arrayize blacklist
        var blacs = [];
        angular.forEach(blacklist, function (listed)
        {
          blacs.push(listed);
        });
        blacklist = blacs;

        // Process settings
        angular.forEach(nodes, function (node)
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
        settings = {
          sms: {
            status:   false,
            target:   null,
            targets:  []
          },
          email: {
            status:   false,
            target:   null,
            targets:  []
          }
        };

        // Build list of emails
        angular.forEach(emails, function (email)
        {
          settings.email.targets.push({
            id:     email.id,
            value:  email.contactInfo
          });
        });

        // Build list of phones
        angular.forEach(phones, function (phone)
        {
          settings.sms.targets.push({
            id:     phone.id,
            value:  phone.contactInfo
          });
        });

        // Setup selected ones
        angular.forEach(raws.settings, function (setting)
        {
          if (setting.medium === 'Email')
          {
            settings.email.id     = setting.id;

            settings.email.status = !!((setting.targetContactInfos.length > 0));

            var emailSetting = (nodes[setting.targetContactInfos[0]]) ?
                                nodes[setting.targetContactInfos[0]].id :
                                settings.email.targets[0].id;

            settings.email.original = settings.email.target = (setting.targetContactInfos.length > 0) ?
                                      emailSetting :
                                      settings.email.targets[0].id;
          }

          if (setting.medium === 'SMS')
          {
            settings.sms.id     = setting.id;

            settings.sms.status = !!((setting.targetContactInfos.length > 0));

            var smsSetting = (nodes[setting.targetContactInfos[0]]) ?
                              nodes[setting.targetContactInfos[0]].id :
                              settings.sms.targets[0].id;

            settings.sms.original = settings.sms.target = (setting.targetContactInfos.length > 0) ?
                                    smsSetting :
                                    settings.sms.targets[0].id;
          }
        });

        // Pass data
        $rootScope.data = {
          account:      account,
          connections:  connections,
          blacklist:    blacklist,
          settings:     settings,
          groups:       groups
        };

        console.warn('data ->', $rootScope.data);

        return true;
      }
    };


    return new Core();
	}
]);