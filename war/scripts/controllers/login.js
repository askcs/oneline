define(["controllers/controllers","modals/user"],function(e,t){e.controller("login",["$rootScope","$location","$q","$scope","Session","Storage","$routeParams","MD5","Core","User",function(e,t,n,r,i,s,o,u,a,f){var l=this;r.alert={login:{display:!1,type:"",message:""},forgot:{display:!1,type:"",message:""}},s.session.get("app")||s.session.add("app","{}"),$(".navbar").hide(),$("#preloader").hide();var c=angular.fromJson(s.get("logindata"));c&&c.remember&&(r.logindata=c);var h=$("#login button[type=submit]");r.login=function(){$("#alertDiv").hide();if(!r.logindata||!r.logindata.username||!r.logindata.password)return r.alert={login:{display:!0,type:"alert-error",message:"Please fill all fields!"}},h.text("Login").removeAttr("disabled"),!1;h.text("Login..").attr("disabled","disabled"),s.add("logindata",angular.toJson({username:r.logindata.username,password:r.logindata.password,remember:r.logindata.remember})),l.auth(r.logindata.username,u(r.logindata.password))},l.auth=function(e,t){f.login(e.toLowerCase(),t).then(function(e){switch(e.status){case 403:return r.alert={login:{display:!0,type:"alert-error",message:"Wrong username or password!"}},h.text("Login").removeAttr("disabled"),!1;case 404:return r.alert={login:{display:!0,type:"alert-error",message:"Something went terribly wrong with login!"}},h.text("Login").removeAttr("disabled"),!1;case 500:return r.alert={login:{display:!0,type:"alert-error",message:"Something went terribly wrong with login!"}},h.text("Login").removeAttr("disabled"),!1}i.set(e["X-SESSION_ID"]),l.preloader()})},r.preloader={count:0,total:2,current:0,fraction:function(){return Math.abs(100/(this.total*2))}},l.loginAgain_=function(){$("#login").show(),$("#preloader").hide(),r.alert={login:{display:!0,type:"alert-error",message:"Something went terribly wrong with login! Please try again."}},h.text("Login").removeAttr("disabled")},l.loginAgain=function(){f.logout().then(function(){f.login("leon",u("askask")).then(function(){f.logout().then(function(){l.auth(r.logindata.username,u(r.logindata.password))})})})},l.preloader=function(){$("#login").hide(),$("#preloader").show(),l.progress("Loading app related information.."),a.connections.list().then(function(e){e.error?l.loginAgain():(l.progress("Connected numbers are loaded"),a.settings.list().then(function(e){e.error?l.loginAgain():(l.progress("Notification settings loaded"),a.groups.list().then(function(e){e.error?l.loginAgain():(l.progress("Groups loaded"),a.factory.run().then(function(){t.path("/core"),setTimeout(function(){$(".navbar").show()},100)}),t.path("/core"),setTimeout(function(){$(".navbar").show()},100))}))}))})},l.progress=function(e){r.preloader.current=r.preloader.current+r.preloader.fraction(),$("#preloader .progress .bar").css({width:r.preloader.current+"%"}),$("#preloader span").text(e)},r.demoUsers=["apptestoneline","ahmet","cengiz","duco","erik","leon","leonie","sam","shravan","sven","tymon","xiaoyu","yuankun","joose","jordi"],r.demoLogin=function(e){l.auth(e,u("askask"))},jQuery(document).bind("keydown","ctrl+u",function(e){return e.ctrlKey&&e.keyCode==85&&(r.config.demoUsers=!r.config.demoUsers,r.$apply()),!1})}])});