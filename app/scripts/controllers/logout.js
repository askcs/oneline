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

              $window.location.href = 'logout.html';
            });





        }
      ]
    );
  }
);