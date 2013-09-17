define(["controllers/controllers"],function(e){e.controller("manager",["$rootScope","$scope","Core",function(e,t,n){e.fixStyles(),t.connection={label:"",contactInfo:"",contactInfoTag:"Phone"},t.verified={status:!1,result:null},t.connections={local:function(){return n.connections.local()},list:function(){e.statusBar.display("Getting the list of connected numbers.."),n.connections.list().then(function(){e.statusBar.off(),n.factory.process()})},save:function(){if(t.connection.label!==""||t.connection.contactInfo!=="")e.statusBar.display("Saving the number.."),n.connections.save(t.connection).then(function(){e.statusBar.off(),t.connection={label:"",contactInfo:"",contactInfoTag:"Phone"},self.list()})},remove:function(t){var r=this;e.statusBar.display("Deleting a number.."),n.connections.remove(t).then(function(){e.statusBar.off(),r.list()})},edit:function(n){angular.forEach(e.data.connected,function(e){n.id===e.id&&(t.connection=e)})},verify:{initiate:function(r){e.statusBar.display("Verification call inited or message is being sent.."),n.connections.verify.initiate(r).then(function(n){console.log("result ->",n),e.statusBar.off(),t.toBeVerified=r,t.verificationInfoID=n.verificationInfo.id,$modal({template:"/js/views/elements/con_verification.html",persist:!0,show:!0,backdrop:"static",scope:t})})},confirm:function(r,i){e.statusBar.display("Verifying your number and code.."),n.connections.verify.confirm(r,i).then(function(r){e.statusBar.off(),t.verified={status:!0,result:r.verified},n.factory.process(),e.$emit("setView","manager")})}}}}])});