define(["controllers/controllers"],function(e){e.controller("logout",["$rootScope","$scope","$window","Session","User","Storage","$location",function(e,t,n,r,i,s,o){$(".navbar").hide(),$("#footer").hide();var u=angular.fromJson(s.get("logindata"));i.logout().then(function(t){t.error&&console.warn("error ->",t),s.clearAll(),document.cookie="OneLine.session=''; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/",s.session.clearAll(),u.remember&&s.add("logindata",angular.toJson(u)),e.data={},e.session={},o.path("/login")})}])});