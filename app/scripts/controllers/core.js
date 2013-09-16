define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('core',
      [
        '$rootScope', '$scope', '$location', 'Core',
        function ($rootScope, $scope, $location, Core)
        {
          Core.factory.process();

          function setView(hash)
          {
            $scope.views = {
              purchaser:  false,
              manager:    false,
              notifier:   false,
              reporter:   false,
              guarder:    false
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

          $rootScope.$on('setView', 'args', function ()
          {
            $scope.setViewTo(arguments[1]);
          });
        }
      ]
    );
  }
);