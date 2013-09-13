define(
  ['controllers/controllers', 'config'],
  function (controllers, config)
  {
    'use strict';

    controllers.controller ('logout',
      [
        '$rootScope', '$scope', '$window', 'Session', 'User', 'Storage',
        function ($rootScope, $scope, $window, Session, User, Storage)
        {





          $('.navbar').hide();
          $('#footer').hide();

          var logindata = angular.fromJson(Storage.get('logindata'));

          Storage.clearAll();

          document.cookie = "WebPaige.session=''; expires=Thu, 01-Jan-1970 00:00:01 GMT";

          User.logout()
            .then(function (result)
            {
              if (result.error)
              {
                console.warn('error ->', result);
              }

              // Storage.clearAll();

              Storage.session.clearAll();

              Storage.add('logindata', angular.toJson(logindata));

              $window.location.href = 'index.html';
            });





        }
      ]
    );
  }
);