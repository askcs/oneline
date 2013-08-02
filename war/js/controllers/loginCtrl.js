/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Login', [])


/**
 * Login controller
 */
.controller('login',
[
  '$rootScope', '$location', '$q', '$scope', 'Session', 'User', 'Storage', '$routeParams', 'MD5', 'Core',
  function ($rootScope, $location, $q, $scope, Session, User, Storage, $routeParams, MD5, Core)
	{
    /**
     * Self this
     */
    var self = this;


    /**
     * Set default views
     */
    if ($routeParams.uuid && $routeParams.key)
    {
      $scope.views = {
        changePass: true
      };

      $scope.changepass = {
        uuid: $routeParams.uuid,
        key:  $routeParams.key
      };
    }
    else
    {
      $scope.views = {
        login: true,
        forgot: false
      };
    }


    /**
     * Set default alerts
     */
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


    /**
     * Init rootScope app info container
     */
    if (!Storage.session.get('app'))
    {
      Storage.session.add('app', '{}');
    }


    /**
     * TODO (Lose this jQuery stuff later on!)
     *
     * Jquery solution of toggling between login and app view
     */
    $('.navbar').hide();
    $('#footer').hide();
    $('#preloader').hide();


    /**
     * TODO (Use native JSON functions of angular and Store service)
     */
    var logindata = angular.fromJson(Storage.get('logindata'));

    if (logindata && logindata.remember)
    {
      $scope.logindata = logindata;
    }

    var loginBtn = $('#login button[type=submit]');


    /**
     * TODO (Remove unneccessary DOM manipulation Use cookies for user credentials)
     * Login trigger
     */
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


    /**
     * Authorize user
     */
    self.auth = function (username, password)
    {
      User.login(username.toLowerCase(), password)
        .then(function (result)
        {
          if (result.status === 403)
          {
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
          }
          else
          {
            Session.set(result['X-SESSION_ID']);

            self.preloader();
          }
        });
    };


    /**
     * Preloader counters
     */
    $scope.preloader = {
      count:    0,
      total:    3,
      current:  0,
      fraction: function ()
      {
        return Math.abs(100 / (this.total * 2));
      }
    };


    /**
     * TODO (What happens if preloader stucks? Optimize preloader and messages)
     *
     * Initialize preloader
     */
    self.preloader = function ()
    {
      $('#login').hide();
      $('#download').hide();
      $('#preloader').show();


      User.resources()
        .then(function ()
        {
          self.progress('User information loaded');

          self.appInit();
        });


      Core.connectedNumbers.list()
        .then(function ()
        {
          self.progress('Connected numbers are loaded');

          self.appInit();
        });


      Core.notifications.list()
        .then(function ()
        {
          self.progress('Notification settings loaded');

          self.appInit();
        });


      // 4. blacklist stuff
    };


    /**
     * Redirect to dashboard
     */
    self.appInit = function ()
    {
      $scope.preloader.count++;

      self.progress();

      if ($scope.preloader.count === $scope.preloader.total)
      {
        self.progress();

        $location.path('/core');

        setTimeout(function ()
        {
          $('.navbar').show();

          if (!$rootScope.browser.mobile)
          {
            $('#footer').show();
          }
        }, 100);
      }
    };


    /**
     * Progress bar
     */
    self.progress = function (message)
    {
      $scope.preloader.current = $scope.preloader.current + $scope.preloader.fraction();

      $('#preloader .progress .bar').css({ width: $scope.preloader.current + '%' });

      $('#preloader span').text(message);
    };

	}
]);