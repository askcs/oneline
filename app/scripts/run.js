define(
  ['app', 'config'],
  function (app, config)
  {
    'use strict';

    app.run(
      [
        '$rootScope', '$location', '$timeout', 'Storage', '$window', 'User', 'Session', 'Core', '$http',
        function($rootScope, $location, $timeout, Storage, $window, User, Session, Core, $http)
        {
          $rootScope.config = config;

          $rootScope.redirectToProfile = function ()
          {
            $rootScope.$emit('setView', 'profile');
          };


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



          if ($location.path() !== '/login')
          {
            Core.factory.process();
          }


          $rootScope.profileEdited = {
            status: false,
            result: false
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


          $rootScope.fixStyles = function ()
          {
            var tabHeight = $('.tabs-left .nav-tabs').height();

            $.each($('.tab-content').children(), function ()
            {
              var $this         = $(this).attr('id'),
                  contentHeight = $('.tabs-left .tab-content #' + $this).height();

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