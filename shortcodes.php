<?php
add_filter('widget_text', 'do_shortcode');

/**
 * Clean up Shortcodes
 */
function g7_clean_shortcodes($content){
    $array = array (
        '<p>[' => '[',
        ']</p>' => ']',
        ']<br />' => ']'
    );
    $content = strtr($content, $array);
    return $content;
}
add_filter('the_content', 'g7_clean_shortcodes');

/**
 * Button
 */
function g7_button($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'color' => 'white',
			'size' => 'small',
			'link' => ''
		),
		$atts
	);
	return sprintf(
		'<a class="btn %s %s" href="%s">%s</a>',
		$atts['color'],
		$atts['size'],
		$atts['link'],
		$content
	);
}

/**
 * Blockquote
 */
function g7_blockquote($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'cite' => '',
			'citelink' => ''
		),
		$atts
	);
	return sprintf(
		'<blockquote>%s%s</blockquote>',
		$content,
		$atts['cite'] ? '<cite>' . $atts['cite'] . ($atts['citelink'] ? ', <a href="' . $atts['citelink'] . '">' . $atts['citelink'] . '</a>' : '') . '</cite>' : ''
	);
}

/**
 * Pullquote
 */
function g7_pullquote($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'align' => 'left',
			'cite' => '',
			'citelink' => '',
		),
		$atts
	);
	return sprintf(
		'<blockquote class="pullquote %s">%s%s</blockquote>',
		$atts['align'],
		$content,
		$atts['cite'] ? '<cite>' . $atts['cite'] . ($atts['citelink'] ? ', <a href="' . $atts['citelink'] . '">' . $atts['citelink'] . '</a>' : '') . '</cite>' : ''
	);
}

/**
 * List
 */
function g7_list($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'type' => 'bullet'
		),
		$atts
	);
	return sprintf(
		'<div class="%s">%s</div>',
		$atts['type'],
		$content
	);
}

/**
 * Message Box
 */
function g7_message($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'type' => 'info',
			'title' => ''
		),
		$atts
	);
	return sprintf(
		'<div class="%s msg">%s<div>%s</div></div>',
		$atts['type'],
		empty($atts['title']) ? '' : "<h3>$atts[title]</h3>",
		do_shortcode($content)
	);
}

/**
 * Tabs
 */
function g7_tabs($atts, $content = null) {
	$GLOBALS['tab_count'] = 0;
	do_shortcode($content);

	if (is_array($GLOBALS['tabs'])) {
		foreach ($GLOBALS['tabs'] as $tab) {
			$tabs[] = '<li><a href="#'.$tab['id'].'">' . $tab['title'] . '</a></li>';
			$panes[] = '<li id="'.$tab['id'].'">' . $tab['content'] . '</li>';
		}
		$out = "\n" . '<ul class="tabs">' . implode("\n", $tabs) . '</ul>';
		$out .= "\n" . '<ul class="tabs-content">' . implode("\n", $panes) . '</ul>' . "\n";
	}
	return $out;
}

function g7_tab($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'title' => '',
			'id' => 'tab-%d'
		),
		$atts
	);

	$x = $GLOBALS['tab_count'];
	$GLOBALS['tabs'][$x] = array(
		'title' => $atts['title'],
		'content' => do_shortcode($content),
		'id' => sprintf($atts['id'], $GLOBALS['tab_count'])
	);

	$GLOBALS['tab_count']++;
}

/**
 * Accordion
 */
function g7_accordion($atts, $content = null) {
	return '<dl class="accordion">' . do_shortcode($content) . '</dl>';
}

function g7_section($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'title' => '',
			'state' => 'closed'
		),
		$atts
	);
	return sprintf('
		<dt%s>%s</dt>
		<dd>%s</dd>',
		$atts['state'] == 'open' ? ' class="active"' : '',
		$atts['title'],
		do_shortcode($content)
	);
}

/**
 * Toggle
 */
function g7_toggle($atts, $content = null) {
	$atts = shortcode_atts(
		array('title' => ''),
		$atts
	);
	$section = sprintf(
		'[section title="%s"]%s[/section]',
		$atts['title'],
		$content
	);
	return '<dl class="toggle">' . do_shortcode($section) . '</dl>';
}

/**
 * Columns
 */
function g7_columns($atts, $content = null, $tag = '') {
	$last = strpos($tag, '_last');
	$tag = str_replace('_last', ' last', $tag);
	$out = '<div class="' . $tag . '">' . do_shortcode($content) . '</div>';
	if ($last !== false) {
		$out .= '<div class="clear"></div>';
	}
	return $out;
}

/**
 * Separator
 */
function g7_separator($atts, $content = null, $tag = '') {
	return sprintf(
		'<div class="%s"></div>',
		$tag
	);
}

/**
 * Space
 */
function g7_space($atts, $content = null, $tag = '') {
	$atts = shortcode_atts(
		array(
			'height' => '20'
		),
		$atts
	);
	return sprintf(
		'<div class="clear" style="height:%spx"></div>',
		$atts['height']
	);
}

/**
 * Code
 */
function g7_code($atts, $content = null) {
	$content = htmlspecialchars($content);
	$content = str_replace('[', '<span class="sc">[</span>', $content);
	$content = str_replace(']', '<span class="sc">]</span>', $content);
	return sprintf(
		'<div class="code"><pre>%s</pre></div>',
		$content
	);
}

/**
 * Social
 */
function g7_social($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'type' => '',
			'link' => '',
			'size' => '16'
		),
		$atts
	);
	return sprintf(
		'<a class="social" href="%s"><img src="%s/images/social/%spx/%s.png" alt="%s"></a>',
		$atts['link'],
		PARENT_URL,
		$atts['size'],
		$atts['type'],
		$atts['type']
	);
}

/**
 * Dropcap
 */
function g7_dropcap($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'type' => ''
		),
		$atts
	);
	return sprintf(
		'<span class="dropcap%s">%s</span>',
		$atts['type'] ? ' ' . $atts['type'] : '',
		$content
	);
}

/**
 * Highlight
 */
function g7_highlight($atts, $content = null) {
	$atts = shortcode_atts(
		array(
			'color' => 'red'
		),
		$atts
	);
	return sprintf(
		'<span class="highlight %s">%s</span>',
		$atts['color'],
		$content
	);
}


add_shortcode('button', 'g7_button');
add_shortcode('blockquote', 'g7_blockquote');
add_shortcode('pullquote', 'g7_pullquote');
add_shortcode('list', 'g7_list');
add_shortcode('message', 'g7_message');
add_shortcode('tabs', 'g7_tabs');
add_shortcode('tab', 'g7_tab');
add_shortcode('accordion', 'g7_accordion');
add_shortcode('section', 'g7_section');
add_shortcode('toggle', 'g7_toggle');
add_shortcode('one_fourth', 'g7_columns');
add_shortcode('one_half', 'g7_columns');
add_shortcode('one_third', 'g7_columns');
add_shortcode('two_third', 'g7_columns');
add_shortcode('three_fourth', 'g7_columns');
add_shortcode('one_fourth_last', 'g7_columns');
add_shortcode('one_half_last', 'g7_columns');
add_shortcode('one_third_last', 'g7_columns');
add_shortcode('two_third_last', 'g7_columns');
add_shortcode('three_fourth_last', 'g7_columns');
add_shortcode('separator', 'g7_separator');
add_shortcode('space', 'g7_space');
add_shortcode('code', 'g7_code');
add_shortcode('social', 'g7_social');
add_shortcode('dropcap', 'g7_dropcap');
add_shortcode('highlight', 'g7_highlight');
