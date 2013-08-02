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

    $scope.preloader = {
      count: 0,
      total: 2
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


      // 1. contact infos
      User.resources()
        .then(function ()
        {
          self.redirectToDashboard();
        });

      // 2. connected numbers
      Core.connectedNumbers.list()
        .then(function ()
        {
          self.redirectToDashboard();
        });


      // 3. get notifications settings
//      Core.notifications.list()
//        .then(function (result)
//        {
//          $rootScope.statusBar.off();
//
//          console.log('notification settings ->', result);
//
//          angular.forEach(result, function (setting)
//          {
//            if (setting.medium === 'SMS')
//            {
//              Core.connectedNumbers.get({ id: setting.targetContactInfos[0] })
//                .then(function (suc)
//                {
//                  $scope.notification.sms = {
//                    status: true,
//                    target: suc
//                  }
//                });
//            }
//          });


      // 4. blacklist stuff
    };


    /**
     * Redirect to dashboard
     */
    self.redirectToDashboard = function ()
    {
      $scope.preloader.count++;

      self.progress((100 * $scope.preloader.count) / $scope.preloader.total);

      if ($scope.preloader.count === $scope.preloader.total)
      {
        $location.path('/core');

        setTimeout(function ()
        {
          $('.navbar').show();
          if (!$rootScope.browser.mobile) $('#footer').show();
        }, 100);
      }
    };


    /**
     * Progress bar
     */
    self.progress = function (ratio)
    {
      $('#preloader .progress .bar').css({ width: ratio + '%' });
    };

	}
]);