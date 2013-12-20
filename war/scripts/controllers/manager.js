define(["controllers/controllers"],function(e){e.controller("manager",["$rootScope","$scope","Core","Storage",function(e,t,n,r){e.fixStyles(),$("#verifieds").sortable({items:"tbody tr",update:function(){var t=$("#verifieds tbody tr");$.each(t,function(n){e.data.sequence[n]=$(t[n]).attr("data-rank")})}}),t.reGenerate=function(){e.statusBar.display("Regenerating the list.."),$("#sequenceBtn").attr("disabled","disabled"),n.scenarios.run().then(function(t){e.statusBar.off();var i=angular.fromJson(r.get("groups"));angular.forEach(i,function(e){e.scenarioId==t.scenarioId&&(e.contactInfoSequence=t.contactInfoSequence)}),$("#sequenceBtn").removeAttr("disabled"),r.add("groups",angular.toJson(i)),n.factory.process()})},t.resetConnection=function(){t.connection={label:"",contactInfo:"",contactInfoTag:"Phone"}},t.resetConnection(),t.verified={status:!1,result:null},t.verifying={},t.verificationCode={},t.resetVerifiers=function(){angular.forEach(e.data.connected.list.notVerified,function(e){t.verifying[e.id]=!1,t.verificationCode[e.id]="",$("#verifyBtn-"+e.id).text("Verify").removeAttr("disabled")})},t.connections={local:function(){return n.connections.local()},list:function(){e.statusBar.display("Getting the list of connected numbers.."),n.connections.list().then(function(){e.statusBar.off(),n.factory.process()})},save:function(){if(t.connection.label!==""||t.connection.contactInfo!=="")e.statusBar.display("Saving the number.."),n.connections.save(t.connection).then(function(){e.statusBar.off(),e.phoneNumberParsed.message="",t.resetConnection(),n.factory.process()})},remove:function(t,r){e.statusBar.display("Deleting a number.."),n.connections.remove(t,r).then(function(){e.statusBar.off(),n.factory.process()})},edit:function(n){console.log("number ->",n),angular.forEach(e.data.connected.list.notVerified,function(e){n.id===e.id&&(t.connection=e)})},verify:{initiate:function(r){e.statusBar.display("Verification call initiated or message is being sent.."),t.resetVerifiers(),$("#verifyBtn-"+r.id).text("Sending verification code..").attr("disabled","disabled"),n.connections.verify.initiate(r).then(function(n){t.resetVerifiers(),t.verifying[r.id]=!0,e.statusBar.off(),t.verificationInfoID=n.verificationInfo.id})},confirm:function(i){e.statusBar.display("Verifying your number and code.."),n.connections.verify.confirm(t.verificationCode[i.id],t.verificationInfoID).then(function(s){e.statusBar.off(),t.verified={status:!0,result:s.verified};if(s.verified){var o=angular.fromJson(r.get("connections"));angular.forEach(o,function(t){if(t.id===i.id){t.verified=!0;var n=e.data.sequence,s=0,o=angular.fromJson(r.get("groups"));angular.forEach(e.data.sequence,function(){s++}),n[s]=t.id,e.data.sequence=n,angular.forEach(o,function(e){e.name.toString().toUpperCase()=="CONNECTEDNUMBERSEQUENCE"&&(e.contactInfoSequence=n)}),r.add("groups",angular.toJson(o))}}),r.add("connections",angular.toJson(o)),n.factory.process()}t.resetVerifiers()})}}}}])});