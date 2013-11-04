define(
  ['services/services'],
  function (services)
  {
    'use strict';

    services.factory('Phone',
      [
        function ()
        {
          function parse (number, country, carrier)
          {
            return phoneNumberParser(number, country, carrier);
          }

          return {
            parse: parse
          };

        }
      ]
    );
  }
);