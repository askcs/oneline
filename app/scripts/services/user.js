define(
  ['services/services'],
  function (services)
  {
    'use strict';

    services.factory('User2',
      [
        function ()
        {
          return {
            get: function ()
            {
              return 'Test User';
            }
          };
        }
      ]
    );
  }
);