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
     * TODO
     * Lose this jQuery stuff later on!
     *
     * Jquery solution of toggling between login and app view
     */
    $('.navbar').hide();
    $('#footer').hide();
    $('#preloader').hide();


    /**
     * TODO
     * use native JSON functions of angular and Store service
     */
    var logindata = angular.fromJson(Storage.get('logindata'));

    if (logindata && logindata.remember)
    {
      $scope.logindata = logindata;
    }


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
            display:  true,
            type:     'alert-error',
            message:  $rootScope.ui.login.alert_fillfiled
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

            $('#login button[type=submit]')
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
     * TODO
     * What happens if preloader stucks?
     * Optimize preloader and messages
     *
     * Initialize preloader
     */
    self.preloader = function ()
    {
      $('#login').hide();
      $('#download').hide();
      $('#preloader').show();

      self.progress(30, 'Loading user information..');


      User.resources()
        .then(function (resources)
        {

          // 1. contact infos

          // 2. get notifications settings

          // 3. blacklist stuff

          /**
           * TODO
           * Remove redirecting directly to app later on
           * and build pre-loading mechanism for fetching
           * dependencies
           */
          self.redirectToDashboard();
        });
    };


    /**
     * Finalize the preloading
     */
    function finalize()
    {
      self.progress(100, $rootScope.ui.login.loading_everything);

      self.redirectToDashboard();
    }


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

	}
]);