define(["controllers/controllers"],function(e){e.controller("profile",["$rootScope","$scope","$location","Core","Storage",function(e,t,n,r,i){e.fixStyles(),e.profile={data:{},process:function(t){var n={name:{contactInfo:e.profile.data.name,contactInfoTag:"NAME",groupKeys:[e.data.owner.group.id]},email:{contactInfo:e.profile.data.email,contactInfoTag:"EMAIL",groupKeys:[e.data.owner.group.id]},address:{contactInfo:e.profile.data.address,contactInfoTag:"ADDRESS",groupKeys:[e.data.owner.group.id]},phone:{contactInfo:e.profile.data.phone,contactInfoTag:"PHONE",groupKeys:[e.data.owner.group.id]}};angular.forEach(angular.fromJson(i.get("connections")),function(t){if(t.groupKeys[0]===e.data.owner.group.id)switch(t.contactInfoTag.toString().toUpperCase()){case"NAME":n.name.id=t.id;break;case"EMAIL":n.email.id=t.id;break;case"ADDRESS":n.address.id=t.id;break;case"PHONE":n.phone.id=t.id}});var s=[];angular.forEach(n,function(e){s.push(e)}),r.connections.profiler(s).then(function(n){n.error?($("#modal-profile-btn-save").text("Save").removeAttr("disabled"),e.profileEdited={status:!0,result:!1}):(r.factory.process(),e.$watch(function(){e.profileEditing=!1}),t())})},validate:function(){var t;return e.profile.data.name===undefined||e.profile.data.email===undefined||e.profile.data.phone===undefined?($("#modal-profile-btn-save").attr("disabled","disabled"),t=!1):($("#modal-profile-btn-save").removeAttr("disabled"),t=!0),t},edit:function(){this.validate()&&(e.profileEditing=!0,$("#modal-profile-btn-save").text("Saving..").attr("disabled","disabled"),this.process(function(){$("#modal-profile-btn-save").text("Save").removeAttr("disabled"),e.profileEdited={status:!0,result:!0},e.profileEdit=!1}))}},n.path()!=="/login"&&(e.profile.data={},e.profile.data=e.data.account)}])});