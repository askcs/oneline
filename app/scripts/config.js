define(
  {
    app: {
      version:  '@@version',
      released: '@@released'
    },






    meta: 'oneline',

    title: 'OneLine',

    lang:     'en',

    fullscreen: true,

    host: 'http://askfastmarket1.appspot.com',

    formats: {
      date:         'dd-MM-yyyy',
      time:         'HH:mm',
      datetime:     'dd-MM-yyyy HH:mm',
      datetimefull: 'dd-MM-yyyy HH:mm'
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


    countries: [
      {
        id:     44,
        label: 'United Kingdom (44)'
      },
      {
        id:     32,
        label: 'Belgium (32)'
      },
      {
        id:     33,
        label: 'France (33)'
      },
      {
        id:     49,
        label: 'Germany (49)'
      },
      {
        id:     31,
        label: 'Netherlands (31)'
      },
      {
        id:     90,
        label: 'Turkey (90)'
      }
    ],


    regions: {
      31: [
        {
          id:     297,
          label:  'Aalsmeer (297)'
        },
        {
          id:     72,
          label:  'Alkmaar (72)'
        },
        {
          id:     546,
          label:  'Almelo (546)'
        },
        {
          id:     36,
          label:  'Almere (36)'
        },
        {
          id:     172,
          label:  'Alphen A/D Rijn (172)'
        },
        {
          id:     33,
          label:  'Amersfoort (33)'
        },
        {
          id:     20,
          label:  'Amsterdam (20)'
        },
        {
          id:     55,
          label:  'Apeldoorn (55)'
        },
        {
          id:     26,
          label:  'Arnhem (26)'
        },
        {
          id:     10,
          label:  'Rotterdam (10)'
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

    packages: {
      1: {
        id:    1,
        label: 'Local Numbers',
        prices:{
          monthly: {
            normal:   5,
            premium:  15
          },
          yearly: {
            normal:   50,
            premium:  150
          }
        }
      },
      2: {
        id:    2,
        label: 'Virtual Numbers',
        prices: {
          monthly: {
            normal:   10,
            premium:  30
          },
          yearly: {
            normal:   100,
            premium:  300
          }
        }
      }
    },


    virtuals: [
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
    ],

    ranges: {
      1: [84, 85, 86, 87],
      2: [82],
      3: [85, 86, 87, 88, 89, 90, 91],
      4: [88]
    },

    premiums: [
      {
        package:  1,
        country:  31,
        region:   10,
        number:   2222222
      },
    ]
  }
);