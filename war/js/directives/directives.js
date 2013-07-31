/*jslint node: true */
/*global angular */
/*global $ */
'use strict';


angular.module('WebPaige.Directives', ['ngResource'])


/**
 * Chosen
 */
.directive('chosen',
  function ()
  {
    var linker = function (scope, element, attr)
    {
      scope.$watch('receviersList', function ()
      {
         element.trigger('liszt:updated');
      });

      scope.$watch('message.receviers', function ()
      {
        $(element[0]).trigger('liszt:updated');
      });

      element.chosen();
    };

    return {
      restrict: 'A',
      link:     linker
    };
  }
)

.factory('$modal', ['$rootScope', '$compile', '$http', '$timeout', '$q', '$templateCache',
    function($rootScope, $compile, $http, $timeout, $q, $templateCache) {

  var ModalFactory = function ModalFactory(options) {

    function Modal(options) {
      if(!options) options = {};

      var scope = options.scope || $rootScope.$new(),
        templateUrl = options.template;

      //@todo support {title, content} object

      return $q.when($templateCache.get(templateUrl) || $http.get(templateUrl, {cache: true}).then(function(res) { return res.data; }))
        .then(function onSuccess(template) {

          // Build modal object
          var id = templateUrl.replace('.html', '').replace(/[\/|\.|:]/g, "-") + '-' + scope.$id;
          var $modal = $('<div class="modal hide" tabindex="-1"></div>').attr('id', id).addClass('fade').html(template);
          if(options.modalClass) $modal.addClass(options.modalClass);

          $('body').append($modal);

          // Compile modal content
          $timeout(function() {
            $compile($modal)(scope);
          });

          // Provide scope display functions
          scope.$modal = function(name) {
            $modal.modal(name);
          };
          scope.hide = function() {
            $modal.modal('hide');
          };
          scope.show = function() {
            $modal.modal('show');
          };
          scope.dismiss = scope.hide;

          // Emit modal events
          angular.forEach(['show', 'shown', 'hide', 'hidden'], function(name) {
            $modal.on(name, function(ev) {
              scope.$emit('modal-' + name, ev);
            });
          });

          // Support autofocus attribute
          $modal.on('shown', function(event) {
            $('input[autofocus]', $modal).first().trigger('focus');
          });

          if(options.show) {
            $modal.modal('show');
          }

          return $modal;

        });

    }

    return new Modal(options);

  };

  return ModalFactory;

}]);


/**
 * Notification item
 */
// .directive('notificationItem',
//   function ($compile)
//   {
//     return {
//       restrict: 'E',
//       rep1ace:  true,
//       templateUrl: 'dist/views/messages-scheadule-item.html',
//       link: function (scope, element, attrs)
//       {
//         /**
//          * Pass the scheadule data
//          */
//         scope.s = scope.scheadule;

//         // element.html(template).show();
//         // $compile(element.contents())(scope);

//         /**
//          * Serve to the controller
//          */
//         scope.remover = function (key)
//         {
//           console.log('coming to remover');

//           scope.$parent.$parent.remover(key);
//         };
//       },
//       scope: {
//         scheadule: '='
//       }
//     };

//   }
// )


/**
 * Daterangepicker
 */
// .directive('daterangepicker',
// [
//   '$rootScope',
//   function ($rootScope)
//   {
//     return {
//       restrict: 'A',

//       link: function postLink(scope, element, attrs, controller)
//       {
//         // var startDate = Date.create().addDays(-6),
//         //     endDate   = Date.create();       
//         //element.val(startDate.format('{MM}-{dd}-{yyyy}') + ' / ' + endDate.format('{MM}-{dd}-{yyyy}'));

//         element.daterangepicker({
//           // startDate: startDate,
//           // endDate: endDate,
//           ranges: {
//             'Today':        ['today',     'tomorrow'],
//             'Tomorrow':     ['tomorrow',  new Date.today().addDays(2)],
//             'Yesterday':    ['yesterday', 'today'],
//             'Next 3 Days':  ['today',     new Date.create().addDays(3)],
//             'Next 7 Days':  ['today',     new Date.create().addDays(7)]
//           }
//         },
//         function (start, end)
//         {
//           scope.$apply(function ()
//           {
//             var diff = end.getTime() - start.getTime();

//             /**
//              * Scope is a day
//              */
//             if (diff <= 86400000)
//             {
//               scope.timeline.range = {
//                 start:  start,
//                 end:    start
//               };
//               scope.timeline.scope = {
//                 day:    true,
//                 week:   false,
//                 month:  false
//               };
//             }
//             /**
//              * Scope is less than a week
//              */
//             else if (diff < 604800000)
//             {
//               scope.timeline.range = {
//                 start:  start,
//                 end:    end
//               };
//               scope.timeline.scope = {
//                 day:    false,
//                 week:   true,
//                 month:  false
//               };
//             }
//             /**
//              * Scope is more than a week
//              */
//             else if (diff > 604800000)
//             {
//               scope.timeline.range = {
//                 start:  start,
//                 end:    end
//               };
//               scope.timeline.scope = {
//                 day:    false,
//                 week:   false,
//                 month:  true
//               };
//             }

//             $rootScope.$broadcast('timeliner', {
//               start:  start,
//               end:    end
//             });

//           });
//         });

//         /**
//          * Set data toggle
//          */
//         element.attr('data-toggle', 'daterangepicker');

//         /**
//          * TODO
//          * Investigate if its really needed!!
//          */
//         element.daterangepicker({
//           autoclose: true
//         });
//       }
//     };
//   }
// ])


/**
 * ???
 */
// .directive('wpName', 
// [
//   'Storage', 
//   function (Storage)
//   {
//     return {
//       restrict : 'A',
//       link : function linkfn(scope, element, attrs)
//       {
//         var getmemberName = function (uid)
//         {
//           var members = angular.fromJson(Storage.get('members')),
//               retName = uid;

//           angular.forEach(members , function (mem, i)
//           {
//             if (mem.uuid == uid)
//             {
//               retName = mem.name;

//               return false;
//             };
//           });

//           return retName;
//         };
//         scope.$watch(attrs.wpName, function (uid)
//         {
//           element.text(getmemberName(uid)); 
//         });
//       }
//     }
//   }
// ]);


/**
 * 
 */
// .directive('shortcuts', 
// [
//   '$rootScope', 
//   function ($rootScope)
//   {
//     return {
//       restrict: 'E',
//       template: '<link rel="shortcut icon" ng-href="js/profiles/{{profile}}/img/ico/favicon.ico">' +
//                 '<link rel="apple-touch-icon-precomposed" sizes="144x144" ng-href="js/profiles/{{profile}}/img/ico/apple-touch-icon-144-precomposed.png">' +
//                 '<link rel="apple-touch-icon-precomposed" sizes="114x114" ng-href="js/profiles/{{profile}}/img/ico/apple-touch-icon-114-precomposed.png">' +
//                 '<link rel="apple-touch-icon-precomposed" sizes="72x72"   ng-href="js/profiles/{{profile}}/img/ico/apple-touch-icon-72-precomposed.png">' +
//                 '<link rel="apple-touch-icon-precomposed" sizes="57x57"   ng-href="js/profiles/{{profile}}/img/ico/apple-touch-icon-57-precomposed.png">',
//       replace: true,
//       scope: {
//         profile: '@profile'
//       },
//       link: function (scope, element, attrs)
//       {
//       }
//     }
//   }
// ]);

