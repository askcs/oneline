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
              reloadOnSearch: false,
              resolve: {
                data:
                  [
                    '$rootScope', '$http', 'User', 'MD5', 'Core',
                    function ($rootScope, $http, User, MD5, Core)
                    {
                      return User.login('root'.toLowerCase(), MD5('askaskask'))
                        .then(function (session)
                        {
                          var tmpSessionID = session['X-SESSION_ID'];

                          $http.defaults.headers.common['X-SESSION_ID'] = tmpSessionID;

                          return Core.groups.detailed()
                            .then(function (results)
                            {
                              $rootScope.rootNodes = results;

                              $http.defaults.headers.common['X-SESSION_ID'] = $rootScope.session.id;
                            });
                        });
                    }
                  ]
              }
            })
            .otherwise({
              redirectTo: '/login'
            });
        }
      ]
    );
  }
);