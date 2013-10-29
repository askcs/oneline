define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('logout',
      [
        '$rootScope', '$scope', '$window', 'Session', 'User', 'Storage',
        function ($rootScope, $scope, $window, Session, User, Storage)
        {
          // TODO: Lose jQuery stuff
          $('.navbar').hide();
          $('#footer').hide();

          console.log('logging out!');

          var logindata = angular.fromJson(Storage.get('logindata'));

          Storage.clearAll();

          document.cookie = "OneLine.session=''; expires=Thu, 01-Jan-1970 00:00:01 GMT";

          Storage.session.clearAll();

          if (logindata.remember)
          {
            Storage.add('logindata', angular.toJson(logindata));
          }

          $window.location.href = 'index.html';

          User.logout()
            .then(function (result)
            {
              if (result.error)
              {
                console.warn('error ->', result);
              }
            });
        }
      ]
    );
  }
);