(function() {
	tinymce.create('tinymce.plugins.shortcodes_button', {

		init: function(ed, url) {
			tinymce.plugins.shortcodes_button.tinymce_url = url;
		},

		createControl: function(n, cm) {

			if (n == 'sc_button') {

				var a = this;
				var c = cm.createMenuButton('sc_button', {
					title: 'Shortcodes',
					image: tinymce.plugins.shortcodes_button.tinymce_url + '/images/add.png'
				});

				c.onRenderMenu.add(function(c, m) {

					/* columns
					-------------------------------------------------------------------------------*/
					c = m.addMenu({
						title: 'Columns'
					});
					a.addItem(c, '2 columns', '[one_half]<br>Column 1<br>[/one_half]<br><br>[one_half_last]<br>Column 2<br>[/one_half_last]<br><br>');
					a.addItem(c, '3 columns', '[one_third]<br>Column 1<br>[/one_third]<br><br>[one_third]<br>Column 2<br>[/one_third]<br><br>[one_third_last]<br>Column 3<br>[/one_third_last]<br><br>');
					a.addItem(c, '4 columns', '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>[one_fourth]<br>Column 2<br>[/one_fourth]<br><br>[one_fourth]<br>Column 3<br>[/one_fourth]<br><br>[one_fourth_last]<br>Column 4<br>[/one_fourth_last]<br><br>');
					a.addItemDialog(c, 'more...', 'columns', 240, 100);

					/* buttons
					-------------------------------------------------------------------------------*/
					a.addItemDialog(m, 'Buttons', 'button', 240, 180);

					/* lists
					-------------------------------------------------------------------------------*/
					c = m.addMenu({
						title: 'Lists'
					});
					var lists = '<ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>';
					a.addItem(c, 'bullet', '[list type="bullet"]' + lists + '[/list]<br><br>');
					a.addItem(c, 'tick', '[list type="tick"]' + lists + '[/list]<br><br>');
					a.addItem(c, 'cross', '[list type="cross"]' + lists + '[/list]<br><br>');
					a.addItem(c, 'plus', '[list type="plus"]' + lists + '[/list]<br><br>');

					/* message boxes
					-------------------------------------------------------------------------------*/
					a.addItemDialog(m, 'Message Boxes', 'message', 240, 125);

					/* dropcaps
					-------------------------------------------------------------------------------*/
					a.addItemDialog(m, 'Dropcaps', 'dropcap', 240, 100);

					/* highlights
					-------------------------------------------------------------------------------*/
					a.addItemDialog(m, 'Highlights', 'highlight', 240, 100);

					/* separator
					-------------------------------------------------------------------------------*/
					c = m.addMenu({
						title: 'Separator'
					});
					a.addItem(c, 'separator', '[separator]<br><br>');
					a.addItem(c, 'hidden', '[space height="20"]<br><br>');

					/* blockquotes
					-------------------------------------------------------------------------------*/
					c = m.addMenu({
						title: 'Quotes'
					});
					a.addItemDialog(c, 'Blockquote', 'blockquote', 240, 125);
					a.addItemDialog(c, 'Pullquote', 'pullquote', 240, 150);

					/* accordion
					-------------------------------------------------------------------------------*/
					a.addItem(m, 'Accordion', '[accordion]<br><br>[section title="Title 1"]Content 1[/section]<br>[section title="Title 2"]Content 2[/section]<br>[section title="Title 3"]Content 3[/section]<br><br>[/accordion]<br><br>');

					/* toggle
					-------------------------------------------------------------------------------*/
					a.addItem(m, 'Toggle', '[toggle title="Title"]<br>Content<br>[/toggle]<br><br>');

					/* tabs
					-------------------------------------------------------------------------------*/
					a.addItem(m, 'Tabs', '[tabs]<br><br>[tab title="Title 1"]Content 1[/tab]<br>[tab title="Title 2"]Content 2[/tab]<br>[tab title="Title 3"]Content 3[/tab]<br><br>[/tabs]<br><br>');

					/* code
					-------------------------------------------------------------------------------*/
					a.addItem(m, 'Code', '[code]<br>Insert code here<br>[/code]<br>');

					/* social
					-------------------------------------------------------------------------------*/
					a.addItemDialog(m, 'Social Icons', 'social', 240, 180);

				});

				// Return the new splitbutton instance
				return c;
			}

			return null;
		},

		addItem: function(m, title, content) {
			m.add({
				title: title,
				onclick: function() {
					//tinyMCE.activeEditor.selection.setContent(content);
					tinyMCE.execCommand('mceReplaceContent', false, content);
				}
			});
		},

		addItemDialog: function(m, title, id, w, h) {
			m.add({
				title: title,
				onclick: function() {
					tinyMCE.activeEditor.windowManager.open({
						file: tinymce.plugins.shortcodes_button.tinymce_url + '/dialog.php?sc=' + id,
						width: w,
						height: h,
						inline: 1
					});
				}
			});
		}

	});
	tinymce.PluginManager.add('g7_button', tinymce.plugins.shortcodes_button);
})();