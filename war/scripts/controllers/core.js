define(["controllers/controllers"],function(e){e.controller("core",["$rootScope","$scope","$location","Core",function(e,t,n,r){function i(e){t.views={purchaser:!1,manager:!1,notifier:!1,reporter:!1,guarder:!1},t.views[e]=!0}r.factory.process(),t.setViewTo=function(e){t.$watch(e,function(){n.hash(e),i(e)})};var s;n.hash()?s=n.hash():(s="manager",n.hash("manager")),i(s),e.$on("setView","args",function(){t.setViewTo(arguments[1])})}])});