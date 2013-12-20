define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('core',
      [
        '$rootScope', '$scope', '$location',
        function ($rootScope, $scope, $location)
        {
          $rootScope.profile.data = $rootScope.data.account;

          function setView(hash)
          {
            $rootScope.resetPhoneParser();

            $scope.views = {
              purchaser:  false,
              manager:    false,
              notifier:   false,
              reporter:   false,
              guarder:    false,
              profile:    false,
              overview:   false
            };

            $scope.views[hash] = true;
          }

          $scope.setViewTo = function (hash)
          {
            $scope.$watch(hash, function ()
            {
              $location.hash(hash);

              setView(hash);
            });
          };

          var view;

          if (!$location.hash())
          {
            view = 'manager';

            $location.hash('manager');
          }
          else
          {
            view = $location.hash();
          }

          setView(view);

          $rootScope.$on('setView', function ()
          {
            $scope.setViewTo(arguments[1]);
          });

          jQuery(document).bind('keydown', 'ctrl+o',function (event)
          {
            if (event.ctrlKey && event.keyCode == 79)
            {
              $location.path('/overview');
              $scope.$apply();
            }
            return false;
          });
        }
      ]
    );
  }
);