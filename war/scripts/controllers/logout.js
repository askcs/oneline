define(["controllers/controllers"],function(e){e.controller("logout",["$rootScope","$scope","$window","Session","User","Storage","$location",function(e,t,n,r,i,s,o){$(".navbar").hide(),$("#footer").hide();var u=angular.fromJson(s.get("logindata"));i.logout().then(function(e){e.error&&console.warn("error ->",e),s.clearAll(),console.log("doc cookie before ->",document.cookie),document.cookie="OneLine.session=''; expires=Thu, 01-Jan-1970 00:00:01 GMT",console.log("doc cookie after ->",document.cookie),s.session.clearAll(),u.remember&&s.add("logindata",angular.toJson(u)),o.path("/login")})}])});