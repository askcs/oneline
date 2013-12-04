define(["modals/modals","config"],function(e,t){e.factory("Core",["$rootScope","$resource","$q","Storage",function(e,n,r,i){var s=n(),o=n(t.host+"/accounts/contactinfos/:id",{},{list:{method:"GET",params:{},isArray:!0},get:{method:"GET",params:{id:""}},create:{method:"POST",params:{}},update:{method:"PUT",params:{id:""}},remove:{method:"DELETE",params:{id:""}}}),u=n(t.host+"/accounts/contactinfos/owner",{},{save:{method:"POST",params:{},isArray:!0}}),a=n(t.host+"/products/verifyme/:action",{},{initiate:{method:"POST",params:{action:"initiate"}},confirm:{method:"POST",params:{action:"verify"}}}),f=n(t.host+"/settings/notifications/:id",{},{list:{method:"GET",params:{},isArray:!0},get:{method:"GET",params:{id:""}},create:{method:"POST",params:{}},update:{method:"PUT",params:{id:""}},remove:{method:"DELETE",params:{id:""}}}),l=n(t.host+"/scenario/oneline/groups/",{},{list:{method:"POST",params:{},isArray:!0}}),c=n(t.host+"/accounts/log",{},{list:{method:"GET",params:{},isArray:!0}}),h=n(t.host+"/scenario/oneline/generate",{},{build:{method:"POST",params:{"default":!0}}});return s.prototype.logs={local:function(){return angular.fromJson(i.get("settings"))},list:function(){var e=r.defer();return c.query(function(t){e.resolve(t)},function(t){e.resolve({error:t})}),e.promise}},s.prototype.settings={local:function(){return angular.fromJson(i.get("settings"))},list:function(){var e=r.defer();return f.query(function(t){i.add("settings",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},update:function(e){var t=r.defer();return f.update({id:e.id},{targetContactInfos:e.target},function(e){i.add("settings",angular.toJson(e)),t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},save:function(t){var n=r.defer(),i=[],o={sms:[],email:[]};return t.added.sms.status?o.sms=t.added.sms.value:t.removed.sms||(o.sms=t.changed.sms.value),t.added.email.status?o.email=t.added.email.value:t.removed.email||(o.email=t.changed.email.value),o.sms&&i.push(s.prototype.settings.update({id:e.data.settings.sms.id,target:o.sms})),o.email&&i.push(s.prototype.settings.update({id:e.data.settings.email.id,target:o.email})),r.all(i).then(function(e){n.resolve(e)}),n.promise}},s.prototype.connections={local:function(){return angular.fromJson(i.get("connections"))},list:function(){var e=r.defer();return o.list(function(t){i.add("connections",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},get:function(e){var t=r.defer();return o.get({id:e},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},save:function(t){var n=this,s=r.defer(),u={contactInfo:t.contactInfo,contactInfoTag:t.contactInfoTag,label:t.label,groupKeys:[e.data.connected.group.id]};return t.id?(u.id=t.id,o.update({id:t.id},u,function(t){var n=angular.fromJson(i.get("connections"));angular.forEach(n,function(n){n.id===t.id&&(n.contactInfo=t.contactInfo,n.contactInfoTag=t.contactInfoTag,n.label=t.label,n.groupKeys=[e.data.connected.group.id])}),i.add("connections",angular.toJson(n)),s.resolve(t)},function(e){s.resolve({error:e})})):o.create(u,function(t){var r=n.local();r.push(t),i.add("connections",angular.toJson(r));var o=angular.fromJson(i.get("groups"));angular.forEach(o,function(n){n.id===e.data.connected.group.id&&n.contactInfoIds.push(t.id)}),i.add("groups",angular.toJson(o)),s.resolve(t)},function(e){s.resolve({error:e})}),s.promise},profiler:function(t){var n=r.defer();return u.save({},t,function(t){var r=angular.fromJson(i.get("connections")),s={};angular.forEach(t,function(e){var t={id:e.id,contactInfo:e.contactInfo};switch(e.contactInfoTag.toString().toUpperCase()){case"NAME":s.name=t;break;case"EMAIL":s.email=t;break;case"ADDRESS":s.address=t;break;case"PHONE":s.phone=t}}),angular.forEach(r,function(t){if(t.groupKeys[0]===e.data.owner.group.id)switch(t.contactInfoTag.toString().toUpperCase()){case"NAME":t.contactInfo=s.name.contactInfo;break;case"EMAIL":t.contactInfo=s.email.contactInfo;break;case"ADDRESS":t.contactInfo=s.address.contactInfo;break;case"PHONE":t.contactInfo=s.phone.contactInfo}}),r.length===0&&(r=t),i.add("connections",angular.toJson(r)),n.resolve(t)},function(e){n.resolve({error:e})}),n.promise},remove:function(t,n){var s=r.defer(),u=this;return o.remove({id:t.id},function(r){var o=e.data.connected.group.contactInfoIds,u=angular.fromJson(i.get("connections")),a=[],f=[];o.indexOf(t.id)!=-1&&angular.forEach(u,function(e){e.id!=t.id&&o.indexOf(e.id)!=-1&&(f.push(e),a.push(e.id))}),i.add("connections",angular.toJson(f));var l=angular.fromJson(i.get("groups"));angular.forEach(l,function(e){e.name.toString().toUpperCase()=="CONNECTEDNUMBERS"&&(e.contactInfoIds=a)}),i.add("groups",angular.toJson(l));if(n=="verified"){console.log("it is a verified number and deleting it -----------------------------");var c={};console.log("old sequence ->",e.data.sequence);var h;angular.forEach(e.data.sequence,function(n,r){n==t.id&&(h=r,delete e.data.sequence[h])}),console.log("deleting -->",e.data.sequence[h]),angular.forEach(e.data.sequence,function(e,t){t<h?c[t]=e:c[t-1]=e}),e.data.sequence=c,angular.forEach(l,function(e){e.name.toString().toUpperCase()=="CONNECTEDNUMBERSEQUENCE"&&(e.contactInfoSequence=c)}),i.add("groups",angular.toJson(l))}delete e.data.nodes[t.id],s.resolve(r)},function(e){s.resolve({error:e})}),s.promise},verify:{initiate:function(e){var t=r.defer();return a.initiate({verificationMedium:"AUTO",verificationInfo:{address:e.contactInfo}},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise},confirm:function(e,t){var n=r.defer();return a.confirm({verificationCode:e,id:t},function(e){n.resolve(e)},function(e){n.resolve({error:e})}),n.promise}}},s.prototype.groups={local:function(){return angular.fromJson(i.get("groups"))},list:function(){var e=r.defer();return l.list({},function(t){i.add("groups",angular.toJson(t)),e.resolve(t)},function(t){e.resolve({error:t})}),e.promise},update:function(e){var t=r.defer();return l.update({id:e.id},{contactInfoIds:e.list},function(e){t.resolve(e)},function(e){t.resolve({error:e})}),t.promise}},s.prototype.blacklists={save:function(t){var n=r.defer();return o.create({contactInfo:t.contactInfo,contactInfoTag:"PHONE",label:t.label,groupKeys:[e.data.blacklist.group.id]},function(e){n.resolve(e)},function(e){n.resolve({error:e})}),n.promise},remove:function(t){var n=r.defer();return o.remove({id:t.id},function(r){var s=angular.fromJson(i.get("connections")),o=[];angular.forEach(s,function(e){e.id!==t.id&&o.push(e)}),i.add("connections",angular.toJson(o));var u=angular.fromJson(i.get("groups")),a=[],f=[];angular.forEach(e.data.blacklist.group.contactInfoIds,function(e){e!==t.id&&a.push(e)}),angular.forEach(u,function(t){t.id===e.data.blacklist.group.id&&(t.contactInfoIds=a),f.push(t)}),i.add("groups",angular.toJson(f)),n.resolve(r)},function(e){n.resolve({error:e})}),n.promise}},s.prototype.scenarios={run:function(t){var n=r.defer(),s={};return t?console.log("connected ->",s):e.data.sequence!={}?angular.forEach(e.data.sequence,function(e,t){s[t]={contactInfoId:e,timeout:20}}):angular.forEach(e.data.connected.list.verified,function(e,t){e.verified&&(s[t]={contactInfoId:e.id,timeout:20})}),h.build({},{info:"Ask-Cs One Line scenario",connected_numbers:s,events:{on_blacklist:"",on_scenario_complete:"",on_scenario_exception:""}},function(e){i.add("scenario",angular.toJson(e)),n.resolve(e)},function(e){n.resolve({error:e})}),n.promise},build:function(){var t=!1;e.data.connected.list.length>0&&angular.forEach(e.data.connected.list,function(e){e&&e.verified&&(t=!0)}),t&&this.run()}},s.prototype.factory={run:function(){var e=r.defer();return s.prototype.factory.process()&&e.resolve(),e.promise},process:function(t){var n={groups:angular.fromJson(i.get("groups")),connections:angular.fromJson(i.get("connections")),settings:angular.fromJson(i.get("settings"))},r={account:{},connected:{},blacklist:{},contact:{},owner:{},sequence:{},settings:{sms:{status:!1,target:null,targets:[]},email:{status:!1,target:null,targets:[]}}},o=[],u=[],a={};e.data={},angular.forEach(n.connections,function(e){a[e.id]=e});var f=!1;angular.forEach(n.groups,function(e){switch(e.name.toString().toUpperCase()){case"CONNECTEDNUMBERS":r.connected={group:e};break;case"BLACKLIST":r.blacklist={group:e};break;case"CONTACT":r.contact={group:e};break;case"OWNERCONTACT":r.owner={group:e};break;case"CONNECTEDNUMBERSEQUENCE":e.contactInfoSequence?(r.sequence=e.contactInfoSequence,f=!0):f=!1}}),angular.forEach(n.connections,function(e){if(e.groupKeys[0]===r.owner.group.id)switch(e.contactInfoTag.toString().toUpperCase()){case"NAME":r.account.name=e.contactInfo;break;case"EMAIL":r.account.email=e.contactInfo,a[e.id]=e;break;case"ADDRESS":r.account.address=e.contactInfo;break;case"PURCHASED_NUMBER":r.account.purchasedNumber=e.contactInfo;break;case"PHONE":r.account.phone=e.contactInfo,a[e.id]=e}}),e.app.resources=r.account,r.connected.list={verified:[],notVerified:[]},r.connected.group&&r.connected.group.contactInfoIds&&angular.forEach(r.connected.group.contactInfoIds,function(e){a[e]?a[e].verified||r.connected.list.notVerified.push(a[e]):console.log("Error: This node does not exist! (For connections) ->",e)}),f||angular.forEach(r.connected.list.verified,function(e,t){console.log(e,t),r.sequence[t]=e.id}),console.log("sequence ->",r.sequence),angular.forEach(r.sequence,function(e,t){r.connected.list.verified.push({rank:Number(t)+1,number:a[e]})}),r.blacklist.list=[],r.blacklist.group&&r.blacklist.group.contactInfoIds&&angular.forEach(r.blacklist.group.contactInfoIds,function(e){a[e]?r.blacklist.list.push(a[e]):console.log("Error: This node does not exist! (For blacklist) ->",e)}),angular.forEach(a,function(e){switch(e.contactInfoTag.toString().toUpperCase()){case"EMAIL":u.push(e)}});var l=a;return angular.forEach(l,function(e,t){e.contactInfoTag.toString().toUpperCase()!=="PHONE"&&delete l[t]}),r.blacklist.group&&r.blacklist.group.contactInfoIds.length>0&&angular.forEach(r.blacklist.group.contactInfoIds,function(e){delete l[e]}),angular.forEach(l,function(e){o.push(e)}),angular.forEach(u,function(e){r.settings.email.targets.push({id:e.id,value:e.contactInfo})}),angular.forEach(o,function(e){r.settings.sms.targets.push({id:e.id,value:e.contactInfo})}),angular.forEach(n.settings,function(e){switch(e.medium.toString().toUpperCase()){case"EMAIL":r.settings.email.id=e.id,r.settings.email.status=e.targetContactInfos.length>0;var t=a[e.targetContactInfos[0]]?a[e.targetContactInfos[0]].id:r.settings.email.targets.length>0?r.settings.email.targets[0].id:null;r.settings.email.original=r.settings.email.target=e.targetContactInfos.length>0?t:r.settings.email.targets.length>0?r.settings.email.targets[0].id:null;break;case"SMS":r.settings.sms.id=e.id,r.settings.sms.status=e.targetContactInfos.length>0;var n=a[e.targetContactInfos[0]]?a[e.targetContactInfos[0]].id:r.settings.sms.targets.length>0?r.settings.sms.targets[0].id:null;r.settings.sms.original=r.settings.sms.target=e.targetContactInfos.length>0?n:r.settings.sms.targets.length>0?r.settings.sms.targets[0].id:null}}),r.nodes=a,e.tmp=e.data=r,console.info("data ->",e.data),t&&s.prototype.scenarios.build(),!0}},new s}])});