define(["controllers/controllers"],function(e){e.controller("core",["$rootScope","$scope","$location",function(e,t,n){function r(e){t.views={purchaser:!1,manager:!1,notifier:!1,reporter:!1,guarder:!1,profile:!1,overview:!1},t.views[e]=!0}e.profile.data=e.data.account,t.setViewTo=function(e){t.$watch(e,function(){n.hash(e),r(e)})};var i;n.hash()?i=n.hash():(i="purchaser",n.hash("purchaser")),r(i),e.$on("setView",function(){t.setViewTo(arguments[1])})}])});