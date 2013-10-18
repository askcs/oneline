/**
 * Installation profile
 */
var profile = {

  meta: 'oneline',

  title: 'OneLine',

  host: function ()
  {
    // return ($.browser.msie) ? '/proxy/' : 'http://askfastmarket.appspot.com';
    return ($.browser.msie) ? '/proxy/' : 'http://askfastmarket1.appspot.com';
  },

  states: [
    'com.ask-cs.State.Available',
    'com.ask-cs.State.KNRM.BeschikbaarNoord',
    'com.ask-cs.State.KNRM.BeschikbaarZuid',
    'com.ask-cs.State.Unavailable',
    'com.ask-cs.State.KNRM.SchipperVanDienst',
    'com.ask-cs.State.Unreached'
  ],

  timeline: {
    config: {
      layouts: {
        groups:   true,
        members:  true
      }
    }
  },

  divisions: [
    {
      id: 'all',
      label: 'All divisions'
    }, 
    {
      id: 'knrm.StateGroup.BeschikbaarNoord',
      label: 'Noord'
    }, 
    {
      id: 'knrm.StateGroup.BeschikbaarZuid',
      label: 'Zuid'
    }
  ],

  roles: [
    {
      id: 1,
      label: 'Planner'
    }, 
    {
      id: 2,
      label: 'Schipper'
    }, 
    {
      id: 3,
      label: 'Opstapper'
    }
  ],

  p2000: {
    status: true,
    url:    'http://knrm.myask.me/rpc/client/p2000.php',
    codes:  '1405545, 1405546, 1735749, 1735748'
  },

  mobileApp: {
    status:   true
  },

  analytics: {
    status: false,
    code:   function ()
    {
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount',     'UA-36532309-1']);
      _gaq.push(['_setDomainName',  'ask-cs.com']);
      _gaq.push(['_setAllowLinker', true]);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    }
  }
};