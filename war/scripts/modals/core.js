define(["modals/modals","config"],function(e,t){e.factory("Core",["$rootScope","$resource","$q","Storage",function(e,n,r,i){var s=n(),o=n(t.host+"/accounts/contactinfos/:id",{},{list:{method:"GET",params:{},isArray:!0},get:{method:"GET",params:{id:""}},create:{method:"POST",params:{}},update:{method:"PUT",params:{id:""}},remove:{method:"DELETE",params:{id:""}}}),u=n(t.host+"/products/verifyme/:action",{},{initiate:{method:"POST",params:{action:"initiate"}},confirm:{method:"POST",params:{action:"verify"}}}),a=n(t.host+"/settings/notifications/:id",{},{list:{method:"GET",params:{},isArray:!0},get:{method:"GET",params:{id:""}},create:{method:"POST",params:{}},update:{method:"PUT",params:{id:""}},remove:{method:"DELETE",params:{id:""}}}),f=n(t.host+"/accounts/groups/:id",{},{list:{method:"GET",params:{},isArray:!0},get:{method:"GET",params:{id:""}},update:{method:"PUT",params:{id:""}}}),l=n(t.host+"/log",{},{list:{method:"GET",params:{},isArray:!0}});return s.prototype.logs={local:function(){return angular.fromJson(i.get("settings"))},list:function(){var e=r.defer();return e.resolve([{id:52001,scenarioId:1,startTime:1,endTime:1,address:"0643002549",type:"phone",callState:"answered"},{id:52002,scenarioId:1,startTime:1,endTime:324,address:"0629143143",type:"phone",callState:"answered"}]),e.promise}},s.prototype.settings={local:function(){return angular.fromJson(i.get("settings"))},list:function(){var e=r.defer();return a.query(function(t){i.add("settings",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},update:function(e){var t=r.defer();return a.update({id:e.id},{targetContactInfos:e.target},function(e){i.add("settings",angular.toJson(e)),t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},save:function(t){var n=r.defer(),i=[],o={sms:[],email:[]};return t.added.sms.status?o.sms=t.added.sms.value:t.removed.sms||(o.sms=t.changed.sms.value),t.added.email.status?o.email=t.added.email.value:t.removed.email||(o.email=t.changed.email.value),o.sms&&i.push(s.prototype.settings.update({id:e.data.settings.sms.id,target:o.sms})),o.email&&i.push(s.prototype.settings.update({id:e.data.settings.email.id,target:o.email})),r.all(i).then(function(e){n.resolve(e)}),n.promise}},s.prototype.connections={local:function(){return angular.fromJson(i.get("connections"))},list:function(){var e=r.defer();return o.list(function(t){i.add("connections",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},get:function(e){var t=r.defer();return o.get({id:e},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},save:function(e){var t=r.defer(),n={contactInfo:e.contactInfo,contactInfoTag:e.contactInfoTag,label:e.label};return e.id?(n.id=e.id,o.update({id:e.id},n,function(e){t.resolve(e)},function(e){t.resolve({error:e})})):o.create(n,function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},remove:function(e){var t=r.defer();return o.remove({id:e.id},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},verify:{initiate:function(e){var t=r.defer();return u.initiate({verificationMedium:e.contactInfoTag==="Email"?"Email":"SMS",verificationInfo:{address:e.contactInfo}},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},confirm:function(e,t){var n=r.defer();return u.confirm({verificationCode:e,id:t},function(e){n.resolve(e)},function(e){n.resolve({error:e})}),n.promise}}},s.prototype.groups={local:function(){return angular.fromJson(i.get("groups"))},list:function(){var e=r.defer();return f.query(function(t){i.add("groups",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},update:function(e){var t=r.defer();return f.update({id:e.id},{contactInfoIds:e.list},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise}},s.prototype.blacklists={list:function(){},save:function(e){var t=r.defer();return o.create({contactInfo:e.contactInfo,contactInfoTag:"Phone",label:e.label},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},remove:function(e){var t=r.defer();return o.remove({id:e.id},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise}},s.prototype.factory={process:function(){var t={resources:angular.fromJson(i.get("resources")),groups:angular.fromJson(i.get("groups")),connections:angular.fromJson(i.get("connections")),settings:angular.fromJson(i.get("settings"))},n={},r={},s={},o={},u={},a={},f=[],l=[];e.data={},angular.forEach(t.connections,function(e){n[e.id]=e}),angular.forEach(t.resources,function(e){switch(e.contactInfoTag){case"Name":u.name=e.contactInfo;break;case"Phone":u.phone=e.contactInfo,n[e.id]=e;break;case"Email":u.email=e.contactInfo,n[e.id]=e;break;case"Address":u.address=e.contactInfo;break;case"PURCHASED_NUMBER":u.purchasedNumber=e.contactInfo}}),e.app.resources=u;var c=t.groups[0].contactInfoIds;a.blacklist=t.groups[0],r=n,angular.forEach(c,function(e){s[e]=n[e],delete r[e]});var h=[];angular.forEach(r,function(e){h.push(e)}),r=h;var p=[];return angular.forEach(s,function(e){p.push(e)}),s=p,angular.forEach(n,function(e){e.contactInfoTag==="Phone"&&f.push(e),e.contactInfoTag==="Email"&&l.push(e)}),o={sms:{status:!1,target:null,targets:[]},email:{status:!1,target:null,targets:[]}},angular.forEach(l,function(e){o.email.targets.push({id:e.id,value:e.contactInfo})}),angular.forEach(f,function(e){o.sms.targets.push({id:e.id,value:e.contactInfo})}),angular.forEach(t.settings,function(e){if(e.medium==="Email"){o.email.id=e.id,o.email.status=e.targetContactInfos.length>0;var t=n[e.targetContactInfos[0]]?n[e.targetContactInfos[0]].id:o.email.targets[0].id;o.email.original=o.email.target=e.targetContactInfos.length>0?t:o.email.targets[0].id}if(e.medium==="SMS"){o.sms.id=e.id,o.sms.status=e.targetContactInfos.length>0;var r=n[e.targetContactInfos[0]]?n[e.targetContactInfos[0]].id:o.sms.targets[0].id;o.sms.original=o.sms.target=e.targetContactInfos.length>0?r:o.sms.targets[0].id}}),e.data={account:u,connections:r,blacklist:s,settings:o,groups:a},console.warn("data ->",e.data),!0}},new s}])});