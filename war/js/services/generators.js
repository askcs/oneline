'use strict';


angular.module('WebPaige.Services.Generators', ['ngResource'])


/**
 * Custom genrators
 */
.factory('Generators', 
  function ()
  {
    return {

      /**
       * Produce range
       */
      range: function ()
      {
        var min = 5,
            max = 120;

        return Math.floor( Math.random() * (max - min + 1) ) + min;
      },

      /**
       * Produce number
       */
      number: function ()
      {
        return Math.floor( Math.random() * 9000000 );
      },

      /**
       * Produce numbers list
       */
      list: function ()
      {
        var numbers = [];

        for (var i = 0; i < this.range(); i++)
        {
          var number = String(this.number());

          if (number.length > 6) numbers.push(Number(number));
        }

        console.log('passed numbers ->', numbers);

        return numbers;
      }
    }
  }
);