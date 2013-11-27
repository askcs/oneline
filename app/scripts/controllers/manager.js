define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller('manager',
      [
        '$rootScope', '$scope', 'Core', 'Storage',
        function ($rootScope, $scope, Core, Storage)
        {
          $rootScope.fixStyles();








          $scope.list = ["one", "two", 'three'];

          $('#secondtry').sortable({items: 'li',
            update: function (event, ui)
            {
              //Convert the ordered list into an array
              var new_order = $('ol').sortable('toArray');

              console.log('new order ->', new_order);

              //Loop through the array and assign the input
              //that matches the li id the new position value
              $.each(new_order, function (i, element)
              {
                $('input[name='+element+']').attr('value', i+1);

                console.log('i - element ->', i, element);
              });

              console.log('new order ->', new_order);
            }
          });


          $('#firsttry').sortable({
            items: 'tbody tr',
            update: function (event, ui)
            {
              console.log('new list ->', $('#firsttry').sortable('toArray'));

              $.each($('#firsttry tbody tr'), function (i, element)
              {
                console.log('i - element ->', i, element);

//                $.each($('#firsttry tbody tr td'), function (i2, element2)
//                {
//                  console.log('i2 - element 2 ->', i, i2, element, element2);
//                });

              });
            }
          });









          /*
          $scope.phoneNumberParsed = {};

          $scope.phoneNumberParsed.result = false;

          $scope.checkNumber = function ()
          {
            if ($scope.connection.contactInfo.length > 0)
            {
//              if (new RegExp('^\\+?[/s]+?[(]+?[-]+?[0-9]+?[)]+?[-]+?[0-9]+$').test($scope.connection.contactInfo))
//              {
              var result, all;

              result = all = Phone.parse($scope.connection.contactInfo, 'NL');

              $scope.phoneNumberParsed.result = true;

              if (result)
              {
                var error = 'It seems not to be a phone number!',
                    invalidCountry = 'Invalid country code. Please enter a number from Netherlands.',
                    message;

                if (result.error)
                {
                  $scope.phoneNumberParsed = {
                    result:  false,
                    message: error
                  };
                }
                else
                {
                  if (!result.validation.isPossibleNumber)
                  {
                    switch (result.validation.isPossibleNumberWithReason)
                    {
                    case 'INVALID_COUNTRY_CODE':
                      message = invalidCountry;
                      break;
                    case 'TOO_SHORT':
                      message = error + ' (Number is too short.)';
                      break;
                    case 'TOO_LONG':
                      message = error + ' (Number is too long)';
                      break;
                    }

                    $scope.phoneNumberParsed = {
                      result:  false,
                      message: message
                    };
                  }
                  else
                  {
                    if (!result.validation.isValidNumber)
                    {
                      $scope.phoneNumberParsed = {
                        result:  false,
                        message: error
                      };
                    }
                    else
                    {
                      if (!result.validation.isValidNumberForRegion)
                      {
                        $scope.phoneNumberParsed = {
                          result:  false,
                          message: invalidCountry
                        };
                      }
                      else
                      {
                        $scope.phoneNumberParsed = {
                          result:  true,
                          message: 'You have entered a correct number. Number is registered for ' +
                            result.validation.phoneNumberRegion +
                            ' and number type is ' +
                            result.validation.getNumberType
                        };

                        $('#inputPhoneNumber').removeClass('error');
                      }
                    }
                  }
                }
              }

              $scope.phoneNumberParsed.all = all;
//              }
//              else
//              {
//                $scope.phoneNumberParsed = {
//                  result:  false,
//                  message: 'It does not seem like a number at all! Are you sure about that?'
//                };
//              }
            }
            else
            {
              $scope.phoneNumberParsed.result = true;

              delete $scope.phoneNumberParsed.message;

              $('#inputPhoneNumber').removeClass('error');
            }
          };
          */









          $scope.resetConnection = function ()
          {
            $scope.connection = {
              label:          '',
              contactInfo:    '',
              contactInfoTag: 'Phone'
            };
          };


          $scope.resetConnection();


          $scope.verified = {
            status: false,
            result: null
          };

          $scope.verifying = {};

          $scope.verificationCode = {};

          $scope.resetVerifiers = function ()
          {
            angular.forEach($rootScope.data.connected.list, function (connection)
            {
              $scope.verifying[connection.id] = false;

              $scope.verificationCode[connection.id] = '';

              $('#verifyBtn-' + connection.id)
                .text('Verify')
                .removeAttr('disabled');
            });
          };


          $scope.connections = {

            local: function () { return Core.connections.local(); },

            list: function ()
            {
              $rootScope.statusBar.display('Getting the list of connected numbers..');

              Core.connections.list()
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  Core.factory.process();
                });
            },

            save: function ()
            {
              if ($scope.connection.label !== '' || $scope.connection.contactInfo !== '')
              {
                $rootScope.statusBar.display('Saving the number..');

                Core.connections.save($scope.connection)
                  .then(function ()
                  {
                    $rootScope.statusBar.off();

                    $scope.resetConnection();

                    Core.factory.process();
                  });
              }
            },

            remove: function (number)
            {
              $rootScope.statusBar.display('Deleting a number..');

              Core.connections.remove(number)
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  Core.factory.process();
                });
            },

            edit: function (number)
            {
              angular.forEach($rootScope.data.connected.list, function (connection)
              {
                if (number.id === connection.id) { $scope.connection = connection; }
              });
            },

            verify: {
              initiate: function (number)
              {
                $rootScope.statusBar.display('Verification call initiated or message is being sent..');

                $scope.resetVerifiers();

                $('#verifyBtn-' + number.id)
                  .text('Sending verification code..')
                  .attr('disabled', 'disabled');

                Core.connections.verify.initiate(number)
                  .then(function (result)
                  {
                    $scope.resetVerifiers();

                    $scope.verifying[number.id] = true;

                    $rootScope.statusBar.off();

                    $scope.verificationInfoID = result.verificationInfo.id;
                  });
              },

              confirm: function (number)
              {
                $rootScope.statusBar.display('Verifying your number and code..');

                Core.connections.verify.confirm($scope.verificationCode[number.id], $scope.verificationInfoID)
                  .then(function (result)
                  {
                    $rootScope.statusBar.off();

                    $scope.verified = {
                      status: true,
                      result: result.verified
                    };

                    if (result.verified)
                    {
                      var connections = angular.fromJson(Storage.get('connections'));

                      angular.forEach(connections, function (connection)
                      {
                        if (connection.id === number.id) { connection.verified = true; }
                      });

                      Storage.add('connections', angular.toJson(connections));

                      Core.factory.process();
                    }

                    $scope.resetVerifiers();

                  });
              }
            }
          };

        }
      ]
    );
  }
);