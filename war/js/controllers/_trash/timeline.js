/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Timeline', [])


.controller('timeline',
[
	'$rootScope', '$scope', '$q', '$location', '$route', 'Slots', 'Dater', 'Storage', 'Sloter', 'Profile', 'Timer',
	function ($rootScope, $scope, $q, $location, $route, Slots, Dater, Storage, Sloter, Profile, Timer)
	{
		var range, diff;

		/**
		 * Watch for changes in timeline range
		 */
		$scope.$watch(function ()
		{
			/**
			 * If main timeline
			 */
			if ($scope.timeline && $scope.timeline.main)
			{
				range = $scope.self.timeline.getVisibleChartRange();
				diff  = Dater.calculate.diff(range);

				/**
				 * Scope is a day
				 * 
				 * TODO
				 * try later on!
				 * new Date(range.start).toString('d') == new Date(range.end).toString('d')
				 */
				if (diff <= 86400000)
				{
					$scope.timeline.scope = {
						day:    true,
						week:   false,
						month:  false
					};
				}
				/**
				 * Scope is less than a week
				 */
				else if (diff < 604800000)
				{
					$scope.timeline.scope = {
						day:    false,
						week:   true,
						month:  false
					};
				}
				/**
				 * Scope is more than a week
				 */
				else if (diff > 604800000)
				{
					$scope.timeline.scope = {
						day:    false,
						week:   false,
						month:  true
					};
				}

				$scope.timeline.range = {
					start:  new Date(range.start).toString(),
					end:    new Date(range.end).toString()
				};

				$scope.daterange =  Dater.readable.date($scope.timeline.range.start) +
														' / ' +
														Dater.readable.date($scope.timeline.range.end);
			}
			/**
			 * User timeline
			 */
			else
			{
				range = $scope.self.timeline.getVisibleChartRange();

				$scope.timeline.range = {
					start:  new Date(range.start).toString(),
					end:    new Date(range.end).toString()
				};
			}
		});


	  /**
	   * Timeline (The big boy)
	   */
	  $scope.timeliner = {

	    /**
	     * Init timeline
	     */
	    init: function ()
	    {
	      $scope.self.timeline = new links.Timeline(document.getElementById($scope.timeline.id));

	      links.events.addListener($scope.self.timeline, 'rangechanged',  this.getRange);
	      links.events.addListener($scope.self.timeline, 'add',           this.onAdd);
	      links.events.addListener($scope.self.timeline, 'delete',        this.onRemove);
	      links.events.addListener($scope.self.timeline, 'change',        this.onChange);
	      links.events.addListener($scope.self.timeline, 'select',        this.onSelect);

	      this.render($scope.timeline.options);      
	    },

	    getRange: function () { $scope.timelineGetRange() },

	    onAdd: 		function () { $scope.timelineOnAdd() },

	    onRemove: function () { $scope.timelineOnRemove() },

	    onChange: function () { $scope.timelineOnChange() },

	    onSelect: function () { $scope.timelineOnSelect() },

	    /**
	     * (Re-)Render timeline
	     */
	    render: function (options, remember)
	    {
	    	$scope.timeline = {
	      	id: 			$scope.timeline.id,
	      	main: 		$scope.timeline.main,
	      	user: 		$scope.timeline.user,
	        current:  $scope.timeline.current,
	        scope: 		$scope.timeline.scope,
	        config:   $scope.timeline.config,
	        options: {
	          start:  (remember) ? $scope.timeline.range.start : new Date(options.start),
	          end:    (remember) ? $scope.timeline.range.end : new Date(options.end),
	          min:    new Date(options.start),
	          max:    new Date(options.end)
	        }
	      };

			  /**
			   * IE8 fix for inability of - signs in date object
			   */
			  if ($.browser.msie && $.browser.version == '8.0')
			  {
			  	$scope.timeline.options.start = new Date(options.start);
			  	$scope.timeline.options.end 	= new Date(options.end);
			  }


	      angular.extend($scope.timeline.options, $rootScope.config.timeline.options);

	      if ($scope.timeline.main)
	      {
		      $scope.self.timeline.draw(
		        Sloter.process(
		          $scope.data,
		          $scope.timeline.config,
		          $scope.divisions,
		          $scope.timeline.user.role
		        ), 
		        $scope.timeline.options
		      );
		    }
		    else
		    {
		    	var timeout = ($location.hash() == 'timeline') ? 100 : 1700;

			    setTimeout( function() 
		      {
		        $scope.self.timeline.draw(
		          Sloter.profile(
		            $scope.data.slots.data, 
		            $scope.timeline.config
		          ), $scope.timeline.options);
		      }, timeout);
		    };
	      
	      $scope.self.timeline.setVisibleChartRange($scope.timeline.options.start, $scope.timeline.options.end);
	    },

	    /**
	     * Grab new timeline data from backend and render timeline again
	     */
	    load: function (stamps, remember)
	    {
	      var _this = this;

	      $rootScope.statusBar.display($rootScope.ui.planboard.refreshTimeline);

	      if ($scope.timeline.main)
	      {
		      Slots.all({
		        groupId:  $scope.timeline.current.group,
		        division: $scope.timeline.current.division,
		        layouts:  $scope.timeline.current.layouts,
		        month:    $scope.timeline.current.month,
		        stamps:   stamps
		      })
		      .then(function (data)
		      {
		        if (data.error)
		        {
		          $rootScope.notifier.error('Error with gettings timeslots.');
		          console.warn('error ->', result);
		        }
		        else
		        {
		          $scope.data = data;

		          _this.render(stamps, remember);
		        };

		        $rootScope.statusBar.off();
		      });
		    }
	      else
	      {
	      	Profile.getSlots($scope.timeline.user.id, stamps)
		      .then(function (data)
		      {
		        if (data.error)
		        {
		          $rootScope.notifier.error('Error with gettings timeslots.');
		          console.warn('error ->', result);
		        }
		        else
		        {
			      	data.user 	= data.slots.data;

			        $scope.data = data;

			        _this.render(stamps, remember);

			        $rootScope.statusBar.off();
		        };
		      });
		    };
	    },

	    /**
	     * Refresh timeline as it is
	     */
	    refresh: function ()
	    {
	      $scope.slot = {};

	      if ($scope.timeline.main)
	      {
		      $scope.resetViews();

		      $scope.views.slot.add = true;
	      }
	      else
	      {
		      $scope.forms = {
		        add:  true,
		        edit: false
		      };
		    };

	      this.load({
	        start:  $scope.data.periods.start,
	        end:    $scope.data.periods.end
	      }, true);
	    },

	    /**
	     * Redraw timeline
	     */
	    redraw: function ()
	    {
	      $scope.self.timeline.redraw();
	    },

	    isAdded: function ()
	    {
	    	return $('.timeline-event-content')
	                .contents()
	                .filter(function ()
	                { 
	                  return this.nodeValue == 'New' 
	                }).length;
	    },

	    /**
	     * Cancel add
	     */
	    cancelAdd: function ()
	    {
	      $scope.self.timeline.cancelAdd();
	    }
	  };
	 

	  /**
	   * Init timeline
	   */
	  if ($scope.timeline) $scope.timeliner.init();


	  /**
	   * Timeliner listener
	   */
	  $rootScope.$on('timeliner', function () 
	  {
	    $scope.timeliner.load({
	      start:  new Date(arguments[1].start).getTime(),
	      end:    new Date(arguments[1].end).getTime()
	    });
	  });


	  /**
	   * Handle new requests for timeline
	   */
	  $scope.requestTimeline = function (section)
	  {
	    switch (section)
	    {
	      case 'group':
	        $scope.timeline.current.layouts.group = !$scope.timeline.current.layouts.group;

	        if ($scope.timeline.current.layouts.members && !$scope.timeline.current.layouts.group)
	          $scope.timeline.current.layouts.members = false;
	      break;

	      case 'members':
	        $scope.timeline.current.layouts.members = !$scope.timeline.current.layouts.members;

	        if ($scope.timeline.current.layouts.members && !$scope.timeline.current.layouts.group)
	          $scope.timeline.current.layouts.group = true;
	      break;
	    };

	    $scope.timeliner.load({
	      start:  $scope.data.periods.start,
	      end:    $scope.data.periods.end
	    });
	  };


	  /**
	   * Timeline get ranges
	   */
	  $scope.timelineGetRange = function ()
	  {
	    var range = $scope.self.timeline.getVisibleChartRange();

	    $scope.$apply(function ()
	    {
	      $scope.timeline.range = {
	        start:  new Date(range.from).toString(),
	        end:    new Date(range.till).toString()
	      };

	      if ($scope.timeline.main)
	      {
		      $scope.daterange = {
		        start:  Dater.readable.date(new Date(range.start).getTime()),
		        end:    Dater.readable.date(new Date(range.end).getTime())
		      };
	      };

	    });
	  };


	  /**
	   * Get information of the selected slot
	   */
	  $scope.selectedSlot = function ()
	  {
	    var selection;

	    /**
	     * TODO
	     * 
	     * Not working!!
	     */
	    $scope.timeliner.cancelAdd();

	    if (selection = $scope.self.timeline.getSelection()[0])
	    {
	      var values  = $scope.self.timeline.getItem(selection.row),
	          content = angular.fromJson(values.content.match(/<span class="secret">(.*)<\/span>/)[1]) || null;

	      $scope.original = {
	        start:        values.start,
	        end:          values.end,
	        content: {
	          recursive:  content.recursive,
	          state:      content.state,
	          id:         content.id
	        }
	      };

	      if ($scope.timeline.main)
	      {
		      $scope.resetViews();
		    }
		    else
		    {
		      /**
		       * TODO
		       * Convert to resetview?
		       */
		      $scope.forms = {
		        add:  false,
		        edit: true
		      };
		    };

	      if (content.type)
	      {
	      	if ($scope.timeline.main)
	      	{
			      switch (content.type)
			      {
			        case 'slot':
			          $scope.views.slot.edit = true;
			        break;

			        case 'group':
			          $scope.views.group = true;
			        break;

			        case 'wish':
			          $scope.views.wish = true;
			        break;

			        case 'member':
			          $scope.views.member = true;
			        break;
			      };
	      	};

		      $scope.slot = {
		        start: {
		          date: new Date(values.start).toString($rootScope.config.formats.date),
		          time: new Date(values.start).toString($rootScope.config.formats.time),
		          datetime: new Date(values.start).toISOString()
		        },
		        end: {
		          date: new Date(values.end).toString($rootScope.config.formats.date),
		          time: new Date(values.end).toString($rootScope.config.formats.time),
		          datetime: new Date(values.end).toISOString()
		        },
		        state:      content.state,
		        recursive:  content.recursive,
		        id:         content.id
		      };

		      /**
		       * TODO
		       * Check if this can be combined with switch later on!
		       * Set extra data based slot type for inline form
		       */
		      if ($scope.timeline.main)
		      {
			      switch (content.type)
			      {
			        case 'group':
			          $scope.slot.diff  = content.diff;
			          $scope.slot.group = content.group;
			        break;

			        case 'wish':
			          $scope.slot.wish    = content.wish;
			          $scope.slot.group   = content.group;
			          $scope.slot.groupId = content.groupId;
			        break;

			        case 'member':
			          $scope.slot.member = content.mid;
			        break;
			      };
		      };
	      };

	      return values;
	    };
	  };


	  /**
	   * Timeline on select
	   */
	  $scope.timelineOnSelect = function ()
	  {
	    $scope.$apply(function ()
	    {
	      $scope.selectedOriginal = $scope.selectedSlot();
	    });
	  };


	  /**
	   * Prevent re-rendering issues with timeline
	   */
	  $scope.destroy = {
	    timeline: function ()
	    {
	      // Not working !! :(
	      // Sloter.pies($scope.data);
	    },
	    statistics: function ()
	    {
	      setTimeout(function ()
	      {
	        $scope.timeliner.redraw();
	      }, 10);
	    }
	  };


	  /**
	   * Group aggs barCharts toggler
	   */
	  $scope.barCharts = function ()
	  {
	    $scope.timeline.config.bar = !$scope.timeline.config.bar;

	    $scope.timeliner.render({
	      start:  $scope.timeline.range.start,
	      end:    $scope.timeline.range.end
	    });
	  };
	  

	  /**
	   * Group wishes toggler
	   */
	  $scope.groupWishes = function ()
	  {
	    $scope.timeline.config.wishes = !$scope.timeline.config.wishes;

	    $scope.timeliner.render({
	      start:  $scope.timeline.range.start,
	      end:    $scope.timeline.range.end
	    });
	  };
	  

	  /**
	   * Timeline legenda toggler
	   */
	  $scope.showLegenda = function ()
	  {
		  $scope.timeline.config.legendarer = !$scope.timeline.config.legendarer;
		};


	  /**
	   * Alter legenda settings
	   */
	  $scope.alterLegenda = function (legenda)
	  {
	    $scope.timeline.config.legenda = legenda;

	    $scope.timeliner.render({
	      start:  $scope.timeline.range.start,
	      end:    $scope.timeline.range.end
	    });
	  };


	  /**
	   * Add slot trigger start view
	   */
	  $scope.timelineOnAdd = function (form, slot)
	  {
	  	/**
	  	 * Make view for new slot
	  	 */
	  	if (!form)
	  	{
		    var values = $scope.self.timeline.getItem($scope.self.timeline.getSelection()[0].row);

		    if ($scope.timeliner.isAdded() > 1) $scope.self.timeline.cancelAdd();

		    $scope.$apply(function ()
		    {
		    	if ($scope.timeline.main)
		    	{
			      $scope.resetViews();

			      $scope.views.slot.add = true;
		    	}
		    	else
		    	{
			      $scope.forms = {
			        add:  true,
			        edit: false
			      };
			    };

		      $scope.slot = {
		        start: {
		          date: new Date(values.start).toString($rootScope.config.formats.date),
		          time: new Date(values.start).toString($rootScope.config.formats.time),
		          datetime: new Date(values.start).toISOString()
		        },
		        end: {
		          date: new Date(values.end).toString($rootScope.config.formats.date),
		          time: new Date(values.end).toString($rootScope.config.formats.time),
		          datetime: new Date(values.end).toISOString()
		        },
		        recursive: (values.group.match(/recursive/)) ? true : false,
		        /**
		         * INFO
		         * First state is hard-coded
		         * Maybe use the first one from array later on?
		         */
		        state: 'com.ask-cs.State.Available'
		      };
		    });
	  	}
	  	/**
	  	 * Add new slot
	  	 */
	  	else
	  	{
		    var now     = Date.now().getTime(),
		        values  = {
		                    start:      ($rootScope.browser.mobile) ? 
		                                  new Date(slot.start.datetime).getTime() / 1000 :
		                                  Dater.convert.absolute(slot.start.date, slot.start.time, true),
		                    end:        ($rootScope.browser.mobile) ? 
		                                  new Date(slot.end.datetime).getTime() / 1000 : 
		                                  Dater.convert.absolute(slot.end.date, slot.end.time, true),
		                    recursive:  (slot.recursive) ? true : false,
		                    text:       slot.state
		                  };

		    if (values.end * 1000 <= now && values.recursive == false)
		    {
		      $rootScope.notifier.error('You can not input timeslots in past.');

		      // timeliner.cancelAdd();
		      $scope.timeliner.refresh();
		    }
		    else
		    {
		      $rootScope.statusBar.display($rootScope.ui.planboard.addTimeSlot);

		      Slots.add(values, $scope.timeline.user.id)
		      .then(
		        function (result)
		        {
		          if (result.error)
		          {
		            $rootScope.notifier.error('Error with adding a new timeslot.');
		            console.warn('error ->', result);
		          }
		          else
		          {
		            $rootScope.notifier.success($rootScope.ui.planboard.slotAdded);
		          };

		          $scope.timeliner.refresh();
		        }
		      );
		    };
	  	}
	  };


	  /**
	   * Timeline on change
	   */
	  $scope.timelineOnChange = function (direct, original, slot, options)
	  {
	    if (!direct)
	    {
	      var values  = $scope.self.timeline.getItem($scope.self.timeline.getSelection()[0].row),
	          options = {
	            start:    values.start,
	            end:      values.end,
	            content:  angular.fromJson(values.content.match(/<span class="secret">(.*)<\/span>/)[1])
	          };
	    }
	    else
	    {
	    	var options = {
		      start:  ($rootScope.browser.mobile) ?
		                new Date(slot.start.datetime).getTime() : 
		                Dater.convert.absolute(slot.start.date, slot.start.time, false),
		      end:    ($rootScope.browser.mobile) ? 
		                new Date(slot.end.datetime).getTime() :
		                Dater.convert.absolute(slot.end.date, slot.end.time, false),
		      content: angular.toJson({
		        recursive:  slot.recursive, 
		        state:      slot.state 
		      })
		    };
	    }

	    var now = Date.now().getTime();

	    if (options.end <= now && options.content.recursive == false)
	    {
	      $rootScope.notifier.error('You can not change timeslots in past.');

	      $scope.timeliner.refresh();
	    }
	    else
	    {
	      $rootScope.statusBar.display($rootScope.ui.planboard.changingSlot);

	      Slots.change($scope.original, options, $scope.timeline.user.id)
	      .then(
	        function (result)
	        {
	          if (result.error)
	          {
	            $rootScope.notifier.error('Error with changing timeslot.');
	            console.warn('error ->', result);
	          }
	          else
	          {
	            $rootScope.notifier.success($rootScope.ui.planboard.slotChanged);
	          };

	          $scope.timeliner.refresh();
	        }
	      );
	    };
	  };


	  /**
	   * Timeline on remove
	   */
	  $scope.timelineOnRemove = function ()
	  {
	    if ($scope.timeliner.isAdded() > 0)
	    {
	      $scope.self.timeline.cancelAdd();

	      $scope.$apply(function ()
	      {
	        $scope.resetInlineForms();
	      });
	    }
	    else
	    {
	      var now = Date.now().getTime();

	      if ($scope.original.end.getTime() <= now && $scope.original.recursive == false)
	      {
	        $rootScope.notifier.error('You can not delete timeslots in past.');

	        $scope.timeliner.refresh();
	      }
	      else
	      {
	        $rootScope.statusBar.display($rootScope.ui.planboard.deletingTimeslot);

	        Slots.remove($scope.original, $scope.timeline.user.id)
	        .then(
	          function (result)
	          {
	            if (result.error)
	            {
	              $rootScope.notifier.error('Error with removing timeslot.');
	              console.warn('error ->', result);
	            }
	            else
	            {
	              $rootScope.notifier.success($rootScope.ui.planboard.timeslotDeleted);
	            };

	            $scope.timeliner.refresh();
	          }
	        );
	      };
	    };
	  };


	  /**
	   * Set wish
	   */
	  $scope.wisher = function (slot)
	  {
	    $rootScope.statusBar.display($rootScope.ui.planboard.changingWish);

	    Slots.setWish(
	    {
	      id:     slot.groupId,
	      start:  ($rootScope.browser.mobile) ? 
	                new Date(slot.start.datetime).getTime() / 1000 : 
	                Dater.convert.absolute(slot.start.date, slot.start.time, true),
	      end:    ($rootScope.browser.mobile) ? 
	                new Date(slot.end.datetime).getTime() / 1000 : 
	                Dater.convert.absolute(slot.end.date, slot.end.time, true),
	      recursive:  false,
	      // recursive:  slot.recursive,
	      wish:       slot.wish
	    })
	    .then(
	      function (result)
	      {
	        if (result.error)
	        {
	          $rootScope.notifier.error('Error with changing wish value.');
	          console.warn('error ->', result);
	        }
	        else
	        {
	          $rootScope.notifier.success($rootScope.ui.planboard.wishChanged);
	        };

	        $scope.timeliner.refresh();
	      }
	    );
	  };


	  /**
	   * TODO
	   * Stress-test this!
	   * 
	   * hotfix against not-dom-ready problem for timeline
	   */
	  if ($scope.timeline && $scope.timeline.main)
		{
			setTimeout(function () 
	    {
	      $scope.self.timeline.redraw();
	    }, 100);
	  }


	  /**
	   * Background sync in every 60 sec
	   */
		window.setInterval(function ()
		{
			/**
			 * Update planboard only in planboard is selected
			 */
			if ($location.path() == '/planboard')
			{
				$scope.slot = {};

				$scope.resetViews();

				// if ($scope.views.slot.add) $scope.views.slot.add = true;
				// if ($scope.views.slot.edit) $scope.views.slot.edit = true;

				$scope.timeliner.load({
				  start:  $scope.data.periods.start,
				  end:    $scope.data.periods.end
				}, true);
			}
		}, 60000);

	}
]);