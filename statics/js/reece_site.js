/****** FILE: reece/javascript/reece.js *****/
;(function($){window.Reece=(function(){var log=function(msg){if(typeof console!='undefined'&&console.log){console.log(msg);}else{}};return{log:log};})();$(function(){$(".pinterest").on("click",function(e){e.preventDefault();pinClick();});$('iframe').each(function(){var url=$(this).attr("src");if(!url){return;}
var spacer="?";if(url.indexOf("?")!=-1){var spacer="&";}
$(this).attr("src",url+spacer+"wmode=transparent");});})
function pinClick(){PinterestSpecial.popupPinItForm();return false;}})(jQuery);
;
/****** FILE: reece/javascript/tracking.js *****/
;(function($){Reece.Tracking=(function(){var track=function(category,action,label){if(_gaq){_gaq.push(['_trackEvent',category,action,label]);}};return{track:track};})();})(jQuery);
;
/****** FILE: themes/reece/javascript/reece-ocnav.js *****/

$(document).ready(function(){$('.ocmain-wrapper').unbind('swiperight').bind('swiperight',function(){$('body').removeClass('off-canvas-open');});$(".navbar-fixed-top .btn-navbar").unbind('click').bind('click',function(){if($('body').hasClass('off-canvas-open')){$('body').removeClass('off-canvas-open');}else{$('body').addClass('off-canvas-open');}});});
;
/****** FILE: themes/reece/javascript/reece-site.js *****/
;(function($){$(document).ready(function(){$(".ocmain-wrapper").fitVids();$('.interval3').carousel({interval:3000});$('.interval4').carousel({interval:4000});$('.interval5').carousel({interval:5000});});})(jQuery);
;
