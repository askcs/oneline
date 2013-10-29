define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('profile',
      [
        '$rootScope', '$scope', 'Core', 'Storage',
        function ($rootScope, $scope, Core, Storage)
        {
          $rootScope.fixStyles();
        }
      ]
    );
  }
);