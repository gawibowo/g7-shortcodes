(function ($) {
	/**
	 * tabs plugin
	 */
	if (!$.fn.g7_tabs) {
		$.fn.g7_tabs = function() {
			return this.each(function() {
				//Get all tabs
				var tab = $(this).find('> li > a');
				var active_tab = $(this).find('> li:first > a');
				tab.click(function(e) {
					//Get Location of tab's content
					var contentLocation = $(this).attr('href');
					//Let go if not a hashed one
					if (contentLocation.charAt(0)=="#") {
						e.preventDefault();
						//Make Tab Active
						tab.removeClass('active');
						$(this).addClass('active');
						//Show Tab Content & add active class
						$(contentLocation)
							.show()
							.addClass('active')
							.siblings()
								.hide()
								.removeClass('active');
					}
				});
				active_tab.click();
			});
		};
	}

    /**
     * accordion plugin
     */
	if (!$.fn.g7_accordion) {
		$.fn.g7_accordion = function() {
			return this.each(function() {
				var dd_width = $(this).width() - 20;
				var all_dt = $(this).find('> dt');
				var all_dd = $(this).find('> dd');
				var found = $(this).find('> dt.active');
				if (found.length == 0) {
					var active_dt = $(this).find('> dt:first');
				} else {
					var active_dt = found;
				}
				all_dd.width(dd_width); //fix animation jump
				all_dt.click(function() {
					var target_dd = $(this).next();
					if (!target_dd.hasClass('active')) {
						target_dd
							.slideDown()
							.addClass('active')
							.siblings('dd')
								.slideUp()
								.removeClass('active');
						$(this)
							.addClass('active')
							.siblings('dt')
								.removeClass('active');
					}
				});
				active_dt.click();
			});
		};
	}

    /**
     * toggle plugin
     */
	if (!$.fn.g7_toggle) {
		$.fn.g7_toggle = function() {
			return this.each(function() {
				var dd_width = $(this).width() - 10;
				var dt = $(this).find('> dt');
				var dd = $(this).find('> dd');
				dd.width(dd_width).hide();
				dt.click(function() {
					var dt_active = dt.hasClass('active');
					if (dt_active) {
						dd.slideUp();
						dt.removeClass('active');
					} else {
						dd.slideDown();
						dt.addClass('active');
					}
				});
			});
		};
	}

	$(function() {
		/**
		 * activate accordion, toggle and tabs
		 */
		$('.g7-accordion').g7_accordion();
		$('.g7-toggle').g7_toggle();
		$('.g7-tabs').g7_tabs();

		/**
		 * close action for message boxes
		 */
		$('.g7-msg').click(function() {
			var msgbox = $(this);
			msgbox.fadeTo('slow', 0);
			msgbox.slideUp(341);
		});
	});

})(jQuery);
