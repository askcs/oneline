define(["controllers/controllers"],function(e){e.controller("profile",["$rootScope","$scope","Core","Storage",function(e,t,n,r){e.fixStyles(),t.profile={data:e.data.account,edit:function(){e.statusBar.display("Verifying your number and code..");var i={};t.profile.data.name!==""&&(i.name={contactInfo:t.profile.data.name,contactInfoTag:"NAME",groupKeys:[e.data.contact.group.id]}),t.profile.data.email!==""&&(i.email={contactInfo:t.profile.data.email,contactInfoTag:"EMAIL",groupKeys:[e.data.contact.group.id]}),t.profile.data.address!==""&&(i.address={contactInfo:t.profile.data.address,contactInfoTag:"ADDRESS",groupKeys:[e.data.contact.group.id]}),t.profile.data.phone!==""&&(i.phone={contactInfo:t.profile.data.phone,contactInfoTag:"PHONE",groupKeys:[e.data.contact.group.id]}),angular.forEach(angular.fromJson(r.get("connections")),function(n){if(n.groupKeys[0]===e.data.contact.group.id)switch(n.contactInfoTag.toString().toUpperCase()){case"NAME":n.contactInfo=t.profile.data.name,i.name=n;break;case"EMAIL":n.contactInfo=t.profile.data.email,i.email=n;break;case"ADDRESS":n.contactInfo=t.profile.data.address,i.address=n;break;case"PHONE":n.contactInfo=t.profile.data.phone,i.phone=n}});var s=[];angular.forEach(i,function(e){s.push(e)}),n.connections.profiler(s).then(function(e){console.log("returned result ->",e),n.factory.process()})}}}])});