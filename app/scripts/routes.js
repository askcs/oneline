define(
  ['app'],
  function (app)
  {
    'use strict';

    app.config(
      [
        '$routeProvider',
        function ($routeProvider)
        {
          $routeProvider
            .when('/login',
            {
              templateUrl:    'views/login.html',
              controller:     'login'
            })
            .when('/forgotpass',
            {
              templateUrl:    'views/forgotpass.html',
              controller:     'forgotpass'
            })
            .when('/register',
            {
              templateUrl:    'views/register.html',
              controller:     'register'
            })
            .when('/logout',
            {
              templateUrl:    'views/logout.html',
              controller:     'logout'
            })
            .when('/core',
            {
              templateUrl:    'views/core.html',
              controller:     'core',
              reloadOnSearch: false
            })
            .when('/overview',
            {
              templateUrl:    'views/overview.html',
              controller:     'overview',
              reloadOnSearch: false
            })
            .otherwise({
              redirectTo: '/login'
            });
        }
      ]
    );
  }
);