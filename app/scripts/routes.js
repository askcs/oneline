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




          /**
           * Login router
           */
          $routeProvider
            .when('/login',
            {
              templateUrl: 'views/login.html',
              controller: 'login'
            })


          /**
           * Forgot password router
           */
            .when('/forgotpass',
            {
              templateUrl: 'views/forgotpass.html',
              controller: 'forgotpass'
            })



          /**
           * Register router
           */
            .when('/register',
            {
              templateUrl: 'views/register.html',
              controller: 'register'
            })


          /**
           * Logout router
           */
            .when('/logout',
            {
              templateUrl: 'views/logout.html',
              controller: 'logout'
            })


          /**
           * Core router
           */
            .when('/core',
            {
              templateUrl:    'views/core.html',
              controller:     'coreCtrl',
              reloadOnSearch: false
            })


          /**
           * Router fallback
           */
            .otherwise({
              redirectTo: '/login'
            });




        }
      ]
    );






  }
);