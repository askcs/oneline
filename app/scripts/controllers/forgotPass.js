define(
  ['controllers/controllers', 'config'],
  function (controllers, config)
  {
    'use strict';

    controllers.controller ('forgotPass',
      [
        '$rootScope', '$scope', '$location',
        function ($rootScope, $scope, $location)
        {


          /**
           * Fix styles
           */
          $rootScope.fixStyles();




        }
      ]
    );
  }
);