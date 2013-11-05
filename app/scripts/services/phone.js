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
            var result = phoneNumberParser(number, country, carrier);

            console.log('result ->', result);

            return result;
          }

          return {
            parse: parse
          };

        }
      ]
    );
  }
);