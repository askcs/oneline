/*jslint node: true */
define(
  ['modals/modals', 'config'],
  function (modals, config)
  {
    'use strict';

    modals.factory('Core',
      [
        '$rootScope', '$resource', '$q', 'Storage',
        function ($rootScope, $resource, $q, Storage)
        {
          var Core = $resource();

          var ContactInfos = $resource(
            config.host + '/accounts/contactinfos/:id',
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

          var Profile = $resource(
            config.host + '/accounts/contactinfos/owner',
            {},
            {
              save: {
                method: 'POST',
                params: {},
                isArray: true
              }
            }
          );

          var Verification = $resource(
            config.host + '/products/verifyme/:action',
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

          var Settings = $resource(
            config.host + '/settings/notifications/:id',
            {},
            {
              list: {
                method: 'GET',
                params: {},
                isArray: true
              },
              detailed: {
                method: 'GET',
                params: {
                  detailed: true
                },
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

          var Groups = $resource(
            config.host + '/scenario/oneline/groups/:id',
            {},
            {
              detailed: {
                method: 'POST',
                params: {
                  detailed: true
                },
                isArray: true
              }
            }
          );

          var Logs = $resource(
            config.host + '/accounts/log',
            {},
            {
              list: {
                method: 'GET',
                params: {},
                isArray: true
              }
            }
          );

          var Scenarios = $resource(
            config.host + '/scenario/oneline/generate',
            {},
            {
              build: {
                method: 'POST',
                params: { default: true }
              }
            }
          );


          Core.prototype.logs = {
            local: function () { return angular.fromJson(Storage.get('settings')); },

            list: function ()
            {
              var deferred = $q.defer();

              Logs.query(
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


          Core.prototype.settings = {
            local: function () { return angular.fromJson(Storage.get('settings')); },

            // TODO: Depreciated?
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

            detailed: function ()
            {
              var deferred = $q.defer();

              Settings.detailed(
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

            update: function (settings)
            {
              var deferred = $q.defer();

              Settings.update(
                { id: settings.id },
                {
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


          Core.prototype.connections = {
            local: function () { return angular.fromJson(Storage.get('connections')); },

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

            save: function (connection)
            {
              var self = this;

              var deferred = $q.defer();

              var payload = {
                contactInfo:    connection.contactInfo,
                contactInfoTag: connection.contactInfoTag,
                label:          connection.label,
                groupKeys:      [$rootScope.data.connected.group.id]
              };

              if (connection.id)
              {
                payload.id = connection.id;

                ContactInfos.update(
                  {
                    id: connection.id
                  },
                  payload,
                  function (result)
                  {
                    var connections = angular.fromJson(Storage.get('connections'));

                    angular.forEach(connections, function (node)
                    {
                      if (node.id === result.id)
                      {
                        node.contactInfo    = result.contactInfo;
                        node.contactInfoTag = result.contactInfoTag;
                        node.label          = result.label;
                        node.groupKeys      = [$rootScope.data.connected.group.id];
                      }
                    });

                    Storage.add('connections', angular.toJson(connections));

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
                ContactInfos.create(
                  payload,
                  function (result)
                  {
                    var locals = self.local();

                    locals.push(result);

                    Storage.add('connections', angular.toJson(locals));

                    var groups = angular.fromJson(Storage.get('groups'));

                    angular.forEach(groups, function (group)
                    {
                      if (group.id === $rootScope.data.connected.group.id) { group.contactInfoIds.push(result.id); }
                    });

                    Storage.add('groups', angular.toJson(groups));

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

            profiler: function (payload)
            {
              var deferred = $q.defer();

              Profile.save(
                {},
                payload,
                function (results)
                {
                  var connections = angular.fromJson(Storage.get('connections')),
                    returned    = {};

                  angular.forEach(results, function (result)
                  {
                    var node = {
                      id: result.id,
                      contactInfo: result.contactInfo
                    };

                    switch (result.contactInfoTag.toString().toUpperCase())
                    {
                      case 'NAME':
                        returned.name = node;
                        break;
                      case 'EMAIL':
                        returned.email = node;
                        break;
                      case 'ADDRESS':
                        returned.address = node;
                        break;
                      case 'PHONE':
                        returned.phone = node;
                        break;
                    }
                  });

                  angular.forEach(connections, function (connection)
                  {
                    if (connection.groupKeys[0] === $rootScope.data.owner.group.id)
                    {
                      switch (connection.contactInfoTag.toString().toUpperCase())
                      {
                        case 'NAME':
                          connection.contactInfo = returned.name.contactInfo;
                          break;
                        case 'EMAIL':
                          connection.contactInfo = returned.email.contactInfo;
                          break;
                        case 'ADDRESS':
                          connection.contactInfo = returned.address.contactInfo;
                          break;
                        case 'PHONE':
                          connection.contactInfo = returned.phone.contactInfo;
                          break;
                      }
                    }
                  });

                  if (connections.length === 0)
                  {
                    connections = results;
                  }

                  Storage.add('connections', angular.toJson(connections));

                  deferred.resolve(results);
                },
                function (error)
                {
                  deferred.resolve({error: error});
                }
              );

              return deferred.promise;
            },

            remove: function (connection)
            {
              var deferred  = $q.defer(),
                self      = this;

              ContactInfos.remove(
                {
                  id: connection.id
                },
                function (result)
                {
                  var locals    = self.local(),
                    filtered  = [];

                  angular.forEach(locals, function (local)
                  {
                    if (local.id !== connection.id) { filtered.push(local); }
                  });

                  Storage.add('connections', angular.toJson(filtered));

                  var groups      = angular.fromJson(Storage.get('groups')),
                    connecteds  = [],
                    changed     = [];

                  angular.forEach($rootScope.data.connected.group.contactInfoIds, function (node)
                  {
                    if (node !== connection.id)
                    {
                      connecteds.push(node);
                    }
                  });

                  angular.forEach(groups, function (group)
                  {
                    if (group.id === $rootScope.data.connected.group.id) { group.contactInfoIds = connecteds; }

                    changed.push(group);
                  });

                  Storage.add('groups', angular.toJson(changed));

                  deferred.resolve(result);
                },
                function (error)
                {
                  deferred.resolve({error: error});
                }
              );

              return deferred.promise;
            },

            verify: {
              initiate: function (number)
              {
                var deferred = $q.defer();

                Verification.initiate(
                  {
                    // alert(number.contactInfoTag.toUpperCase());
                    //verificationMedium: (number.contactInfoTag.toString().toUpperCase() === 'EMAIL') ? 'EMAIL' : 'SMS',
                    verificationMedium: 'AUTO',
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


          // TODO: Back-end takes care of these stuff. So no needed. Remove it?
          Core.prototype.groups = {
            local: function () { return angular.fromJson(Storage.get('groups')); },

            // TODO: Depreciated?
            list: function ()
            {
              var deferred = $q.defer();

              Groups.list(
                {},
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

            detailed: function ()
            {
              var deferred = $q.defer();

              Groups.detailed(
                {},
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

            update: function (group)
            {
              var deferred = $q.defer();

              Groups.update(
                { id: group.id },
                {
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


          Core.prototype.blacklists = {
            save: function (blacklisted)
            {
              var deferred = $q.defer();

              ContactInfos.create({
                  contactInfo:    blacklisted.contactInfo,
                  contactInfoTag: 'PHONE',
                  label:          blacklisted.label,
                  groupKeys:      [$rootScope.data.blacklist.group.id]
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

            remove: function (connection)
            {
              var deferred  = $q.defer();

              ContactInfos.remove(
                {
                  id: connection.id
                },
                function (result)
                {
                  var connections = angular.fromJson(Storage.get('connections')),
                    filtered    = [];

                  angular.forEach(connections, function (local)
                  {
                    if (local.id !== connection.id) { filtered.push(local); }
                  });

                  Storage.add('connections', angular.toJson(filtered));

                  var groups      = angular.fromJson(Storage.get('groups')),
                    connecteds  = [],
                    changed     = [];

                  angular.forEach($rootScope.data.blacklist.group.contactInfoIds, function (node)
                  {
                    if (node !== connection.id) { connecteds.push(node); }
                  });

                  angular.forEach(groups, function (group)
                  {
                    if (group.id === $rootScope.data.blacklist.group.id) { group.contactInfoIds = connecteds; }

                    changed.push(group);
                  });

                  Storage.add('groups', angular.toJson(changed));

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


          Core.prototype.scenarios = {
            run: function ()
            {
              var deferred = $q.defer();

              // console.log('there are enough stuff to run scenario ->', $rootScope.data.connected.list);

              var connected = {};

              if ($rootScope.data.sequence)
              {
                angular.forEach($rootScope.data.sequence, function (id, rank)
                {
                  connected[rank] = {
                    contactInfoId: id,
                    timeout:       20
                  };
                });
              }
              else
              {
                angular.forEach($rootScope.data.connected.list, function (listed, index)
                {
                  if (listed.verified)
                  {
                    connected[index] = {
                      contactInfoId: listed.id,
                      timeout:       20
                    };
                  }
                });
              }

              // console.log('running scenario on ->', connected);

              Scenarios.build(
                {},
                {
                  info: 'Ask-Cs One Line scenario',
                  connected_numbers: connected,
                  events: {
                    on_blacklist:           '',
                    on_scenario_complete:   '',
                    on_scenario_exception:  ''
                  }
                },
                function (result)
                {
                  Storage.add('scenario', angular.toJson(result));

                  deferred.resolve(result);
                },
                function (error)
                {
                  deferred.resolve({error: error});
                }
              );

              return deferred.promise;
            },

            build: function ()
            {
              // console.log('scenario build is being asked ->', $rootScope.data.connected.list);

              var verifieds = false;

              if ($rootScope.data.connected.list.length > 0)
              {
                angular.forEach($rootScope.data.connected.list, function (listed)
                {
                  if (listed && listed.verified)
                  {
                    verifieds = true;
                  }
                });
              }

              if (verifieds)
              {
                this.run();
              }
            }
          };











          Core.prototype.factory = {

            run: function ()
            {
              var deferred = $q.defer();

              if (Core.prototype.factory.process())
              {
                deferred.resolve();
              }

              return deferred.promise;
            },

            process: function ()
            {
              var raws   = {
                  groups:       angular.fromJson(Storage.get('groups')),
                  settings:     angular.fromJson(Storage.get('settings'))
                },
                data   = {
                  account:    {},
                  connected:  {
                    group: {},
                    list: {
                      verified: []
                    }
                  },
                  blacklist:  {},
                  owner:      {},
                  sequence:   {},
                  settings:   {
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
                  }
                },
              // TODO: ??
                phones = [],
                emails = [],
                nodes  = {};



              $rootScope.data = {};

              var sequenced = false;

              var _this = this;

              angular.forEach(raws.groups, function (group)
              {
                switch (group.name.toString().toUpperCase())
                {
                  case 'CONNECTEDNUMBERS':

                    data.connected = {
                      group: group,
                      list: {
                        verified:     [],
                        notVerified:  []
                      }
                    };

                    _this.verified = {};

                    if (data.connected.group.contactInfoIds.length > 0)
                    {
                      angular.forEach(group.contactInfos, function (node)
                      {
                        if (node.verified)
                        {
                          _this.verified[node.id] = node;
                        }
                        else
                        {
                          data.connected.list.notVerified.push(node);
                        }
                      });
                    }

                    break;

                  case 'BLACKLIST':

                    data.blacklist = {
                      group: group,
                      list:  group.contactInfos
                    };

                    break;

                  case 'OWNERCONTACT':

                    data.owner = {
                      group: group,
                      list:  group.contactInfos
                    };

                    break;

                  case 'CONNECTEDNUMBERSEQUENCE':

                    data.sequence = group.contactInfoSequence;

                    sequenced = true;

                    break;
                }
              });








              if (!sequenced)
              {
                console.log('there is no sequence');

                angular.forEach(data.connected.group.contactInfos, function (con, index)
                {
                  if (con.verified)
                  {
                    data.sequence[index] = con.id;
                  }
                });
              }

              angular.forEach(data.sequence, function (id, rank)
              {
                console.log('--- data ->', data);

                data.connected.list.verified.push({
                  rank:   rank,
                  number: _this.verified[id]
                });
              });












              angular.forEach(raws.connections, function (connection)
              {
                if (connection.groupKeys[0] === data.owner.group.id)
                {
                  switch (connection.contactInfoTag.toString().toUpperCase())
                  {
                    case 'NAME':
                      data.account.name = connection.contactInfo;
                      break;

                    case 'EMAIL':
                      data.account.email = connection.contactInfo;

                      nodes[connection.id] = connection;
                      break;

                    case 'ADDRESS':
                      data.account.address = connection.contactInfo;
                      break;

                    case 'PURCHASED_NUMBER':
                      data.account.purchasedNumber = connection.contactInfo;
                      break;

                    case 'PHONE':
                      data.account.phone = connection.contactInfo;

                      nodes[connection.id] = connection;
                      break;
                  }
                }
              });

              $rootScope.app.resources = data.account;











              data.blacklist.list = [];

              if (data.blacklist.group && data.blacklist.group.contactInfoIds)
              {
                angular.forEach(data.blacklist.group.contactInfoIds, function (id)
                {
                  if (nodes[id])
                  {
                    data.blacklist.list.push(nodes[id]);
                  }
                  else
                  {
                    console.log('Error: This node does not exist! (For blacklist) ->', id);
                  }
                });
              }






              angular.forEach(nodes, function (node)
              {
                switch (node.contactInfoTag.toString().toUpperCase())
                {
                  case 'EMAIL':
                    emails.push(node);
                    break;
                }
              });

              var filtered = nodes;

              angular.forEach(filtered, function (node, index)
              {
                if (node.contactInfoTag.toString().toUpperCase() !== 'PHONE')
                {
                  delete filtered[index];
                }
              });

              if (data.blacklist.group && data.blacklist.group.contactInfoIds.length > 0)
              {
                angular.forEach(data.blacklist.group.contactInfoIds, function (id)
                {
                  delete filtered[id];
                });
              }

              angular.forEach(filtered, function (node)
              {
                phones.push(node);
              });

              angular.forEach(emails, function (email)
              {
                data.settings.email.targets.push({
                  id:     email.id,
                  value:  email.contactInfo
                });
              });

              angular.forEach(phones, function (phone)
              {
                data.settings.sms.targets.push({
                  id:     phone.id,
                  value:  phone.contactInfo
                });
              });







              angular.forEach(raws.settings, function (setting)
              {
                switch (setting.medium.toString().toUpperCase())
                {
                  case 'EMAIL':
                    data.settings.email.id = setting.id;

                    data.settings.email.status = !!((setting.targetContactInfos.length > 0));

                    var emailSetting = (nodes[setting.targetContactInfos[0]]) ?
                      nodes[setting.targetContactInfos[0]].id :
                      (data.settings.email.targets.length > 0) ? data.settings.email.targets[0].id : null;

                    data.settings.email.original = data.settings.email.target = (setting.targetContactInfos.length > 0) ?
                      emailSetting :
                      (data.settings.email.targets.length > 0) ? data.settings.email.targets[0].id : null;
                    break;

                  case 'SMS':
                    data.settings.sms.id  = setting.id;

                    data.settings.sms.status = !!((setting.targetContactInfos.length > 0));

                    var smsSetting = (nodes[setting.targetContactInfos[0]]) ?
                      nodes[setting.targetContactInfos[0]].id :
                      (data.settings.sms.targets.length > 0) ? data.settings.sms.targets[0].id : null;

                    data.settings.sms.original = data.settings.sms.target = (setting.targetContactInfos.length > 0) ?
                      smsSetting :
                      (data.settings.sms.targets.length > 0) ? data.settings.sms.targets[0].id : null;
                    break;
                }
              });







              data.nodes = nodes;

              $rootScope.tmp = $rootScope.data = data;

              console.info('data ->', $rootScope.data);

              Core.prototype.scenarios.build();

              return true;
            }
          };


          return new Core();
        }
      ]
    );
  }
);