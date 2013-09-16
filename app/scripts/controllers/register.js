define(
  ['controllers/controllers', 'config'],
  function (controllers, config)
  {
    'use strict';

    controllers.controller('register',
      [
        '$scope',
        function ($scope)
        {
          /**
           * Fix styles
           */
          // $rootScope.fixStyles();
        }
      ]
    );
  }
);