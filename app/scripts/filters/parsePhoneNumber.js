define(
  ['filters/filters', 'config'],
  function (filters, config)
  {
    'use strict';

    filters.filter('parsePhoneNumber',
      [
        'Phone',
        function (Phone)
        {
          return function (number)
          {
            var result = Phone.parse(number, 'NL');

            return result.validation.getNumberType;
          }
        }
      ]
    );
  }
);
