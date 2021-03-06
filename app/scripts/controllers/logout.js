define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('logout',
      [
        '$rootScope', '$scope', '$window', 'Session', 'User', 'Storage', '$location',
        function ($rootScope, $scope, $window, Session, User, Storage, $location)
        {
          // TODO: Lose jQuery stuff
          $('.navbar').hide();
          $('#footer').hide();

          var logindata = angular.fromJson(Storage.get('logindata'));

          User.logout()
            .then(function (result)
            {
              if (result.error)
              {
                console.warn('error ->', result);
              }

              Storage.clearAll();

              document.cookie = "OneLine.session=''; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/";

              Storage.session.clearAll();

              if (logindata && logindata.remember)
              {
                Storage.add('logindata', angular.toJson(logindata));
              }

              $rootScope.$watch(function ()
              {
                // $rootScope.data = {};
                $rootScope.session = {};

                $rootScope.resetProfileEdit();
              });

              $window.location.href = 'views/logout.html';

              // $location.path('/login');

            });

          // $window.location.href = 'index.html';
        }
      ]
    );
  }
);