define(["filters/filters","config"],function(e,t){e.filter("sortSequence",[function(){return function(e){if(e){var t=0,n;return angular.forEach(e,function(e){console.log("seq ->",e)}),console.log("-----------------"),e}}}]),e.filter("translatePackage",[function(){return function(e){if(e){var n;return angular.forEach(t.packages,function(t){t.id==e&&(n=t)}),n.label}}}]),e.filter("translateCountry",[function(){return function(e){if(e){var n;return angular.forEach(t.countries,function(t){t.id==e&&(n=t)}),n.label}}}]),e.filter("translateRegion",[function(){return function(e,n){if(e&&n){var r;return angular.forEach(t.regions[n],function(t){t.id==e&&(r=t)}),r.label}}}]),e.filter("translateService",[function(){return function(e){if(e){var n;return angular.forEach(t.virtuals,function(t){t.id==e&&(n=t)}),n.label}}}]),e.filter("calculateTime",function(){return function(e){e/=1e3;var t=Math.floor(e/3600),n=e%3600,r=Math.floor(n/60),i=n%60,s=Math.ceil(i),o=function(e){return e>9?""+e:"0"+e};return o(t)+":"+o(r)+":"+o(s)}}),e.filter("nicelyDate",["$rootScope",function(e){return function(t){return typeof t=="string"&&(t=Number(t)),(new Date(t)).toString(e.config.formats.datetime)}}])});