/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Login', [])


/**
 * Login controller
 */
.controller('login',
[
  '$rootScope', '$location', '$q', '$scope', 'Session', 'User', 'Storage', '$routeParams', 'MD5',
  function ($rootScope, $location, $q, $scope, Session, User, Storage, $routeParams, MD5)
	{
		/**
		 * Fix styles
		 */
		$rootScope.fixStyles();






    /**
     * Self this
     */
    var self = this;

    /**
     * Redirect to dashboard if logged in
     */
    // if (Session.check()) redirectToDashboard();


    /**
     * Set default views
     */
    if ($routeParams.uuid && $routeParams.key)
    {
      $scope.views = {
        changePass: true,
      };

      $scope.changepass = {
        uuid: $routeParams.uuid,
        key:  $routeParams.key,
      }
    }
    else
    {
      $scope.views = {
        login: true,
        forgot: false
      };
    }


    /**
     * KNRM users for testing
     */
    if ($rootScope.config.demo_users) $scope.demo_users = demo_users;


    /**
     * Real KNRM users for testing
     */
    $scope.knrmLogin = function (user)
    {
      $('#login button[type=submit]')
        .text('Login..')
        .attr('disabled', 'disabled');

      self.auth(user.uuid, user.resources.askPass);
    };


    /**
     * Set default alerts
     */
    $scope.alert = {
      login: {
        display: false,
        type: '',
        message: ''
      },
      forgot: {
        display: false,
        type: '',
        message: ''
      }
    };


    /**
     * Init rootScope app info container
     */
    if (!Storage.session.get('app')) Storage.session.add('app', '{}');


    /**
     * TODO
     * Lose this jQuery stuff later on!
     *
     * Jquery solution of toggling between login and app view
     */
    $('.navbar').hide();
    $('#footer').hide();
    $('#watermark').hide();
//    $('body').css({
//      'background': 'url(../' + $rootScope.config.profile.background + ') no-repeat center center fixed',
//      'backgroundSize': 'cover'
//    });


    /**
     * TODO
     * use native JSON functions of angular and Store service
     */
    var logindata = angular.fromJson(Storage.get('logindata'));

    if (logindata && logindata.remember) $scope.logindata = logindata;


    /**
     * TODO
     * Remove unneccessary DOM manipulation
     * Use cookies for user credentials
     *
     * Login trigger
     */
    $scope.login = function()
    {
      $('#alertDiv').hide();

      if (!$scope.logindata ||
        !$scope.logindata.username ||
        !$scope.logindata.password)
      {
        $scope.alert = {
          login: {
            display: true,
            type: 'alert-error',
            message: $rootScope.ui.login.alert_fillfiled
          }
        };

        $('#login button[type=submit]')
          .text('Login')
          .removeAttr('disabled');

        return false;
      }

      $('#login button[type=submit]')
        .text('Login..')
        .attr('disabled', 'disabled');

      Storage.add('logindata', angular.toJson({
        username: $scope.logindata.username,
        password: $scope.logindata.password,
        remember: $scope.logindata.remember
      }));

      self.auth( $scope.logindata.username, MD5($scope.logindata.password ));
    };


    /**
     * Authorize user
     */
    self.auth = function (username, password)
    {
      User.login(username.toLowerCase(), password)
        .then(function (result)
        {
          if (result.status == 403)
          {
            $scope.alert = {
              login: {
                display: true,
                type: 'alert-error',
                message: $rootScope.ui.login.alert_wrongUserPass
              }
            };

            $('#login button[type=submit]')
              .text('Login')
              .removeAttr('disabled');

            return false;
          }
          else
          {
            Session.set(result["X-SESSION_ID"]);

            console.log('login success ->', result["X-SESSION_ID"]);



            User.resources()
            .then(function (resources)
            {
              console.log('resources ->', resources);

              /**
               * TODO
               * Remove redirecting directly to app later on
               * and build pre-loading mechanism for fetching
               * dependencies
               */
              self.redirectToDashboard();
            });

//            self.preloader();
          }
        });
    };


    /**
     * TODO
     * What happens if preloader stucks?
     * Optimize preloader and messages
     *
     * Initialize preloader
     */
    self.preloader = function()
    {
      $('#login').hide();
      $('#download').hide();
      $('#preloader').show();

      self.progress(30, $rootScope.ui.login.loading_User);

      User.resources()
        .then(function (resources)
        {
          if (resources.error)
          {
            console.warn('error ->', resources);
          }
          else
          {
            $rootScope.app.resources = resources;

            self.progress(70, $rootScope.ui.login.loading_Group);

            Groups.query(true)
              .then(function (groups)
              {
                if (groups.error)
                {
                  console.warn('error ->', groups);
                }
                else
                {
                  var settings  = angular.fromJson(resources.settingsWebPaige) || {},
                    sync      = false,
                    parenting = false,
                    defaults  = $rootScope.config.defaults.settingsWebPaige,
                    _groups   = function (groups)
                    {
                      var _groups = {};
                      angular.forEach(groups, function (group, index) { _groups[group.uuid] = true; });
                      return _groups;
                    };

                  // Check if there is any settings at all
                  if (settings != null || settings != undefined)
                  {
                    // check for user settigns-all
                    if (settings.user)
                    {
                      // check for user-language settings
                      if (settings.user.language)
                      {
                        // console.warn('user HAS language settings');
                        $rootScope.changeLanguage(angular.fromJson(resources.settingsWebPaige).user.language);
                        defaults.user.language = settings.user.language;
                      }
                      else
                      {
                        // console.warn('user has NO language!!');
                        $rootScope.changeLanguage($rootScope.config.defaults.settingsWebPaige.user.language);
                        sync = true;
                      }
                    }
                    else
                    {
                      // console.log('NO user settings at all !!');
                      sync = true;
                    };

                    // check for app settings-all
                    if (settings.app)
                    {
                      // check for app-widget settings
                      if (settings.app.widgets)
                      {
                        // check for app-widget-groups setting
                        if (settings.app.widgets.groups)
                        {
                          // console.warn('user HAS app widgets groups settings');
                          defaults.app.widgets.groups = settings.app.widgets.groups;
                        }
                        else
                        {
                          // console.warn('user has NO app widgets groups!!');
                          defaults.app.widgets.groups = _groups(groups);
                          sync = true;
                        }
                      }
                      else
                      {
                        // console.warn('user has NO widget settings!!');
                        defaults.app.widgets = { groups: _groups(groups) };
                        sync = true;
                      };

                      // check for app group setting
                      if (settings.app.group && settings.app.group != undefined)
                      {
                        // console.warn('user HAS app first group setting');
                        defaults.app.group = settings.app.group;
                      }
                      else
                      {
                        // console.warn('user has NO first group setting!!');
                        parenting = true;
                        sync      = true;
                      }
                    }
                    else
                    {
                      // console.log('NO app settings!!');
                      defaults.app = { widgets: { groups: _groups(groups) } };
                      sync = true;
                    }
                  }
                  else
                  {
                    // console.log('NO SETTINGS AT ALL!!');
                    defaults = {
                      user: $rootScope.config.defaults.settingsWebPaige.user,
                      app: {
                        widgets: {
                          groups: _groups(groups)
                        },
                        group: groups[0].uuid
                      }
                    };
                    sync = true;
                  }

                  // sync settings with missing parts also parenting check
                  if (sync)
                  {
                    if (parenting)
                    {
                      // console.warn('setting up parent group for the user');

                      Groups.parents()
                        .then(function (_parent)
                        {
                          // console.warn('parent group been fetched ->', _parent);

                          if (_parent != null)
                          {
                            // console.warn('found parent parent -> ', _parent);

                            defaults.app.group = _parent;
                          }
                          else
                          {
                            // console.warn('setting the first group in the list for user ->', groups[0].uuid);

                            defaults.app.group = groups[0].uuid;
                          };

                          // console.warn('SAVE ME (with parenting) ->', defaults);

                          Settings.save(resources.uuid, defaults)
                            .then(function (setted)
                            {
                              User.resources()
                                .then(function (got)
                                {
                                  // console.log('gotted (with setting parent group) ->', got);
                                  $rootScope.app.resources = got;

                                  finalize();
                                })
                            });

                        });
                    }
                    else
                    {
                      // console.warn('SAVE ME ->', defaults);

                      defaults.app.group = groups[0].uuid;

                      Settings.save(resources.uuid, defaults)
                        .then(function (setted)
                        {
                          User.resources()
                            .then(function (got)
                            {
                              // console.log('gotted ->', got);
                              $rootScope.app.resources = got;

                              finalize();
                            })
                        });
                    }
                  }
                  else
                  {
                    finalize();
                  }
                };
              });
          };
        });
    };


    /**
     * Finalize the preloading
     */
    function finalize ()
    {
      // console.warn( 'settings ->',
      //               'user ->', angular.fromJson($rootScope.app.resources.settingsWebPaige).user,
      //               'widgets ->', angular.fromJson($rootScope.app.resources.settingsWebPaige).app.widgets,
      //               'group ->', angular.fromJson($rootScope.app.resources.settingsWebPaige).app.group);

      self.progress(100, $rootScope.ui.login.loading_everything);

      self.redirectToDashboard();

      self.getMessages();

      self.getMembers();
    }

    /**
     * TODO
     * Implement an error handling
     *
     * Get members list (SILENTLY)
     */
    self.getMembers = function ()
    {
      var groups = Storage.local.groups();

      Groups.query()
        .then(function (groups)
        {
          var calls = [];

          angular.forEach(groups, function (group, index)
          {
            calls.push(Groups.get(group.uuid));
          });

          $q.all(calls)
            .then(function (result)
            {
              // console.warn('members ->', result);
              Groups.uniqueMembers();
            });
        });
    };


    /**
     * TODO
     * Implement an error handling
     *
     * Get messages (SILENTLY)
     */
    self.getMessages = function ()
    {
      Messages.query()
        .then(function (messages)
        {
          if (messages.error)
          {
            console.warn('error ->', messages);
          }
          else
          {
            $rootScope.app.unreadMessages = Messages.unreadCount();

            Storage.session.unreadMessages = Messages.unreadCount();
          };
        });
    };


    /**
     * Redirect to dashboard
     */
    self.redirectToDashboard = function ()
    {
      $location.path('/core');

      setTimeout(function ()
      {
//        $('body').css({ 'background': 'none' });
        $('.navbar').show();
        // $('#mobile-status-bar').show();
        // $('#notification').show();
        if (!$rootScope.browser.mobile) $('#footer').show();
//        $('#watermark').show();
//        $('body').css({ 'background': 'url(../img/bg.jpg) repeat' });
      }, 100);
    };


    /**
     * Progress bar
     */
    self.progress = function (ratio, message)
    {
      $('#preloader .progress .bar').css({ width: ratio + '%' });
      $('#preloader span').text(message);
    };


    /**
     * RE-FACTORY
     * TODO
     * Make button state change!
     * Finish it!
     *
     * Forgot password
     */
    $scope.forgot = function ()
    {
      $('#forgot button[type=submit]').text('setting ...').attr('disabled', 'disabled');

      User.password($scope.remember.id)
        .then(function (result)
        {
          if (result == "ok")
          {
            $scope.alert = {
              forget : {
                display : true,
                type : 'alert-success',
                message : 'Please check your email to reset your password!'
              }
            };
          }
          else
          {
            $scope.alert = {
              forget : {
                display : true,
                type : 'alert-error',
                message : 'Error, we can not find this account !'
              }
            };
          };

          $('#forgot button[type=submit]')
            .text('change password')
            .removeAttr('disabled');
        });
    };


    /**
     * RE-FACTORY
     * Change password
     */
    self.changePass =  function (uuid, newpass, key)
    {
      User.changePass(uuid, newpass, key)
        .then(function (result)
        {
          if(result.status == 400 || result.status == 500 || result.status == 409)
          {
            $scope.alert = {
              changePass : {
                display : true,
                type : 'alert-error',
                message : 'Something wrong with password changing!'
              }
            };
          }
          else
          { // successfully changed
            $scope.alert = {
              changePass : {
                display : true,
                type : 'alert-success',
                message : 'Password changed!'
              }
            };

            $location.path( "/message" );
          };

          $('#changePass button[type=submit]')
            .text('change password')
            .removeAttr('disabled');
        })
    };


    /**
     * RE-FACTORY
     * Change password
     */
    $scope.changePass = function ()
    {
      $('#alertDiv').hide();

      if (!$scope.changeData || !$scope.changeData.newPass || !$scope.changeData.retypePass)
      {
        $scope.alert = {
          changePass : {
            display : true,
            type : 'alert-error',
            message : 'Please fill all fields!'
          }
        };

        $('#changePass button[type=submit]')
          .text('change password')
          .removeAttr('disabled');

        return false;
      }
      else if ($scope.changeData.newPass != $scope.changeData.retypePass)
      {
        $scope.alert = {
          changePass : {
            display : true,
            type : 'alert-error',
            message : 'Please make the reType password is indentical !'
          }
        };

        $('#changePass button[type=submit]')
          .text('change password')
          .removeAttr('disabled');

        return false;
      };

      $('#changePass button[type=submit]')
        .text('changing ...')
        .attr('disabled', 'disabled');

      self.changePass($scope.changepass.uuid, MD5($scope.changeData.newPass), $scope.changepass.key);
    };

	}
]);