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




          /**
           * Pass config and init dynamic config values
           */
          $rootScope.config = config;

          // $rootScope.config.init();





          /**
           * TODO
           * Move these checks to jquery.browser
           *
           * Pass Jquery browser data to angular
           */

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


          /**
           * Default language and change language
           */
          $rootScope.changeLanguage = function (lang)
                                      {
                                        $rootScope.ui = config.ui[lang];
                                      };

          $rootScope.ui = config.ui[$rootScope.config.lang];




          /**
           * If periods are not present calculate them
           */
          // if (!Storage.get('periods')) Dater.registerPeriods();




          /**
           * Set important info back if refreshed
           */
          $rootScope.app = $rootScope.app || {};




          /**
           * Set up resources
           */

          // console.log('User ->', User);

          // User.owner.process(User.owner.get());

          if (angular.fromJson(Storage.cookie.get('session')))
          {
            $http.defaults.headers.common['X-SESSION_ID'] = angular.fromJson(Storage.cookie.get('session')).id;
          }


          /**
           * In any case of there is no session or neither resources stored in app cache
           */
          if (!$rootScope.app.resources)
          {
            $rootScope.app.resources = angular.fromJson(Storage.get('resources'));

            Session.check();
          }


          /**
           * Count unread messages
           */
          // if (!$rootScope.app.unreadMessages) Messages.unreadCount();




          /**
           * Show action loading messages
           */
          $rootScope.statusBar =
          {
            init: function ()
            {
              $rootScope.loading = {
                status:   false,
                message:  'Loading..'
              };

              // $rootScope.app.preloader = {
              //   status: false,
              //   total:  0,
              //   count:  0
              // }
            },

            display: function (message)
            {
              // $rootScope.app.preloader || {status: false};

              // $rootScope.app.preloader.status = false;

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





//    $rootScope.notification = {
//      status:   false,
//      type:     '',
//      message:  ''
//    };





          /**
           * Show notifications
           */
//    $rootScope.notifier =
//    {
//      init: function (status, type, message)
//      {
//        $rootScope.notification.status = true;
//
//        if ($rootScope.browser.mobile && status == true)
//        {
//          $window.alert(message);
//        }
//        else
//        {
//          $rootScope.notification = {
//            status:   status,
//            type:     type,
//            message:  message
//          };
//        }
//      },
//
//      success: function (message, permanent)
//      {
//        console.log('success ->', message);
//
//        this.init(true, 'alert-success', message);
//
//        if (!permanent) this.destroy();
//      },
//
//      error: function (message, permanent)
//      {
//        this.init(true, 'alert-danger', message);
//
//        if (!permanent) this.destroy();
//      },
//
//      destroy: function ()
//      {
//        setTimeout(function ()
//        {
//          $rootScope.notification.status = false;
//        }, 5000);
//      }
//    };

//    $rootScope.notifier.init(false, '', '');





          /**
           * Allow webkit desktop notifications
           */
          // $rootScope.allowWebkitNotifications = function ()
          // {
          //   // Callback so it will work in Safari
          //   $window.webkitNotifications.requestPermission(function () {});
          // };


          /**
           * Set webkit notification
           */
          // $rootScope.setWebkitNotification = function (title, message, params)
          // {
          //   if ($window.webkitNotifications && config.notifications.webkit.app)
          //   {
          //     var notification =  $window.webkitNotifications.createNotification(
          //                           location.protocol + "//" + location.hostname + (location.port && ":" + location.port) +
          //                           '/js/profiles/' + config.profile.meta + '/images/ico/apple-touch-icon-144x144-precomposed.png',
          //                           title,
          //                           message
          //                         );

          //     notification.onclick = function ()
          //     {
          //       $rootScope.$apply(function ()
          //       {
          //         if (params.search && !params.hash)
          //         {
          //           $location.path('/' + params.path).search(params.search);
          //         }
          //         else if (!params.search && params.hash)
          //         {
          //           $location.path('/' + params.path).hash(params.hash);
          //         }
          //         else if (!params.search && !params.hash)
          //         {
          //           $location.path('/' + params.path);
          //         }
          //         else if (params.search && params.hash)
          //         {
          //           $location.path('/' + params.path).search(params.search).hash(params.hash);
          //         }
          //       });
          //     };

          //     notification.show();
          //   };
          // };






          /**
           * Detect route change start
           */
          $rootScope.$on('$routeChangeStart', function (event, next, current)
          {
            // function resetLoaders ()
            // {
            //   $rootScope.loaderIcons = {
            //     general:    false,
            //     dashboard:  false,
            //     planboard:  false,
            //     messages:   false,
            //     groups:     false,
            //     profile:    false,
            //     settings:   false
            //   };
            // }

            // resetLoaders();

            // switch ($location.path())
            // {
            //   case '/dashboard':
            //     $rootScope.loaderIcons.dashboard = true;

            //     $rootScope.location = 'dashboard';
            //   break;

            //   case '/planboard':
            //     $rootScope.loaderIcons.planboard = true;

            //     $rootScope.location = 'planboard';
            //   break;

            //   case '/messages':
            //     $rootScope.loaderIcons.messages = true;

            //     $rootScope.location = 'messages';
            //   break;

            //   case '/groups':
            //     $rootScope.loaderIcons.groups = true;

            //     $rootScope.location = 'groups';
            //   break;

            //   case '/settings':
            //     $rootScope.loaderIcons.settings = true;

            //     $rootScope.location = 'settings';
            //   break;

            //   default:
            //     if ($location.path().match(/profile/))
            //     {
            //       $rootScope.loaderIcons.profile = true;

            //       $rootScope.location = 'profile';
            //     }
            //     else
            //     {
            //       $rootScope.loaderIcons.general = true;
            //     }
            // }

            // if (!Session.check()) $location.path("/login");

            // $rootScope.loadingBig = true;

            $rootScope.statusBar.display('Loading..');





            // switch ($location.path())
            // {
            //   case '/dashboard':
            //     $rootScope.location = 'dashboard';
            //   break;

            //   case '/planboard':
            //     $rootScope.location = 'planboard';
            //   break;

            //   case '/messages':
            //     $rootScope.location = 'messages';
            //   break;

            //   case '/groups':
            //     $rootScope.location = 'groups';
            //   break;

            //   case '/settings':
            //     $rootScope.location = 'settings';
            //   break;

            //   default:
            //     if ($location.path().match(/profile/))
            //     {
            //       $rootScope.location = 'profile';
            //     }
            // }


            $rootScope.location = $location.path().substring(1);


            $('div[ng-view]').hide();
          });






          /**
           * Route change successfull
           */
          $rootScope.$on('$routeChangeSuccess', function (event, current, previous)
          {
            $rootScope.newLocation = $location.path();

            $rootScope.loadingBig = false;

            $rootScope.statusBar.off();

            $('div[ng-view]').show();
          });






          /**
           * TODO
           * A better way of dealing with this error!
           *
           * Route change is failed!
           */
          $rootScope.$on('$routeChangeError', function (event, current, previous, rejection)
          {
            $rootScope.notifier.error(rejection);
          });





          /**
           * Fix styles
           */
          $rootScope.fixStyles = function ()
          {
            var tabHeight = $('.tabs-left .nav-tabs').height();

            $.each($('.tab-content').children(), function ()
            {
              var $parent = $(this),
                $this = $(this).attr('id'),
                contentHeight = $('.tabs-left .tab-content #' + $this).height();

              /**
               * TODO
               *
               * Append left border fix
               */
              // $parent.append('<div class="left-border-fix"></div>');
              // console.log('parent ->', $parent);
              // $('#' + $this + ' .left-border-fix').css({
              //   height: contentHeight
              // });
              /**
               * Check if one is bigger than another
               */

              if (tabHeight > contentHeight)
              {
                // console.log('tab is taller than content ->', $this);
                $('.tabs-left .tab-content #' + $this).css({
                  height: $('.tabs-left .nav-tabs').height() + 6
                });
              }
              else if (contentHeight > tabHeight)
              {
                // console.log('content is taller than tabs ->', $this);
                // $('.tabs-left .nav-tabs').css( { height: contentHeight } );
              };
            });

            /**
             * Correct icon-font-library icons for mac and linux
             */
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

          };








          /**
           * Experimental full screen ability
           */
          $rootScope.fullScreen = function () { screenfull.toggle($('html')[0]); };





          /**
           * Detect OS for some specific styling issues
           */

          /*
          if ($.os.windows)
          {
            $('#loading p').css({
              paddingTop: '130px'
            });
          }
          */







          // if (!config.profile.mobileApp.status) $('#copyrights span.muted').css({right: 0});

          // $rootScope.downloadMobileApp = function ()
          // {
          //   $rootScope.statusBar.display('Instructies aan het verzenden...');

          //   Messages.email()
          //   .then(function (result)
          //   {
          //     $rootScope.notifier.success('Controleer uw inbox voor de instructies.');

          //     $rootScope.statusBar.off();
          //   })
          // }

          /*
          $rootScope.$on('$routeChangeStart', function (event, next, current)
          {
            // Remove this lines on production, eye-candy purple background for the home/splash page
            ($location.path() == '/home') ? $('body').addClass('bs-docs-home') : $('body').removeClass('bs-docs-home');
          });

          $rootScope.$on('$routeChangeSuccess', function (event, current, previous)
          {
          });

          $rootScope.$on('$routeChangeError', function (event, current, previous, rejection)
          {
            console.error('Error: changing routes!');
          });
          */



        }
      ]
    );
  }
);