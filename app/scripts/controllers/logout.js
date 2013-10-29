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

          var logindata = angular.fromJson(Storage.get('logindata'));

          Storage.clearAll();

          console.log('doc cookie before ->', document.cookie);

          document.cookie = "OneLine.session=''; expires=Thu, 01-Jan-1970 00:00:01 GMT";

          console.log('doc cookie after ->', document.cookie);

          Storage.session.clearAll();

          if (logindata.remember)
          {
            Storage.add('logindata', angular.toJson(logindata));
          }

          User.logout()
            .then(function (result)
            {
              if (result.error)
              {
                console.warn('error ->', result);
              }
            });

          $window.location.href = 'index.html';
        }
      ]
    );
  }
);