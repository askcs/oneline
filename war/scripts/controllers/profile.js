define(["controllers/controllers"],function(e){e.controller("profile",["$rootScope","$scope","$location","Core","Storage",function(e,t,n,r,i){e.fixStyles(),e.profileEdit=!1,t.profile={data:{},process:function(n){var s={name:{contactInfo:t.profile.data.name,contactInfoTag:"NAME",groupKeys:[e.data.owner.group.id]},email:{contactInfo:t.profile.data.email,contactInfoTag:"EMAIL",groupKeys:[e.data.owner.group.id]},address:{contactInfo:t.profile.data.address,contactInfoTag:"ADDRESS",groupKeys:[e.data.owner.group.id]},phone:{contactInfo:t.profile.data.phone,contactInfoTag:"PHONE",groupKeys:[e.data.owner.group.id]}};angular.forEach(angular.fromJson(i.get("connections")),function(t){if(t.groupKeys[0]===e.data.owner.group.id)switch(t.contactInfoTag.toString().toUpperCase()){case"NAME":s.name.id=t.id;break;case"EMAIL":s.email.id=t.id;break;case"ADDRESS":s.address.id=t.id;break;case"PHONE":s.phone.id=t.id}});var o=[];angular.forEach(s,function(e){o.push(e)}),r.connections.profiler(o).then(function(t){t.error?($("#modal-profile-btn-save").text("Save").removeAttr("disabled"),e.profileEdited={status:!0,result:!1}):(r.factory.process(),n())})},validate:function(){var e;return t.profile.data.name===undefined||t.profile.data.email===undefined||t.profile.data.phone===undefined?($("#modal-profile-btn-save").attr("disabled","disabled"),e=!1):($("#modal-profile-btn-save").removeAttr("disabled"),e=!0),e},edit:function(){this.validate()&&(e.profileEditing=!0,$("#modal-profile-btn-save").text("Saving..").attr("disabled","disabled"),this.process(function(){$("#modal-profile-btn-save").text("Save").removeAttr("disabled"),e.profileEdited={status:!0,result:!0}}))}},n.path()!=="/login"&&(t.profile.data=e.data.account)}])});