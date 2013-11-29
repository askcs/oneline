define(
  ['filters/filters', 'config'],
  function (filters, config)
  {
    'use strict';


    /**
     * Translate package
     */
    filters.filter('translatePackage',
      [
        function ()
        {
          return function (selected)
          {
            if (selected)
            {
              var gem;

              angular.forEach(config.packages, function (pack)
              {
                if (pack.id == selected)
                {
                  gem = pack;
                }
              });

              return gem.label;
            }
          };
        }
      ]);


    /**
     * Translate country
     */
    filters.filter('translateCountry',
    [
      function ()
      {
        return function (selected)
        {
          if (selected)
          {
            var gem;

            angular.forEach(config.countries, function (country)
            {
              if (country.id == selected)
              {
                gem = country;
              }
            });

            return gem.label;
          }
        };
      }
    ]);


    /**
     * Translate region
     */
    filters.filter('translateRegion',
    [
      function ()
      {
        return function (selected, country)
        {
          if (selected && country)
          {
            var gem;

            angular.forEach(config.regions[country], function (region)
            {
              if (region.id == selected)
              {
                gem = region;
              }
            });

            return gem.label;
          }
        };
      }
    ]);



    /**
     * Translate service
     */
    filters.filter('translateService',
    [
      function ()
      {
        return function (selected)
        {
          if (selected)
          {
            var gem;

            angular.forEach(config.virtuals, function (virtual)
            {
              if (virtual.id == selected)
              {
                gem = virtual;
              }
            });

            return gem.label;
          }
        }
      }
    ]);



    /**
     * Calculate time in displayable format
     */
    filters.filter('calculateTime',
      function ()
      {
        return function (secs)
        {
          secs /= 1000;

          var hours   = Math.floor(secs / (60 * 60)),
              dmin    = secs % (60 * 60),
              minutes = Math.floor(dmin / 60),
              dsec    = dmin % 60,
              seconds = Math.ceil(dsec),
              n       = function (n)
                        {
                          return n > 9 ? '' + n : '0' + n;
                        };

          return n(hours) + ':' + n(minutes) + ':' + n(seconds);
        };
      }
    );


    /**
     * Convert timeStamps to dates
     */
    filters.filter('nicelyDate',
    [
      '$rootScope',
      function ($rootScope)
      {
        return function (date)
        {
          if (typeof date === 'string')
          {
            date = Number(date);
          }

          return new Date(date).toString($rootScope.config.formats.datetime);
        };
      }
    ]);

  }
);
