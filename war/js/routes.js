/*jslint node: true */
/*global angular */
'use strict';


/**
 * Providers & Routes
 */
angular.module('WebPaige')
.config(
[
  '$locationProvider', '$routeProvider', '$httpProvider',
  function ($locationProvider, $routeProvider, $httpProvider)
  {
    /**
     * Login router
     */
    $routeProvider
    .when('/login',
    {
      templateUrl: 'dist/views/login.html',
      controller: 'login'
    })


    /**
     * Forgot password router
     */
    .when('/forgotpass',
    {
      templateUrl: 'dist/views/forgotpass.html',
      controller: 'forgotpass'
    })


    /**
     * Register router
     */
    .when('/register',
    {
      templateUrl: 'dist/views/register.html',
      controller: 'register'
    })


    /**
     * Logout router
     */
    // .when('/logout',
    // {
    //   templateUrl: 'dist/views/logout.html',
    //   controller: 'logout'
    // })


    /**
     * Dashboard router
     */
    // .when('/dashboard',
    // {
    //   templateUrl: 'dist/views/dashboard.html',
    //   controller: 'dashboard'
    // })


    /**
     * Core router
     */
    .when('/core',
    {
      templateUrl:    'dist/views/core.html',
      controller:     'core',
      reloadOnSearch: false
    })


    /**
     * Profile router
     */
    // .when('/profile',
    // {
    //   templateUrl: 'dist/views/profile.html',
    //   controller: 'profile'
    // })


    /**
     * Settings router
     */
    // .when('/settings',
    // {
    //   templateUrl: 'dist/views/settings.html',
    //   controller: 'settings'
    // })


    /**
     * Planboard router
     */
    // .when('/planboard',
    // {
    //   templateUrl: 'dist/views/planboard.html',
    //   controller: 'planboard',
    //   resolve: {
    //     data:
    //     [
    //       '$route', 'Slots', 'Storage', 'Dater',
    //       function ($route, Slots, Storage, Dater)
    //       {
    //         var periods = Storage.local.periods(),
    //             current = Dater.current.week(),
    //             initial = periods.weeks[current],
    //             groups  = Storage.local.groups(),
    //             settings = Storage.local.settings();

    //         return  Slots.all({
    //                   groupId:  settings.app.group,
    //                   division: 'all',
    //                   stamps: {
    //                     start:  initial.first.timeStamp,
    //                     end:    initial.last.timeStamp
    //                   },
    //                   month: Dater.current.month(),
    //                   layouts: {
    //                     user:     true,
    //                     group:    true,
    //                     members:  false
    //                   }
    //                 });
    //       }
    //     ]
    //   },
    //   reloadOnSearch: false
    // })


    /**
     * Messages router
     */
    // .when('/messages',
    // {
    //   templateUrl: 'dist/views/messages.html',
    //   controller: 'messages',
    //   resolve: {
    //     data: [
    //       '$route', 'Messages',
    //       function ($route, Messages)
    //       {
    //         return Messages.query();
    //       }
    //     ]
    //   },
    //   reloadOnSearch: false
    // })


    /**
     * Groups router
     */
    // .when('/groups',
    // {
    //   templateUrl: 'dist/views/groups.html',
    //   controller: 'groups',
    //   resolve: {
    //     data: [
    //       'Groups',
    //       function (Groups)
    //       {
    //         return Groups.query();
    //       }
    //     ]
    //   },
    //   reloadOnSearch: false
    // })


    /**
     * Profile (user specific) router
     */
    // .when('/profile/:userId',
    // {
    //   templateUrl: 'dist/views/profile.html',
    //   controller: 'profile',
    //   resolve: {
    //     data: [
    //       '$rootScope', 'Profile', '$route', '$location', 'Dater',
    //       function ($rootScope, Profile, $route, $location, Dater)
    //       {
    //         if ($route.current.params.userId != $rootScope.app.resources.uuid)
    //         {
    //           var periods = Dater.getPeriods(),
    //               current = Dater.current.week(),
    //               ranges  = {
    //                 start:  periods.weeks[current].first.timeStamp / 1000,
    //                 end:    periods.weeks[current].last.timeStamp / 1000
    //               };

    //           return Profile.getWithSlots($route.current.params.userId, false, ranges);
    //         }
    //         else
    //         {
    //           return Profile.get($route.current.params.userId, false);
    //         }
    //       }
    //     ]
    //   },
    //   reloadOnSearch: false
    // })


    /**
     * Profile (user hiself) router
     */
    // .when('/profile',
    // {
    //   templateUrl: 'dist/views/profile.html',
    //   controller: 'profile',
    //   resolve: {
    //     data: [
    //       '$rootScope', '$route', '$location',
    //       function ($rootScope, $route, $location)
    //       {
    //         if (!$route.current.params.userId || !$location.hash())
    //           $location.path('/profile/' + $rootScope.app.resources.uuid).hash('profile');
    //       }
    //     ]
    //   }
    // })


    /**
     * Settings router
     */
    // .when('/settings',
    // {
    //   templateUrl: 'dist/views/settings.html',
    //   controller: 'settings',
    //   resolve: {
    //     data: [
    //       'Settings',
    //       function (Settings)
    //       {
    //         return angular.fromJson(Settings.get());
    //       }
    //     ]
    //   }
    // })


    /**
     * Help router
     */
    // .when('/help',
    // {
    //   templateUrl: 'dist/views/help.html',
    //   controller: 'help'
    // })


    /**
     * Router fallback
     */
    .otherwise({
      redirectTo: '/login'
    });


    /**
     * Define interceptor
     */
    // $httpProvider.responseInterceptors.push('Interceptor');
  }
]);