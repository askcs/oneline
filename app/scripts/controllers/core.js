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
            view = 'purchaser';

            $location.hash('purchaser');
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
        }
      ]
    );
  }
);