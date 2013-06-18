/*jslint node: true */
/*global angular */
/*global profile */
'use strict';


/**
 * App configuration
 */
angular.module('WebPaige')
.value(
  '$config',
  {
    title:    'OneLine',
    version:  '0.1.0',
    lang:     'nl',

    fullscreen: true,

    // REMOVE
    demo_users: false,

    profile: {
      meta:   profile.meta,
      title:  profile.title,
      logos: {
        login:  'profiles/' + profile.meta + '/img/login_logo.png',
        app:    ''
      },
      background: 'profiles/' + profile.meta + '/img/login_bg.jpg', // jpg for smaller size,
      p2000:      profile.p2000,
      mobileApp:  profile.mobileApp
    },

    statesall: {
      'com.ask-cs.State.Available':
      {
        className:'state-available',
        label:    'Beschikbaar',
        color:    '#4f824f',
        type:     'Beschikbaar'
      },
      'com.ask-cs.State.KNRM.BeschikbaarNoord':
      {
        className:'state-available-north',
        label:    'Beschikbaar voor Noord',
        color:    '#000',
        type:     'Beschikbaar'
      },
      'com.ask-cs.State.KNRM.BeschikbaarZuid':
      {
        className:'state-available-south',
        label:    'Beschikbaar voor Zuid',
        color:    '#e08a0c',
        type:     'Beschikbaar'
      },
      'com.ask-cs.State.Unavailable':
      {
        className:'state-unavailable',
        label:    'Niet Beschikbaar',
        color:    '#a93232',
        type:     'Niet Beschikbaar'
      },
      'com.ask-cs.State.KNRM.SchipperVanDienst':
      {
        className:'state-schipper-service',
        label:    'Schipper van Dienst',
        color:    '#e0c100',
        type:     'Beschikbaar'
      },
      'com.ask-cs.State.Unreached':
      {
        className:'state-unreached',
        label:    'Niet Bereikt',
        color:    '#65619b',
        type:     'Niet Beschikbaar'
      }
    },

    host: profile.host(),

    formats: {
      date:         'dd-MM-yyyy',
      time:         'HH:mm',
      datetime:     'dd-MM-yyyy HH:mm',
      datetimefull: 'dd-MM-yyyy HH:mm'
    },

    roles: profile.roles,

    timeline: {
      options: {
        axisOnTop:        true,
        width:            '100%',
        height:           'auto',
        selectable:       true,
        editable:         true,
        style:            'box',
        groupsWidth:      '150px',
        eventMarginAxis:  0,
        showCustomTime:   true,
        groupsChangeable: false,
        showNavigation:   false,
        intervalMin:      1000 * 60 * 60 * 1
      },
      config: {
        zoom:       '0.4',
        bar:        false,
        layouts:    profile.timeline.config.layouts,
        wishes:     false,
        legenda:    {},
        legendarer: false,
        states:     {},
        divisions:  profile.divisions,
        densities: {
          less:   '#a0a0a0',
          even:   '#ba6a24',
          one:    '#415e6b',
          two:    '#3d5865',
          three:  '#344c58',
          four:   '#2f4550',
          five:   '#2c424c',
          six:    '#253943',
          more:   '#486877'
        }
      }
    },

    pie: {
      colors: ['#415e6b', '#ba6a24', '#a0a0a0']
    },

    defaults: {
      settingsWebPaige: {
        user: {
          language: 'nl'
        },
        app: {
          widgets: {
            groups: {}
          }
        }
      }
    },

    cookie: {
      expiry: 30,
      path:   '/'
    },

    // notifications: {
    //   webkit: {
    //     user: true,
    //     app: window.webkitNotifications && (window.webkitNotifications.checkPermission() == 0) ? true : false
    //   }
    // },

    init: function ()
    {
      var _this = this;

      angular.forEach(profile.states, function (state, index)
      {
        _this.timeline.config.states[state] = _this.statesall[state];
      });
    },




    countries: [
      {
        id:     44,
        label: 'United Kingdom'
      },
      {
        id:     32,
        label: 'Belgium'
      }, 
      {
        id:     33,
        label: 'France'
      }, 
      {
        id:     49,
        label: 'Germany'
      },
      {
        id:     31,
        label: 'Netherlands'
      },
      {
        id:     90,
        label: 'Turkey'
      }
    ],


    regions: {
      31: [
        {
          id:     297,
          label:  'Aalsmeer'
        },
        {
          id:     72,
          label:  'Alkmaar'
        },
        {
          id:     546,
          label:  'Almelo'
        },
        {
          id:     36,
          label:  'Almere'
        },
        {
          id:     172,
          label:  'Alphen A/D Rijn'
        },
        {
          id:     33,
          label:  'Amersfoort'
        },
        {
          id:     20,
          label:  'Amsterdam'
        },
        {
          id:     55,
          label:  'Apeldoorn'
        },
        {
          id:     26,
          label:  'Arnhem'
        },
        {
          id:     10,
          label:  'Rotterdam'
        }
      ],
      90: [
        {
          id:     1,
          label:  'Turkey 1'
        },
        {
          id:     2,
          label:  'Turkey 2'
        }
      ],
      44: [
        {
          id:     1,
          label:  'United Kingdom 1'
        },
        {
          id:     2,
          label:  'United Kingdom 2'
        }
      ],
      49: [
        {
          id:     1,
          label:  'Germany 1'
        },
        {
          id:     2,
          label:  'Germany 2'
        }
      ],
      33: [
        {
          id:     1,
          label:  'France 1'
        },
        {
          id:     2,
          label:  'France 2'
        }
      ],
      32: [
        {
          id:     1,
          label:  'Belgium 1'
        },
        {
          id:     2,
          label:  'Belgium 2'
        }
      ]
    },

    types: {
      number: [
        {
          id:    1,
          label: 'Local Numbers'
        },
        {
          id:    2,
          label: 'Virtual Numbers'
        },
        {
          id:    3,
          label: 'Premium'
        }
      ],

      virtual: [
        {
          id:     1,
          label:  'Personal assistant services (84-87)'
        },
        {
          id:     2,
          label:  'VPN (82)'
        },
        {
          id:     3,
          label:  'Elektronisch communicatie (85 - 91)'
        },
        {
          id:     4,
          label:  'Company numbers (88)'
        }
      ]
    }

  }
);