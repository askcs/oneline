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
            config.host + '/accounts/groups/:id',
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


          var Logs = $resource(
            config.host + '/log',
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

//              deferred.resolve(
//                [
//                  {
//                    "id": 52001,
//                    "scenarioId": 1,
//                    "startTime": 1,
//                    "endTime": 1,
//                    "address": "0643002549",
//                    "type": "phone",
//                    "callState": "answered"
//                  },
//                  {
//                    "id": 52002,
//                    "scenarioId": 1,
//                    "startTime": 1,
//                    "endTime": 324,
//                    "address": "0629143143",
//                    "type": "phone",
//                    "callState": "answered"
//                  }
//                ]
//              );

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
                {id: settings.id},
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

                    Core.prototype.scenarios.build();

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

                  console.log('id ->', connection.id);

                  Storage.add('connections', angular.toJson(filtered));

                  var groups      = angular.fromJson(Storage.get('groups')),
                      connecteds  = [],
                      changed     = [];

                  console.log('before ->', $rootScope.data.connected.group.contactInfoIds);

                  angular.forEach($rootScope.data.connected.group.contactInfoIds, function (node)
                  {
                    console.log('node -> ', node, 'connection ->', connection);

                    if (node.id != connection.id) { connecteds.push(node); }
                  });

                  console.log('connected ->', connecteds);

                  angular.forEach(groups, function (group)
                  {
                    if (group.id === $rootScope.data.connected.group.id) { group.contactInfoIds = connecteds; }

                    changed.push(group);
                  });

                  console.log('changed ->', changed);

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



          Core.prototype.groups = {
            local: function () { return angular.fromJson(Storage.get('groups')); },

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

            update: function (group)
            {
              var deferred = $q.defer();

              Groups.update(
                {id: group.id},
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


          Core.prototype.scenarios = {
            build: function ()
            {
              var deferred = $q.defer();

              var payload = {
                info: 'Ask-Cs One Line scenario',
                connected_numbers: {},
                events: {
                  on_blacklist:           '',
                  on_scenario_complete:   '',
                  on_scenario_exception:  ''
                }
              };

              angular.forEach($rootScope.data.connected.list, function (listed, index)
              {
                payload.connected_numbers[index] = {
                  contactInfoId: listed.id,
                  timeout:       20
                };
              });

              Scenarios.build(
                {},
                payload,
                function (result)
                {
                  console.log('Scenario sucessfully implemented: ', result);

                  deferred.resolve(result);
                },
                function (error)
                {
                  console.log('Scenario build error!');

                  deferred.resolve({error: error});
                }
              );

              return deferred.promise;
            }
          };



          Core.prototype.factory = {
            process: function ()
            {
              var raws = {
                  groups:       angular.fromJson(Storage.get('groups')),
                  connections:  angular.fromJson(Storage.get('connections')),
                  settings:     angular.fromJson(Storage.get('settings'))
                },
                data  = {
                  account:    {},
                  connected:  {},
                  blacklist:  {},
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
                phones  = [],
                emails  = [],
                nodes   = {};

              $rootScope.data = {};

              //console.table(raws.connections);

              angular.forEach(raws.connections, function (connection)
              {
                nodes[connection.id] = connection;
              });

              angular.forEach(raws.groups, function (group)
              {
                switch (group.name)
                {
                case 'ConnectedNumbers':
                  data.connected = {group: group};
                  break;

                case 'BlackList':
                  data.blacklist = {group: group};
                  break;
                }
              });

              angular.forEach(raws.connections, function (connection)
              {
                switch (connection.contactInfoTag)
                {
                case 'Name':
                  data.account.name = connection.contactInfo;
                  break;

                case 'Email':
                  data.account.email = connection.contactInfo;
                  nodes[connection.id] = connection;
                  break;

                case 'Address':
                  data.account.address = connection.contactInfo;
                  break;

                case 'PURCHASED_NUMBER':
                  data.account.purchasedNumber = connection.contactInfo;
                  break;

                case 'Phone':
                  switch (connection.label)
                  {
                  case 'Home':
                    data.account.home = connection.contactInfo;
                    break;

                  case 'Personal':
                    data.account.personal = connection.contactInfo;
                    break;
                  }

                  nodes[connection.id] = connection;
                  break;
                }
              });

              $rootScope.app.resources = data.account;

              angular.forEach(nodes, function (node)
              {
                switch (node.contactInfoTag)
                {
                case 'Phone':
                  phones.push(node);
                  break;

                case 'Email':
                  emails.push(node);
                  break;
                }
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
                switch (setting.medium)
                {
                case 'Email':
                  data.settings.email.id = setting.id;

                  data.settings.email.status = !!((setting.targetContactInfos.length > 0));

                  var emailSetting = (nodes[setting.targetContactInfos[0]]) ?
                    nodes[setting.targetContactInfos[0]].id :
                    data.settings.email.targets[0].id;

                  data.settings.email.original = data.settings.email.target = (setting.targetContactInfos.length > 0) ?
                    emailSetting :
                    data.settings.email.targets[0].id;
                  break;

                case 'SMS':
                  data.settings.sms.id  = setting.id;

                  data.settings.sms.status = !!((setting.targetContactInfos.length > 0));

                  var smsSetting = (nodes[setting.targetContactInfos[0]]) ?
                    nodes[setting.targetContactInfos[0]].id :
                    data.settings.sms.targets[0].id;

                  data.settings.sms.original = data.settings.sms.target = (setting.targetContactInfos.length > 0) ?
                    smsSetting :
                    data.settings.sms.targets[0].id;
                  break;
                }
              });

              data.connected.list = [];

              angular.forEach(data.connected.group.contactInfoIds, function (id)
              {
                data.connected.list.push(nodes[id]);
              });

              //console.table(data.connected.list);

              data.blacklist.list = [];

              angular.forEach(data.blacklist.group.contactInfoIds, function (id)
              {
                data.blacklist.list.push(nodes[id]);
              });

              //console.table(data.blacklist.list);

              data.nodes = nodes;

              console.table(raws.connections);

              $rootScope.data = data;

              console.info('data ->', $rootScope.data);

              return true;
            }
          };


          return new Core();
        }
      ]
    );
  }
);