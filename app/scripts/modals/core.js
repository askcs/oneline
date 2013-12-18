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
            config.host + '/scenario/oneline/groups/',
            {},
            {
              list: {
                method: 'POST',
                params: {},
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

            remove: function (connection, section)
            {
              var deferred  = $q.defer();

              ContactInfos.remove(
                {
                  id: connection.id
                },
                function (result)
                {
                  var list            = $rootScope.data.connected.group.contactInfoIds,
                      connections     = angular.fromJson(Storage.get('connections')),
                      filteredList    = [],
                      contactInfoIds  = [];

                  if (list.indexOf(connection.id) != -1)
                  {
                    angular.forEach(connections, function (con)
                    {
                      if (con.id != connection.id &&
                        list.indexOf(con.id) != -1)
                      {
                        contactInfoIds.push(con);

                        filteredList.push(con.id);
                      }
                    });
                  }

                  Storage.add('connections', angular.toJson(contactInfoIds));

                  var groups = angular.fromJson(Storage.get('groups'));

                  angular.forEach(groups, function (group)
                  {
                    if (group.name.toString().toUpperCase() == 'CONNECTEDNUMBERS')
                    {
                      group.contactInfoIds = filteredList;
                    }
                  });

                  Storage.add('groups', angular.toJson(groups));

                  if (section == 'verified')
                  {
                    var reorder = {},
                        removedRank;

                    angular.forEach($rootScope.data.sequence, function (id, rank)
                    {
                      if (id == connection.id)
                      {
                        removedRank = rank;
                      }
                    });

                    delete $rootScope.data.sequence[removedRank];

                    angular.forEach($rootScope.data.sequence, function (val, i)
                    {
                      if (i < removedRank)
                      {
                        reorder[i] = val;
                      }
                      else
                      {
                        reorder[i-1] = val;
                      }
                    });

                    $rootScope.data.sequence = reorder;

                    angular.forEach(groups, function (group)
                    {
                      if (group.name.toString().toUpperCase() == 'CONNECTEDNUMBERSEQUENCE')
                      {
                        group.contactInfoSequence = reorder;
                      }
                    });

                    Storage.add('groups', angular.toJson(groups));
                  }

                  delete $rootScope.data.nodes[connection.id];

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
              var deferred = $q.defer(),
                  _this = this;

              var payload = {
                info: 'Ask-Cs One Line scenario',
                connected_numbers: {},
                events: {
                  on_blacklist:           '',
                  on_scenario_complete:   '',
                  on_scenario_exception:  ''
                }
              };

              if ($rootScope.data.sequence != {})
              {
                console.log('there is a sequence already');

                angular.forEach($rootScope.data.sequence, function (id, rank)
                {
                  payload.connected_numbers[rank] = {
                    contactInfoId: id,
                    timeout:       20
                  };
                });
              }
              else
              {
                console.log('no sequence so creating one');

                angular.forEach($rootScope.data.connected.list.verified, function (listed, index)
                {
                  if (listed.verified)
                  {
                    payload.connected_numbers[index] = {
                      contactInfoId: listed.id,
                      timeout:       20
                    };
                  }
                });
              }

              Scenarios.build(
                {},
                payload,
                function (result)
                {
                  // if (result.s)

                  console.log('result =>', result);

                  Storage.add('scenario', angular.toJson(result));

                  deferred.resolve(result);
                },
                function (error)
                {

                  console.log('error =>', error);

                  deferred.resolve({error: error});

                  _this.recall();
                }
              );

              return deferred.promise;
            },

            build: function ()
            {
              if ($rootScope.data.connected.list.verified.length > 0)
              {
                this.run();
              }
            },

            timeout: 2000,

            recall: function ()
            {
              var _this = this;

              if (this.timeout > 33000)
              {
                clearTimeout(window.retryScenario);

                $rootScope.statusBar.display('Scenario generate failed..');
              }
              else
              {
                var attempt = 1;

                switch (this.timeout)
                {
                  case 4000:  attempt = 2; break;
                  case 8000:  attempt = 3; break;
                  case 16000: attempt = 4; break;
                  case 32000: attempt = 5; break;
                }

                $rootScope.statusBar.display('Retrying scenario generation.. Attempt number: ' + attempt);

                window.retryScenario = setTimeout(function ()
                {
                  _this.run();
                }, this.timeout);

                this.timeout *= 2;
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
                    connections:  angular.fromJson(Storage.get('connections')),
                    settings:     angular.fromJson(Storage.get('settings'))
                  },
                  data   = {
                    account:    {},
                    connected:  {},
                    blacklist:  {},
                    contact:    {},
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
                  phones = [],
                  emails = [],
                  nodes  = {};

              // console.table(raws.connections);

              $rootScope.data = {};

              angular.forEach(raws.connections, function (connection)
              {
                nodes[connection.id] = connection;
              });

              var sequenced = false;

              angular.forEach(raws.groups, function (group)
              {
                switch (group.name.toString().toUpperCase())
                {
                case 'CONNECTEDNUMBERS':
                  data.connected = {group: group};
                  break;

                case 'BLACKLIST':
                  data.blacklist = {group: group};
                  break;

                case 'CONTACT':
                  data.contact = {group: group};
                  break;

                case 'OWNERCONTACT':
                  data.owner = {group: group};
                  break;

                case 'CONNECTEDNUMBERSEQUENCE':

                  if (group.contactInfoSequence)
                  {
                    data.sequence = group.contactInfoSequence;

                    sequenced = true;
                  }
                  else
                  {
                    sequenced = false;
                  }
                  break;
                }
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

              data.connected.list = {
                verified: [],
                notVerified: []
              };

              if (data.connected.group && data.connected.group.contactInfoIds)
              {
                angular.forEach(data.connected.group.contactInfoIds, function (id)
                {
                  if (nodes[id])
                  {
                    if (nodes[id].verified)
                    {
                      // data.connected.list.verified.push(nodes[id]);
                    }
                    else
                    {
                      data.connected.list.notVerified.push(nodes[id]);
                    }
                  }
                  else
                  {
                    console.log('Error: This node does not exist! (For connections) ->', id);
                  }
                });
              }

              if (!sequenced)
              {
                angular.forEach(data.connected.list.verified, function (verified, index)
                {
                  console.log(verified, index);

                  data.sequence[index] = verified.id;
                });
              }

              // console.log('sequence ->', data.sequence);

              angular.forEach(data.sequence, function (id, rank)
              {
                data.connected.list.verified.push({
                  rank:   Number(rank) + 1,
                  number: nodes[id]
                });

                console.log('node ->', nodes[id]);
              });

//              if (data.connected.group && data.connected.group.contactInfoIds)
//              {
//                angular.forEach(data.connected.group.contactInfoIds, function (id)
//                {
//                  if (nodes[id] && nodes[id].verified)
//                  {
//                    var ranked;
//
//                    angular.forEach(data.sequence, function (sid, rank)
//                    {
//                      if (sid == id)
//                      {
//                        ranked = rank;
//                      }
//                    });
//
//                    data.connected.list.verified.push({
//                      rank:   Number(ranked) + 1,
//                      number: nodes[id]
//                    });
//                  }
//                  else
//                  {
//                    console.log('Error: This node does not exist! (For connections) ->', id);
//                  }
//                });
//              }

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