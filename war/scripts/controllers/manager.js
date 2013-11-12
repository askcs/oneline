define(["controllers/controllers"],function(e){e.controller("manager",["$rootScope","$scope","Core","Storage","Phone",function(e,t,n,r,i){e.fixStyles(),t.phoneNumberParsed={},t.phoneNumberParsed.result=!1,t.checkNumber=function(){if(t.connection.contactInfo.length>0){var e,n;e=n=i.parse(t.connection.contactInfo,"NL"),t.phoneNumberParsed.result=!0;if(e){var r="It seems not to be a phone number!",s="Invalid country code. Please enter a number from Netherlands.",o;if(e.error)t.phoneNumberParsed={result:!1,message:r};else if(!e.validation.isPossibleNumber){switch(e.validation.isPossibleNumberWithReason){case"INVALID_COUNTRY_CODE":o=s;break;case"TOO_SHORT":o=r+" (Number is too short.)";break;case"TOO_LONG":o=r+" (Number is too long)"}t.phoneNumberParsed={result:!1,message:o}}else e.validation.isValidNumber?e.validation.isValidNumberForRegion?(t.phoneNumberParsed={result:!0,message:"You have entered a correct number. Number is registered for "+e.validation.phoneNumberRegion+" and number type is "+e.validation.getNumberType},$("#inputPhoneNumber").removeClass("error")):t.phoneNumberParsed={result:!1,message:s}:t.phoneNumberParsed={result:!1,message:r}}t.phoneNumberParsed.all=n}else t.phoneNumberParsed.result=!0,delete t.phoneNumberParsed.message,$("#inputPhoneNumber").removeClass("error")},t.resetConnection=function(){t.connection={label:"",contactInfo:"",contactInfoTag:"Phone"}},t.resetConnection(),t.verified={status:!1,result:null},t.verifying={},t.verificationCode={},t.resetVerifiers=function(){angular.forEach(e.data.connected.list,function(e){t.verifying[e.id]=!1,t.verificationCode[e.id]="",$("#verifyBtn-"+e.id).text("Verify").removeAttr("disabled")})},t.connections={local:function(){return n.connections.local()},list:function(){e.statusBar.display("Getting the list of connected numbers.."),n.connections.list().then(function(){e.statusBar.off(),n.factory.process()})},save:function(){if(t.connection.label!==""||t.connection.contactInfo!=="")e.statusBar.display("Saving the number.."),n.connections.save(t.connection).then(function(){e.statusBar.off(),t.resetConnection(),n.factory.process()})},remove:function(t){e.statusBar.display("Deleting a number.."),n.connections.remove(t).then(function(){e.statusBar.off(),n.factory.process()})},edit:function(n){angular.forEach(e.data.connected.list,function(e){n.id===e.id&&(t.connection=e)})},verify:{initiate:function(r){e.statusBar.display("Verification call initiated or message is being sent.."),t.resetVerifiers(),$("#verifyBtn-"+r.id).text("Sending verification code..").attr("disabled","disabled"),n.connections.verify.initiate(r).then(function(n){t.resetVerifiers(),t.verifying[r.id]=!0,e.statusBar.off(),t.verificationInfoID=n.verificationInfo.id})},confirm:function(i){e.statusBar.display("Verifying your number and code.."),n.connections.verify.confirm(t.verificationCode[i.id],t.verificationInfoID).then(function(s){e.statusBar.off(),t.verified={status:!0,result:s.verified};if(s.verified){var o=angular.fromJson(r.get("connections"));angular.forEach(o,function(e){e.id===i.id&&(e.verified=!0)}),r.add("connections",angular.toJson(o)),n.factory.process()}t.resetVerifiers()})}}}}])});