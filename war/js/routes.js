/*jslint node: true */
/*global angular */
'use strict';


/**
 * Providers & Routes
 */
angular.module('WebPaige')
.config(
[
  '$locationProvider', '$routeProvider',
  function ($locationProvider, $routeProvider)
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
    .when('/logout',
    {
      templateUrl: 'dist/views/logout.html',
      controller: 'logout'
    })


    /**
     * Core router
     */
    .when('/core',
    {
      templateUrl:    'dist/views/core.html',
      controller:     'coreCtrl',
      reloadOnSearch: false
    })


    /**
     * Router fallback
     */
    .otherwise({
      redirectTo: '/login'
    });
  }
]);