define(["modals/modals","config"],function(e,t){e.factory("Core",["$rootScope","$resource","$q","Storage",function(e,n,r,i){var s=n(),o=n(t.host+"/accounts/contactinfos/:id",{},{list:{method:"GET",params:{},isArray:!0},get:{method:"GET",params:{id:""}},create:{method:"POST",params:{}},update:{method:"PUT",params:{id:""}},remove:{method:"DELETE",params:{id:""}}}),u=n(t.host+"/products/verifyme/:action",{},{initiate:{method:"POST",params:{action:"initiate"}},confirm:{method:"POST",params:{action:"verify"}}}),a=n(t.host+"/settings/notifications/:id",{},{list:{method:"GET",params:{},isArray:!0},get:{method:"GET",params:{id:""}},create:{method:"POST",params:{}},update:{method:"PUT",params:{id:""}},remove:{method:"DELETE",params:{id:""}}}),f=n(t.host+"/accounts/groups/:id",{},{list:{method:"GET",params:{},isArray:!0},get:{method:"GET",params:{id:""}},update:{method:"PUT",params:{id:""}}}),l=n(t.host+"/accounts/log",{},{list:{method:"GET",params:{},isArray:!0}}),c=n(t.host+"/scenario/oneline/generate",{},{build:{method:"POST",params:{"default":!0}}});return s.prototype.logs={local:function(){return angular.fromJson(i.get("settings"))},list:function(){var e=r.defer();return l.query(function(t){e.resolve(t)},function(t){e.resolve({error:t})}),e.promise}},s.prototype.settings={local:function(){return angular.fromJson(i.get("settings"))},list:function(){var e=r.defer();return a.query(function(t){i.add("settings",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},update:function(e){var t=r.defer();return a.update({id:e.id},{targetContactInfos:e.target},function(e){i.add("settings",angular.toJson(e)),t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},save:function(t){var n=r.defer(),i=[],o={sms:[],email:[]};return t.added.sms.status?o.sms=t.added.sms.value:t.removed.sms||(o.sms=t.changed.sms.value),t.added.email.status?o.email=t.added.email.value:t.removed.email||(o.email=t.changed.email.value),o.sms&&i.push(s.prototype.settings.update({id:e.data.settings.sms.id,target:o.sms})),o.email&&i.push(s.prototype.settings.update({id:e.data.settings.email.id,target:o.email})),r.all(i).then(function(e){n.resolve(e)}),n.promise}},s.prototype.connections={local:function(){return angular.fromJson(i.get("connections"))},list:function(){var e=r.defer();return o.list(function(t){i.add("connections",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},get:function(e){var t=r.defer();return o.get({id:e},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},save:function(t){var n=this,s=r.defer(),u={contactInfo:t.contactInfo,contactInfoTag:t.contactInfoTag,label:t.label,groupKeys:[e.data.connected.group.id]};return t.id?(u.id=t.id,o.update({id:t.id},u,function(t){var n=angular.fromJson(i.get("connections"));angular.forEach(n,function(n){n.id===t.id&&(n.contactInfo=t.contactInfo,n.contactInfoTag=t.contactInfoTag,n.label=t.label,n.groupKeys=[e.data.connected.group.id])}),i.add("connections",angular.toJson(n)),s.resolve(t)},function(e){s.resolve({error:e})})):o.create(u,function(t){var r=n.local();r.push(t),i.add("connections",angular.toJson(r));var o=angular.fromJson(i.get("groups"));angular.forEach(o,function(n){n.id===e.data.connected.group.id&&n.contactInfoIds.push(t.id)}),i.add("groups",angular.toJson(o)),s.resolve(t)},function(e){s.resolve({error:e})}),s.promise},remove:function(t){var n=r.defer(),s=this;return o.remove({id:t.id},function(r){var o=s.local(),u=[];angular.forEach(o,function(e){e.id!==t.id&&u.push(e)}),i.add("connections",angular.toJson(u));var a=angular.fromJson(i.get("groups")),f=[],l=[];angular.forEach(e.data.connected.group.contactInfoIds,function(e){e!=t.id&&f.push(e)}),angular.forEach(a,function(t){t.id===e.data.connected.group.id&&(t.contactInfoIds=f),l.push(t)}),i.add("groups",angular.toJson(l)),n.resolve(r)},function(e){n.resolve({error:e})}),n.promise},verify:{initiate:function(e){var t=r.defer();return u.initiate({verificationMedium:"AUTO",verificationInfo:{address:e.contactInfo}},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},confirm:function(e,t){var n=r.defer();return u.confirm({verificationCode:e,id:t},function(e){n.resolve(e)},function(e){n.resolve({error:e})}),n.promise}}},s.prototype.groups={local:function(){return angular.fromJson(i.get("groups"))},list:function(){var e=r.defer();return f.query(function(t){i.add("groups",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},update:function(e){var t=r.defer();return f.update({id:e.id},{contactInfoIds:e.list},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise}},s.prototype.blacklists={save:function(t){var n=r.defer();return o.create({contactInfo:t.contactInfo,contactInfoTag:"Phone",label:t.label,groupKeys:[e.data.blacklist.group.id]},function(e){n.resolve(e)},function(e){n.resolve({error:e})}),n.promise},remove:function(t){var n=r.defer();return o.remove({id:t.id},function(r){var s=angular.fromJson(i.get("connections")),o=[];angular.forEach(s,function(e){e.id!==t.id&&o.push(e)}),i.add("connections",angular.toJson(o));var u=angular.fromJson(i.get("groups")),a=[],f=[];angular.forEach(e.data.blacklist.group.contactInfoIds,function(e){e!==t.id&&a.push(e)}),angular.forEach(u,function(t){t.id===e.data.blacklist.group.id&&(t.contactInfoIds=a),f.push(t)}),i.add("groups",angular.toJson(f)),n.resolve(r)},function(e){n.resolve({error:e})}),n.promise}},s.prototype.scenarios={build:function(){var t=r.defer();if(e.data.connected.list.length>0){var n={};angular.forEach(e.data.connected.list,function(e,t){e.verified&&(n[t]={contactInfoId:e.id,timeout:20})}),c.build({},{info:"Ask-Cs One Line scenario",connected_numbers:n,events:{on_blacklist:"",on_scenario_complete:"",on_scenario_exception:""}},function(e){t.resolve(e)},function(e){t.resolve({error:e})})}else t.resolve();return t.promise}},s.prototype.factory={process:function(){var t={groups:angular.fromJson(i.get("groups")),connections:angular.fromJson(i.get("connections")),settings:angular.fromJson(i.get("settings"))},n={account:{},connected:{},blacklist:{},contact:{},settings:{sms:{status:!1,target:null,targets:[]},email:{status:!1,target:null,targets:[]}}},r=[],o=[],u={};e.data={},angular.forEach(t.connections,function(e){u[e.id]=e}),angular.forEach(t.groups,function(e){switch(e.name){case"ConnectedNumbers":n.connected={group:e};break;case"BlackList":n.blacklist={group:e};break;case"Contact":n.contact={group:e}}}),angular.forEach(t.connections,function(e){if(e.groupKeys[0]===n.contact.group.id)switch(e.contactInfoTag.toString().toUpperCase()){case"NAME":n.account.name=e.contactInfo;break;case"EMAIL":n.account.email=e.contactInfo,u[e.id]=e;break;case"ADDRESS":n.account.address=e.contactInfo;break;case"PURCHASED_NUMBER":n.account.purchasedNumber=e.contactInfo;break;case"PHONE":n.account.phone=e.contactInfo,u[e.id]=e}}),e.app.resources=n.account,n.connected.list=[],angular.forEach(n.connected.group.contactInfoIds,function(e){n.connected.list.push(u[e])}),n.blacklist.list=[],angular.forEach(n.blacklist.group.contactInfoIds,function(e){n.blacklist.list.push(u[e])}),angular.forEach(u,function(e){switch(e.contactInfoTag.toString().toUpperCase()){case"EMAIL":o.push(e)}});var a=u;return angular.forEach(a,function(e,t){e.contactInfoTag.toString().toUpperCase()!="PHONE"&&delete a[t]}),n.blacklist.group.contactInfoIds.length>0&&angular.forEach(n.blacklist.group.contactInfoIds,function(e){delete a[e]}),angular.forEach(a,function(e){r.push(e)}),angular.forEach(o,function(e){n.settings.email.targets.push({id:e.id,value:e.contactInfo})}),angular.forEach(r,function(e){n.settings.sms.targets.push({id:e.id,value:e.contactInfo})}),angular.forEach(t.settings,function(e){switch(e.medium.toString().toUpperCase()){case"EMAIL":n.settings.email.id=e.id,n.settings.email.status=e.targetContactInfos.length>0;var t=u[e.targetContactInfos[0]]?u[e.targetContactInfos[0]].id:n.settings.email.targets[0].id;n.settings.email.original=n.settings.email.target=e.targetContactInfos.length>0?t:n.settings.email.targets[0].id;break;case"SMS":n.settings.sms.id=e.id,n.settings.sms.status=e.targetContactInfos.length>0;var r=u[e.targetContactInfos[0]]?u[e.targetContactInfos[0]].id:n.settings.sms.targets[0].id;n.settings.sms.original=n.settings.sms.target=e.targetContactInfos.length>0?r:n.settings.sms.targets[0].id}}),n.nodes=u,e.data=n,s.prototype.scenarios.build(),!0}},new s}])});