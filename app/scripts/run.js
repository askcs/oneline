define(
  ['app', 'config'],
  function (app, config)
  {
    'use strict';

    app.run(
      [
        '$rootScope', '$location', '$timeout', 'Storage', '$window', 'User', 'Session', 'Core', '$http', 'Phone',
        function($rootScope, $location, $timeout, Storage, $window, User, Session, Core, $http, Phone)
        {
          $rootScope.config = config;

          $rootScope.redirectToProfile = function ()
          {
            $rootScope.$emit('setView', 'profile');
          };


          // console.table('contactInfos ->', angular.fromJson(Storage.get('connections')));


          // TODO: Move these checks to jquery.browser
          /*
          $rootScope.browser = $.browser;

          angular.extend($rootScope.browser, {
            screen: $window.screen
          });

          if ($rootScope.browser.ios)
          {
            angular.extend($rootScope.browser, {
              landscape:    Math.abs($window.orientation) == 90 ? true : false,
              portrait:     Math.abs($window.orientation) != 90 ? true : false
            });
          }
          else
          {
            angular.extend($rootScope.browser, {
              landscape:    Math.abs($window.orientation) != 90 ? true : false,
              portrait:     Math.abs($window.orientation) == 90 ? true : false
            });
          }

          $window.onresize = function () { $rootScope.browser.screen = $window.screen; };

          $window.onorientationchange = function ()
          {
            $rootScope.$apply(function ()
            {
              if ($rootScope.browser.ios)
              {
                angular.extend($rootScope.browser, {
                  landscape:    Math.abs($window.orientation) == 90 ? true : false,
                  portrait:     Math.abs($window.orientation) != 90 ? true : false
                });
              }
              else
              {
                angular.extend($rootScope.browser, {
                  landscape:    Math.abs($window.orientation) != 90 ? true : false,
                  portrait:     Math.abs($window.orientation) == 90 ? true : false
                });
              }
            });
          };
          */


          $rootScope.changeLanguage = function (lang) { $rootScope.ui = config.ui[lang]; };

          $rootScope.ui = config.ui[$rootScope.config.lang];


          $rootScope.app = $rootScope.app || {};


          if (angular.fromJson(Storage.cookie.get('session')))
          {
            $http.defaults.headers.common['X-SESSION_ID'] = angular.fromJson(Storage.cookie.get('session')).id;
          }


          if (!$rootScope.app.resources)
          {
            $rootScope.app.resources = angular.fromJson(Storage.get('resources'));

            Session.check();
          }


          // if ($location.path() !== undefined || $location.path() !== '/login')
          if ($location.path() !== '/login')
          {
            Core.factory.process();
          }


          $rootScope.profileEdited = {
            status: false,
            result: false
          };

          $rootScope.forceProfileEdit = function ()
          {
            $rootScope.profileEdit=true;
            $rootScope.profileEdited.status=false;
          };


          $rootScope.phoneNumberParsed = {};

          $rootScope.phoneNumberParsed.result = false;

          $rootScope.checkNumber = function (checked)
          {
            if (checked && checked.length > 0)
            {
//              if (new RegExp('^\\+?[/s]+?[(]+?[-]+?[0-9]+?[)]+?[-]+?[0-9]+$').test($scope.connection.contactInfo))
//              {
              var result, all;

              result = all = Phone.parse(checked, 'NL');

              $rootScope.phoneNumberParsed.result = true;

              if (result)
              {
                var error = 'It seems not to be a phone number!',
                  invalidCountry = 'Invalid country code. Please enter a number from Netherlands.',
                  message;

                if (result.error)
                {
                  $rootScope.phoneNumberParsed = {
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
                      case 'INVALID_COUNTRY_CODE': message = invalidCountry; break;
                      case 'TOO_SHORT': message = error + ' (Number is too short.)'; break;
                      case 'TOO_LONG': message = error + ' (Number is too long)'; break;
                    }

                    $rootScope.phoneNumberParsed = {
                      result:  false,
                      message: message
                    };
                  }
                  else
                  {
                    if (!result.validation.isValidNumber)
                    {
                      $rootScope.phoneNumberParsed = {
                        result:  false,
                        message: error
                      };
                    }
                    else
                    {
                      if (!result.validation.isValidNumberForRegion)
                      {
                        $rootScope.phoneNumberParsed = {
                          result:  false,
                          message: invalidCountry
                        };
                      }
                      else
                      {
                        $rootScope.phoneNumberParsed = {
                          result:  true,
                          message: 'You have entered a correct number. Number is registered for ' +
                            result.validation.phoneNumberRegion +
                            ' and number type is ' +
                            result.validation.getNumberType
                        };

                        $('.inputPhoneNumber').removeClass('error');
                      }
                    }
                  }
                }
              }

              $rootScope.phoneNumberParsed.all = all;
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
              $rootScope.resetPhoneParser();
            }
          };


          $rootScope.resetPhoneParser = function ()
          {
            $rootScope.phoneNumberParsed.result = true;

            delete $rootScope.phoneNumberParsed.message;

            $('.inputPhoneNumber').removeClass('error');
          };


          $rootScope.statusBar =
          {
            init: function ()
            {
              $rootScope.loading = {
                status:   false,
                message:  'Loading..'
              };
            },

            display: function (message)
            {
              $rootScope.loading = {
                status:   true,
                message:  message
              };
            },

            off: function ()
            {
              $rootScope.loading.status = false;
            }
          };

          $rootScope.statusBar.init();


          $rootScope.$on('$routeChangeStart', function ()
          {
            $rootScope.statusBar.display('Loading..');

            $rootScope.location = $location.path().substring(1);

            $('div[ng-view]').hide();
          });



          $rootScope.$on('$routeChangeSuccess', function ()
          {
            $rootScope.newLocation = $location.path();

            $rootScope.loadingBig = false;

            $rootScope.statusBar.off();

            $('div[ng-view]').show();
          });


          // TODO: A better way of dealing with this error!
          $rootScope.$on('$routeChangeError', function (event, current, previous, rejection)
          {
            $rootScope.notifier.error(rejection);
          });


          // TODO: Functionality is broken!! Remove it in time.
          $rootScope.fixStyles = function ()
          {
            var tabHeight = $('.tabs-left .nav-tabs').height();

            $.each($('.tab-content').children(), function ()
            {
              var $this         = $(this).attr('id');

              // console.log('$this ->', $this);

              var contentHeight = $('.tabs-left .tab-content #' + $this).height();

              // console.log('contentHeight ->', contentHeight);

              if (tabHeight > contentHeight)
              {
                $('.tabs-left .tab-content #' + $this).css({
                  height: $('.tabs-left .nav-tabs').height() + 6
                });
              }
            });

            /*
            if ($.os.mac || $.os.linux)
            {
              $('.nav-tabs-app li a span').css({
                paddingTop: '10px',
                marginBottom: '0px'
              });

              // $('#loading').css({
              //   //marginTop: '-160px'
              //   display: 'none'
              // });
            }
            */
          };


          /*
          if ($.os.windows)
          {
            $('#loading p').css({
              paddingTop: '130px'
            });
          }
          */
        }
      ]
    );
  }
);