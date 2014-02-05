<?php
$absolute_path = __FILE__;
$explode = explode('wp-content', $absolute_path);
$wp_root = $explode[0];
require_once($wp_root . '/wp-load.php');

$wp_url = get_option('siteurl');

if (!is_user_logged_in() || ! current_user_can('edit_posts')) {
	exit();
}

$shortcodes = array(
	'button' => array(
		'color' => array(
			'red',
			'bittersweet',
			'coral',
			'orange',
			'celery',
			'blue',
			'cerulean',
			'eastern',
			'terracotta',
			'pink',
			'cranberry',
			'sunset',
		),
		'size' => array(
			'small',
			'medium',
			'large',
		),
		'link' => '',
		'target' => array(
			'',
			'_blank',
			'_self',
			'_parent',
			'_top',
		),
	),
	'message' => array(
		'type' => array(
			'info',
			'success',
			'error',
			'warning',
		),
		'title' => '',
	),
	'columns' => array(
		'type' => array(
			'1/2 - 1/2',
			'1/3 - 1/3 - 1/3',
			'1/4 - 1/4 - 1/4 - 1/4',
			'1/3 - 2/3',
			'2/3 - 1/3',
			'1/4 - 3/4',
			'3/4 - 1/4',
			'1/4 - 1/4 - 1/2',
			'1/4 - 1/2 - 1/4',
			'1/2 - 1/4 - 1/4',
		),
	),
	'highlight' => array(
		'color' => array(
			'red',
			'green',
			'blue',
			'yellow',
			'orange',
			'gray',
			'brown',
		),
	),
	'dropcap' => array(
		'type' => array(
			'circle',
			'square',
			'none',
		),
	),
	'blockquote' => array(
		'cite' => '',
		'citelink' => '',
	),
	'pullquote' => array(
		'align' => array(
			'left',
			'right',
		),
		'cite' => '',
		'citelink' => '',
	),
);

if (defined('G7_SOCIAL')) {
	$social_type = unserialize(G7_SOCIAL);
} else {
	$social_type = array(
		'500px',
		'addthis',
		'behance',
		'blogger',
		'delicious',
		'deviantart',
		'digg',
		'dopplr',
		'dribbble',
		'evernote',
		'facebook',
		'flickr',
		'forrst',
		'github',
		'google+',
		'grooveshark',
		'instagram',
		'lastfm',
		'linkedin',
		'mail',
		'myspace',
		'path',
		'paypal',
		'picasa',
		'pinterest',
		'posterous',
		'reddit',
		'rss',
		'sharethis',
		'skype',
		'soundcloud',
		'spotify',
		'stumbleupon',
		'tumblr',
		'twitter',
		'viddler',
		'vimeo',
		'virb',
		'windows',
		'wordpress',
		'youtube',
		'zerply',
	);
}
$shortcodes['social'] = array(
	'type' => $social_type,
	'link' => '',
	'size' => array(
		'16',
		'32',
	),
	'target' => array(
		'',
		'_blank',
		'_self',
		'_parent',
		'_top',
	),
);

$nct = array('social', 'separator');
$sc = $_GET['sc'];

