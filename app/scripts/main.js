if (window.location.port === '8080')
{
  document.getElementsByTagName('html')[0].setAttribute('ng-app');
}

require.config(
  {
    paths:
    {
      angular:            '../vendors/angular/angular.min',
      jquery:             '../vendors/jquery/jquery.min',
      domReady:           '../vendors/requirejs-domready/domReady',
      bootstrap:          '../vendors/bootstrap-sass/dist/js/bootstrap.min',
      'angular-resource': '../vendors/angular-resource/angular-resource.min',
      'angular-route':    '../vendors/angular-route/angular-route.min',
      d3:                 '../vendors/d3/d3.min',
      libPhoneNumber:     '../vendors/webpaige-lib-phonenumber/libphonenumber',
      'jquery-ui':        '../vendors/jquery-ui/ui/minified/jquery-ui.min'
    },
    shim:
    {
      angular:            { deps: ['jquery'], exports:  'angular' },
      'angular-resource': { deps: ['angular'] },
      'angular-route':    { deps: ['angular'] },
      bootstrap:          { deps: ['jquery'], exports:  'bootstrap' },
      d3:                 { exports:'d3' },
      libPhoneNumber:     { exports:'libPhoneNumber' },
      'jquery-ui':        { deps: ['jquery'] }
    }
  }
);

require(
  [
    'angular',
    'domReady',

    'angular-resource',
    'angular-route',

    'config',
    'app',
    'routes',
    'run',

    'modals/user',
    'modals/core',

    'controllers/login',
    'controllers/forgotPass',
    'controllers/register',
    'controllers/logout',
    'controllers/core',
    'controllers/purchaser',
    'controllers/manager',
    'controllers/notifier',
    'controllers/reporter',
    'controllers/guarder',
    'controllers/profile',

    'controllers/overview',

    'directives/appVersion',

    'filters/interpolate',
    'filters/parsePhoneNumber',
    'filters/all',

    'services/version',
    'services/user',

    'services/session',
    'services/md5',
    'services/storage',
    'services/strings',
    'services/generators',

    'services/phone',

    'bootstrap',
    'd3',
    'libPhoneNumber'
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