if (window.location.port == '8080')
{
  document.getElementsByTagName('html')[0].setAttribute('ng-app');
}

require.config (
  {
    paths: {
      angular:  '../vendors/angular/angular',
      jquery:   '../vendors/jquery/jquery.min',
      domReady: '../vendors/requirejs-domready/domReady',
      bootstrap:'../vendors/bootstrap-sass/dist/js/bootstrap.min'
    },
    shim: {
      angular: {
        deps:     ['jquery'],
        exports:  'angular'
      },
      bootstrap: {
        deps:   ['jquery'],
        exports:'bootstrap'
      }
    }
  }
);

require (
  [
    'angular',
    'domReady',
    'config',
    'app',
    'routes',
    'run',

    'controllers/home',
    'controllers/partial1',
    'controllers/partial2',

    'directives/appVersion',

    'filters/interpolate',

    'services/version',
    'services/user',

    'bootstrap'
//    'pouch'
  ],
  function (angular, domReady)
  {
    'use strict';

    domReady(function ()
      {
        angular.bootstrap(document, ['Oneline']);
      }
    );

  }
);