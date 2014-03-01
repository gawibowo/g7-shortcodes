<?php
/*
Plugin Name: G7 Shortcodes
Plugin URI: http://gawibowo.com/plugins/g7-shortcodes
Description: Shortcodes generator.
Version: 1.1
Author: gawibowo
Author URI: http://gawibowo.com
*/

class G7_Shortcodes {

	var $buttons;
	var $url;
	var $path;

	function __construct() {
		$this->url = plugin_dir_url(__FILE__);
		$this->path = plugin_dir_path(__FILE__);
		require_once $this->path . 'shortcodes.php';
		add_action('init', array(&$this, 'init'));
	}

	function init() {
		if (!is_admin()) {
			wp_enqueue_style('g7-shortcodes', $this->url . 'shortcodes.css');
			wp_enqueue_script('g7-shortcodes', $this->url . 'shortcodes.js', array('jquery'), false, true);
		}
		if (current_user_can('edit_posts') && get_user_option('rich_editing')) {
			add_filter('mce_external_plugins', array(&$this, 'add_plugin'));
			add_filter('mce_buttons', array(&$this, 'register_button'));
		}
	}

	function add_plugin($plugin_array) {
		$plugin_array['g7_button'] = $this->url . 'buttons.js';
		return $plugin_array;
	}

	function register_button($buttons) {
		$buttons[] = 'separator';
		$buttons[] = 'sc_button';
		return $buttons;
	}
}

$g7_shortcodes = new G7_Shortcodes;
