define(
  ['services/services'],
  function (services)
  {
    'use strict';

    services.factory('Phone',
      [
        '$rootScope',
        function ($rootScope)
        {
          function parse (number, country, carrier)
          {
            var result = $rootScope.phoneNumberParsed = phoneNumberParser(number, country, carrier);

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