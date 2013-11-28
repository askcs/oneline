define(
  ['controllers/controllers', 'modals/user'],
  function (controllers, User)
  {
    'use strict';

    controllers.controller ('login',
      [
        '$rootScope', '$location', '$q', '$scope', 'Session', 'Storage', '$routeParams', 'MD5', 'Core', 'User',
        function ($rootScope, $location, $q, $scope, Session, Storage, $routeParams, MD5, Core, User)
        {
          var self = this;


          $scope.alert = {
            login: {
              display:  false,
              type:     '',
              message:  ''
            },
            forgot: {
              display:  false,
              type:     '',
              message:  ''
            }
          };


          if (!Storage.session.get('app')) { Storage.session.add('app', '{}'); }


          // TODO: Lose this jQuery stuff later on!
          $('.navbar').hide();
          $('#footer').hide();
          $('#preloader').hide();


          // TODO: Use native JSON functions of angular and Store service
          var logindata = angular.fromJson(Storage.get('logindata'));


          if (logindata && logindata.remember) { $scope.logindata = logindata; }


          // TODO: Lose jQuery selector
          var loginBtn = $('#login button[type=submit]');


          $scope.login = function ()
          {
            $('#alertDiv').hide();

            if (!$scope.logindata ||
              !$scope.logindata.username ||
              !$scope.logindata.password)
            {
              $scope.alert = {
                login: {
                  display:  true,
                  type:     'alert-error',
                  message:  'Please fill all fields!'
                }
              };

              loginBtn
                .text('Login')
                .removeAttr('disabled');

              return false;
            }

            loginBtn
              .text('Login..')
              .attr('disabled', 'disabled');

            Storage.add('logindata', angular.toJson({
              username: $scope.logindata.username,
              password: $scope.logindata.password,
              remember: $scope.logindata.remember
            }));

            self.auth($scope.logindata.username, MD5($scope.logindata.password));
          };


          self.auth = function (username, password)
          {
            User.login(username.toLowerCase(), password)
              .then(function (result)
              {
                // console.log('result ->', result);

                switch (result.status)
                {
                case 403:
                  $scope.alert = {
                    login: {
                      display:  true,
                      type:     'alert-error',
                      message:  'Wrong username or password!'
                    }
                  };

                  loginBtn
                    .text('Login')
                    .removeAttr('disabled');

                  return false;
                break;

                case 404:
                  $scope.alert = {
                    login: {
                      display:  true,
                      type:     'alert-error',
                      message:  'Something went terribly wrong with login!'
                    }
                  };

                  loginBtn
                    .text('Login')
                    .removeAttr('disabled');

                  return false;
                  break;

                case 500:
                  $scope.alert = {
                    login: {
                      display:  true,
                      type:     'alert-error',
                      message:  'Something went terribly wrong with login!'
                    }
                  };

                  loginBtn
                    .text('Login')
                    .removeAttr('disabled');

                  return false;
                  break;
                }

                Session.set(result['X-SESSION_ID']);

                self.preloader();
              });
          };


          $scope.preloader = {
            count:    0,
            total:    2,
            current:  0,
            fraction: function () { return Math.abs(100 / (this.total * 2)); }
          };


          self.loginAgain = function ()
          {
            $('#login').show();
            $('#preloader').hide();

            $scope.alert = {
              login: {
                display:  true,
                type:     'alert-error',
                message:  'Something went terribly wrong with login! Please try again.'
              }
            };

            loginBtn
              .text('Login')
              .removeAttr('disabled');
          };


          self.preloader = function ()
          {
            $('#login').hide();
            $('#preloader').show();

            self.progress('Loading app related information..');

            Core.connections.list()
              .then(function (connections)
              {
                if (connections.error)
                {
                  self.loginAgain();
                }
                else
                {
                  self.progress('Connected numbers are loaded');

                  Core.settings.list()
                    .then(function (settings)
                    {
                      if (settings.error)
                      {
                        self.loginAgain();
                      }
                      else
                      {
                        self.progress('Notification settings loaded');

                        Core.groups.list()
                          .then(function (groups)
                          {
                            if (groups.error)
                            {
                              self.loginAgain();
                            }
                            else
                            {
                              self.progress('Groups loaded');

                              // Core.factory.process();

                              Core.factory.run()
                                .then(function ()
                                {
                                  $location.path('/core');

                                  setTimeout(function ()
                                  {
                                    $('.navbar').show();
                                  }, 100);
                                });

                            }
                          });
                      }
                    });
                }
              });
          };


          self.progress = function (message)
          {
            $scope.preloader.current = $scope.preloader.current + $scope.preloader.fraction();

            $('#preloader .progress .bar').css({ width: $scope.preloader.current + '%' });

            $('#preloader span').text(message);
          };


          $scope.demoUsers = [
            'apptestoneline',
            'ahmet',
            'cengiz',
            'duco',
            'erik',
            'leon',
            'leonie',
            'sam',
            'shravan',
            'sven',
            'tymon',
            'xiaoyu',
            'yuankun',
            'joose',
            'jordi'
          ];

          $scope.demoLogin = function (user)
          {
            self.auth(user, MD5('askask'));
          }

        }
      ]
    );
  }
);