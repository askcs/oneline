define(["controllers/controllers"],function(e){e.controller("purchaser",["$rootScope","$scope","Generators",function(e,t,n){e.fixStyles(),t.order={"package":null,country:31},t.tabs={normals:!0,premiums:!1},t.packages=e.config.packages,t.countries=e.config.countries,t.virtuals=e.config.virtuals,t.defaults={"package":1,country:31},t.order.country=t.defaults.country,t.$watch("order",function(){t.regions=e.config.regions[t.order.country],t.ranges=e.config.ranges[t.order.virtual];if(t.order.package){var n={monthly:e.config.packages[t.order.package].prices.monthly,yearly:e.config.packages[t.order.package].prices.yearly};t.prices={monthly:t.order.premium?n.monthly.premium:n.monthly.normal,yearly:t.order.premium?n.yearly.premium:n.yearly.normal}}},!0),t.resetPurchaser=function(){t.order={"package":null,country:t.defaults.country,region:null,virtual:null,number:null},t.switchStep(1)},t.setRegion=function(){t.order.region&&(t.numbers=n.list())},t.setVirtualArea=function(){t.order.virtual&&(t.numbers=n.list())},t.setPackage=function(e){t.order.package=Number(e),t.order.number=null},t.switchStep=function(e){t.purchaser={step:e}},t.switchStep(1),t.increaseStep=function(){t.purchaser.step<3&&t.order.number&&t.switchStep(t.purchaser.step+1)},t.decreaseStep=function(){t.purchaser.step>1&&t.switchStep(t.purchaser.step-1)}}])});