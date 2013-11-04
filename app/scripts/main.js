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
      d3:                 '../vendors/d3/d3.min',
      libPhoneNumber:     '../vendors/webpaige-lib-phonenumber/libphonenumber'
    },
    shim:
    {
      angular:
      {
        deps:     ['jquery'],
        exports:  'angular'
      },
      'angular-resource':
      {
        deps:     ['angular']
      },
      bootstrap:
      {
        deps:     ['jquery'],
        exports:  'bootstrap'
      },
      d3:
      {
        exports:  'd3'
      },
      libPhoneNumber:
      {
        exports:  'libPhoneNumber'
      }
    }
  }
);

require(
  [
    'angular',
    'domReady',

    'angular-resource',

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