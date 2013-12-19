define(["app","config"],function(e,t){e.run(["$rootScope","$location","$timeout","Storage","$window","User","Session","Core","$http","Phone",function(e,n,r,i,s,o,u,a,f,l){e.config=t,e.redirectToProfile=function(){e.$emit("setView","profile")},e.changeLanguage=function(n){e.ui=t.ui[n]},e.ui=t.ui[e.config.lang],e.app=e.app||{},angular.fromJson(i.cookie.get("session"))&&(f.defaults.headers.common["X-SESSION_ID"]=angular.fromJson(i.cookie.get("session")).id),e.app.resources||(e.app.resources=angular.fromJson(i.get("resources")),u.check()),n.path()!=="/login"&&a.factory.process(),e.profileEdited={status:!1,result:!1},e.forceProfileEdit=function(){e.profileEdit=!0,e.profileEdited.status=!1},e.forceProfileView=function(){e.profileEdit=!1},e.phoneNumberParsed={},e.phoneNumberParsed.result=!1,e.checkNumber=function(t){if(t&&t.length>0){var n,r;n=r=l.parse(t,"NL"),e.phoneNumberParsed.result=!0;if(n){var i="It seems not to be a phone number!",s="Invalid country code. Please enter a number from Netherlands.",o;if(n.error)e.phoneNumberParsed={result:!1,message:i};else if(!n.validation.isPossibleNumber){switch(n.validation.isPossibleNumberWithReason){case"INVALID_COUNTRY_CODE":o=s;break;case"TOO_SHORT":o=i+" (Number is too short.)";break;case"TOO_LONG":o=i+" (Number is too long)"}e.phoneNumberParsed={result:!1,message:o}}else n.validation.isValidNumber?n.validation.isValidNumberForRegion?(e.phoneNumberParsed={result:!0,message:"You have entered a correct number. Number is registered for "+n.validation.phoneNumberRegion+" and number type is "+n.validation.getNumberType},$(".inputPhoneNumber").removeClass("error")):e.phoneNumberParsed={result:!1,message:s}:e.phoneNumberParsed={result:!1,message:i}}e.phoneNumberParsed.all=r}else e.resetPhoneParser()},e.resetPhoneParser=function(){e.phoneNumberParsed.result=!0,delete e.phoneNumberParsed.message,$(".inputPhoneNumber").removeClass("error")},e.statusBar={init:function(){e.loading={status:!1,message:"Loading.."}},display:function(t){e.loading={status:!0,message:t}},off:function(){e.loading.status=!1}},e.statusBar.init(),e.$on("$routeChangeStart",function(){e.statusBar.display("Loading.."),e.location=n.path().substring(1),$("div[ng-view]").hide()}),e.$on("$routeChangeSuccess",function(){e.newLocation=n.path(),e.loadingBig=!1,e.statusBar.off(),$("div[ng-view]").show()}),e.$on("$routeChangeError",function(t,n,r,i){e.notifier.error(i)}),e.fixStyles=function(){var e=$(".tabs-left .nav-tabs").height();$.each($(".tab-content").children(),function(){var t=$(this).attr("id"),n=$(".tabs-left .tab-content #"+t).height();e>n&&$(".tabs-left .tab-content #"+t).css({height:$(".tabs-left .nav-tabs").height()+6})})}}])});