?><!DOCTYPE html>
<html>
<head>
<title>Insert <?php echo ucwords($sc); ?></title>
<link rel="stylesheet" href="<?php echo $wp_url; ?>/wp-includes/js/tinymce/themes/advanced/skins/wp_theme/dialog.css">
<script src="<?php echo $wp_url; ?>/wp-includes/js/tinymce/tiny_mce_popup.js"></script>
<script>
var g7_dialog = {
	local_ed: 'ed',
	init: function(ed) {
		g7_dialog.local_ed = ed;
		tinyMCEPopup.resizeToInnerSize();
	},
	insert: function insertButton(ed) {

		//tinyMCEPopup.execCommand('mceRemoveNode', false, null);

		var selection = g7_dialog.local_ed.selection.getContent();
		var output;

		<?php if ($sc == 'columns') : ?>

			var type = document.getElementById('columns-type').value;
			switch (type) {
				case '0':
					output = '[one_half]<br>Column 1<br>[/one_half]<br><br>';
					output += '[one_half_last]<br>Column 2<br>[/one_half_last]<br><br>';
					break;
				case '1':
					output = '[one_third]<br>Column 1<br>[/one_third]<br><br>';
					output += '[one_third]<br>Column 2<br>[/one_third]<br><br>';
					output += '[one_third_last]<br>Column 3<br>[/one_third_last]<br><br>';
					break;
				case '2':
					output = '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>';
					output += '[one_fourth]<br>Column 2<br>[/one_fourth]<br><br>';
					output += '[one_fourth]<br>Column 3<br>[/one_fourth]<br><br>';
					output += '[one_fourth_last]<br>Column 4<br>[/one_fourth_last]<br><br>';
					break;
				case '3':
					output = '[one_third]<br>Column 1<br>[/one_third]<br><br>';
					output += '[two_third_last]<br>Column 2<br>[/two_third_last]<br><br>';
					break;
				case '4':
					output = '[two_third]<br>Column 1<br>[/two_third]<br><br>';
					output += '[one_third_last]<br>Column 2<br>[/one_third_last]<br><br>';
					break;
				case '5':
					output = '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>';
					output += '[three_fourth_last]<br>Column 2<br>[/three_fourth_last]<br><br>';
					break;
				case '6':
					output = '[three_fourth]<br>Column 1<br>[/three_fourth]<br><br>';
					output += '[one_fourth_last]<br>Column 2<br>[/one_fourth_last]<br><br>';
					break;
				case '7':
					output = '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>';
					output += '[one_fourth]<br>Column 2<br>[/one_fourth]<br><br>';
					output += '[one_half_last]<br>Column 3<br>[/one_half_last]<br><br>';
					break;
				case '8':
					output = '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>';
					output += '[one_half]<br>Column 2<br>[/one_half]<br><br>';
					output += '[one_fourth_last]<br>Column 3<br>[/one_fourth_last]<br><br>';
					break;
				case '9':
					output = '[one_half]<br>Column 1<br>[/one_half]<br><br>';
					output += '[one_fourth]<br>Column 2<br>[/one_fourth]<br><br>';
					output += '[one_fourth_last]<br>Column 3<br>[/one_fourth_last]<br><br>';
					break;
			}
			output += '<br><br><br>';

		<?php else : ?>

			var text = '<?php echo $sc; ?> text';

			output = '[<?php echo $sc; ?>';

			<?php foreach ($shortcodes[$sc] as $attr => $value) : ?>
			var attr_val = document.getElementById('<?php echo $sc; ?>-<?php echo $attr; ?>').value;
			if (attr_val != '') {
				output += ' <?php echo $attr; ?>="' + attr_val + '"';
			}
			<?php endforeach; ?>

			<?php if (in_array($sc, $nct)) : ?>
			output += ']';
			<?php else: ?>
			if (selection) {
				output += ']' + selection + '[/<?php echo $sc; ?>]';
			} else {
				output += ']' + text + '[/<?php echo $sc; ?>]';
			}
			<?php endif; ?>

		<?php endif; ?>

		tinyMCEPopup.execCommand('mceReplaceContent', false, output);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(g7_dialog.init, g7_dialog);
</script>
<style>
#dialog { }
#dialog div { padding: 5px 0; height: 20px;}
#dialog label { display: block; float: left; margin: 3px 8px 0 0; width: 40px; }
#dialog select, #dialog input { display: block; float: right; width: 130px; padding: 3px 5px;}
#dialog select { width: 142px; }
#dialog #insert { display: block; line-height: 24px; text-align: center; margin: 10px 0 0;}
</style>
</head>
<body>
	<div id="dialog">
		<?php foreach ($shortcodes[$sc] as $attr => $value) : ?>
		<div>
			<label for="<?php echo $sc; ?>-<?php echo $attr; ?>"><?php echo ucwords($attr); ?>:</label>
			<?php if (is_array($value)) : ?>
			<select id="<?php echo $sc; ?>-<?php echo $attr; ?>">
				<?php foreach ($value as $k2 => $v2) : ?>
				<?php $option_value = ($sc == 'columns') ? $k2 : $v2; ?>
				<option value="<?php echo $option_value; ?>"><?php echo $v2; ?></option>
				<?php endforeach; ?>
			</select>
			<?php else : ?>
			<input type="text" id="<?php echo $sc; ?>-<?php echo $attr; ?>" value="<?php echo $value; ?>">
			<?php endif; ?>
		</div>
		<?php endforeach; ?>
		<div>
			<a href="javascript:g7_dialog.insert(g7_dialog.local_ed)" id="insert">Insert</a>
		</div>
	</div>
</body>
</html>