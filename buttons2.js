(function($) {
	tinymce.PluginManager.add('g7_button', function(editor, url) {
		editor.addButton('sc_button', {
			title: 'Shortcodes',
			type: 'menubutton',
			icon: 'wp_code',
			menu: [
				{
					text: 'Columns',
					menu: [
						{
							text: '2 columns',
							onclick: function() {
								editor.insertContent('[one_half]<br>Column 1<br>[/one_half]<br><br>[one_half_last]<br>Column 2<br>[/one_half_last]<br><br>');
							}
						},
						{
							text: '3 columns',
							onclick: function() {
								editor.insertContent('[one_third]<br>Column 1<br>[/one_third]<br><br>[one_third]<br>Column 2<br>[/one_third]<br><br>[one_third_last]<br>Column 3<br>[/one_third_last]<br><br>');
							}
						},
						{
							text: '4 columns',
							onclick: function() {
								editor.insertContent('[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>[one_fourth]<br>Column 2<br>[/one_fourth]<br><br>[one_fourth]<br>Column 3<br>[/one_fourth]<br><br>[one_fourth_last]<br>Column 4<br>[/one_fourth_last]<br><br>');
							}
						},
						{
							text: 'more...',
							onclick: function() {
								editor.windowManager.open({
									title: 'Insert columns',
									body: [
										{
											type: 'listbox',
											name: 'type',
											label: 'Type',
											values: [
												{
													text: '1/2 - 1/2',
													value: '[one_half]<br>Column 1<br>[/one_half]<br><br>' +
													'[one_half_last]<br>Column 2<br>[/one_half_last]<br><br>'
												},
												{
													text: '1/3 - 1/3 - 1/3',
													value: '[one_third]<br>Column 1<br>[/one_third]<br><br>' +
													'[one_third]<br>Column 2<br>[/one_third]<br><br>' +
													'[one_third_last]<br>Column 3<br>[/one_third_last]<br><br>'
												},
												{
													text: '1/4 - 1/4 - 1/4 - 1/4',
													value: '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>' +
													'[one_fourth]<br>Column 2<br>[/one_fourth]<br><br>' +
													'[one_fourth]<br>Column 3<br>[/one_fourth]<br><br>' +
													'[one_fourth_last]<br>Column 4<br>[/one_fourth_last]<br><br>'
												},
												{
													text: '1/3 - 2/3',
													value: '[one_third]<br>Column 1<br>[/one_third]<br><br>' +
													'[two_third_last]<br>Column 2<br>[/two_third_last]<br><br>'
												},
												{
													text: '2/3 - 1/3',
													value: '[two_third]<br>Column 1<br>[/two_third]<br><br>' +
													'[one_third_last]<br>Column 2<br>[/one_third_last]<br><br>'
												},
												{
													text: '1/4 - 3/4',
													value: '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>' +
													'[three_fourth_last]<br>Column 2<br>[/three_fourth_last]<br><br>'
												},
												{
													text: '3/4 - 1/4',
													value: '[three_fourth]<br>Column 1<br>[/three_fourth]<br><br>' +
													'[one_fourth_last]<br>Column 2<br>[/one_fourth_last]<br><br>'
												},
												{
													text: '1/4 - 1/4 - 1/2',
													value: '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>' +
													'[one_fourth]<br>Column 2<br>[/one_fourth]<br><br>' +
													'[one_half_last]<br>Column 3<br>[/one_half_last]<br><br>'
												},
												{
													text: '1/4 - 1/2 - 1/4',
													value: '[one_fourth]<br>Column 1<br>[/one_fourth]<br><br>' +
													'[one_half]<br>Column 2<br>[/one_half]<br><br>' +
													'[one_fourth_last]<br>Column 3<br>[/one_fourth_last]<br><br>'
												},
												{
													text: '1/2 - 1/4 - 1/4',
													value: '[one_half]<br>Column 1<br>[/one_half]<br><br>' +
													'[one_fourth]<br>Column 2<br>[/one_fourth]<br><br>' +
													'[one_fourth_last]<br>Column 3<br>[/one_fourth_last]<br><br>'
												}
											]
										}
									],
									onsubmit: function(e) {
										editor.insertContent(e.data.type);
									}
								});
							}
						}
					]
				},
				{
					text: 'Buttons',
					onclick: function() {
						var teks = editor.selection.getContent({format: 'text'});
						editor.windowManager.open({
							title: 'Insert button',
							body: [
								{
									type: 'listbox',
									name: 'color',
									label: 'Color',
									values: [
										{text: 'red', value: 'red'},
										{text: 'bittersweet', value: 'bittersweet'},
										{text: 'coral', value: 'coral'},
										{text: 'orange', value: 'orange'},
										{text: 'celery', value: 'celery'},
										{text: 'Blue', value: 'blue'},
										{text: 'cerulean', value: 'cerulean'},
										{text: 'eastern', value: 'eastern'},
										{text: 'terracotta', value: 'terracotta'},
										{text: 'pink', value: 'pink'},
										{text: 'cranberry', value: 'cranberry'},
										{text: 'sunset', value: 'sunset'}
									]
								},
								{
									type: 'listbox',
									name: 'size',
									label: 'Size',
									values: [
										{text: 'small', value: 'small'},
										{text: 'medium', value: 'medium'},
										{text: 'large', value: 'large'}
									]
								},
								{
									type: 'textbox',
									name: 'link',
									label: 'Link'
								},
								{
									type: 'listbox',
									name: 'target',
									label: 'Target',
									values: [
										{text: '', value: ''},
										{text: '_blank', value: '_blank'},
										{text: '_self', value: '_self'},
										{text: '_parent', value: '_parent'},
										{text: '_top', value: '_top'}
									]
								}
							],
							onsubmit: function(e) {
								var shortcode = '[button';
								$.each(e.data, function(index, val) {
									if (typeof val !== 'undefined') {
										if (val) {
											shortcode += ' ' + index + '="' + val + '"';
										}
									}
								});
								shortcode += ']';
								if (teks) {
									shortcode += teks;
								} else {
									shortcode += 'button text';
								}
								shortcode += '[/button]';
								editor.insertContent(shortcode);
							}
						});
					}
				},
				{
					text: 'Lists',
					menu: [
						{
							text: 'bullet',
							onclick: function() {
								var lists = '<ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>';
								editor.insertContent('[list type="bullet"]' + lists + '[/list]<br><br>');
							}
						},
						{
							text: 'tick',
							onclick: function() {
								var lists = '<ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>';
								editor.insertContent('[list type="tick"]' + lists + '[/list]<br><br>');
							}
						},
						{
							text: 'cross',
							onclick: function() {
								var lists = '<ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>';
								editor.insertContent('[list type="cross"]' + lists + '[/list]<br><br>');
							}
						},
						{
							text: 'plus',
							onclick: function() {
								var lists = '<ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>';
								editor.insertContent('[list type="plus"]' + lists + '[/list]<br><br>');
							}
						}
					]
				},
				{
					text: 'Message Boxes',
					onclick: function() {
						var teks = editor.selection.getContent({format: 'text'});
						editor.windowManager.open({
							title: 'Insert message box',
							body: [
								{
									type: 'listbox',
									name: 'type',
									label: 'Type',
									values: [
										{text: 'info', value: 'info'},
										{text: 'success', value: 'success'},
										{text: 'error', value: 'error'},
										{text: 'warning', value: 'warning'}
									]
								},
								{
									type: 'textbox',
									name: 'title',
									label: 'Title'
								}
							],
							onsubmit: function(e) {
								var shortcode = '[message';
								$.each(e.data, function(index, val) {
									if (typeof val !== 'undefined') {
										if (val) {
											shortcode += ' ' + index + '="' + val + '"';
										}
									}
								});
								shortcode += ']';
								if (teks) {
									shortcode += teks;
								} else {
									shortcode += 'message text';
								}
								shortcode += '[/message]';
								editor.insertContent(shortcode);
							}
						});
					}
				},
				{
					text: 'Dropcaps',
					onclick: function() {
						var teks = editor.selection.getContent({format: 'text'});
						editor.windowManager.open({
							title: 'Insert dropcap',
							body: [
								{
									type: 'listbox',
									name: 'type',
									label: 'Type',
									values: [
										{text: 'circle', value: 'circle'},
										{text: 'square', value: 'square'},
										{text: 'none', value: 'none'}
									]
								}
							],
							onsubmit: function(e) {
								var shortcode = '[dropcap';
								$.each(e.data, function(index, val) {
									if (typeof val !== 'undefined') {
										if (val) {
											shortcode += ' ' + index + '="' + val + '"';
										}
									}
								});
								shortcode += ']';
								if (teks) {
									shortcode += teks;
								} else {
									shortcode += 'A';
								}
								shortcode += '[/dropcap]';
								editor.insertContent(shortcode);
							}
						});
					}
				},
				{
					text: 'Highlights',
					onclick: function() {
						var teks = editor.selection.getContent({format: 'text'});
						editor.windowManager.open({
							title: 'Insert highlight',
							body: [
								{
									type: 'listbox',
									name: 'color',
									label: 'Color',
									values: [
										{text: 'red', value: 'red'},
										{text: 'green', value: 'green'},
										{text: 'blue', value: 'blue'},
										{text: 'yellow', value: 'yellow'},
										{text: 'orange', value: 'orange'},
										{text: 'gray', value: 'gray'},
										{text: 'brown', value: 'brown'}
									]
								}
							],
							onsubmit: function(e) {
								var shortcode = '[highlight';
								$.each(e.data, function(index, val) {
									if (typeof val !== 'undefined') {
										if (val) {
											shortcode += ' ' + index + '="' + val + '"';
										}
									}
								});
								shortcode += ']';
								if (teks) {
									shortcode += teks;
								} else {
									shortcode += 'highlighted text';
								}
								shortcode += '[/highlight]';
								editor.insertContent(shortcode);
							}
						});
					}
				},
				{
					text: 'Separator',
					menu: [
						{
							text: 'separator',
							onclick: function() {
								editor.insertContent('[separator]<br><br>');
							}
						},
						{
							text: 'hidden',
							onclick: function() {
								editor.insertContent('[space height="20"]<br><br>');
							}
						}
					]
				},
				{
					text: 'Quotes',
					menu: [
						{
							text: 'blockquote',
							onclick: function() {
								var teks = editor.selection.getContent({format: 'text'});
								editor.windowManager.open({
									title: 'Insert highlight',
									body: [
										{
											type: 'textbox',
											name: 'cite',
											label: 'Cite'
										},
										{
											type: 'textbox',
											name: 'citelink',
											label: 'Cite Link'
										}
									],
									onsubmit: function(e) {
										var shortcode = '[blockquote';
										$.each(e.data, function(index, val) {
											if (typeof val !== 'undefined') {
												if (val) {
													shortcode += ' ' + index + '="' + val + '"';
												}
											}
										});
										shortcode += ']';
										if (teks) {
											shortcode += teks;
										} else {
											shortcode += 'blockquote text';
										}
										shortcode += '[/blockquote]';
										editor.insertContent(shortcode);
									}
								});
							}
						},
						{
							text: 'pullquote',
							onclick: function() {
								var teks = editor.selection.getContent({format: 'text'});
								editor.windowManager.open({
									title: 'Insert highlight',
									body: [
										{
											type: 'listbox',
											name: 'align',
											label: 'Align',
											values: [
												{text: 'left', value: 'left'},
												{text: 'right', value: 'right'}
											]
										},
										{
											type: 'textbox',
											name: 'cite',
											label: 'Cite'
										},
										{
											type: 'textbox',
											name: 'citelink',
											label: 'Cite Link'
										}
									],
									onsubmit: function(e) {
										var shortcode = '[pullquote';
										$.each(e.data, function(index, val) {
											if (typeof val !== 'undefined') {
												if (val) {
													shortcode += ' ' + index + '="' + val + '"';
												}
											}
										});
										shortcode += ']';
										if (teks) {
											shortcode += teks;
										} else {
											shortcode += 'pullquote text';
										}
										shortcode += '[/pullquote]';
										editor.insertContent(shortcode);
									}
								});
							}
						}
					]
				},
				{
					text: 'Accordion',
					onclick: function() {
						editor.insertContent('[accordion]<br><br>[section title="Title 1"]Content 1[/section]<br>[section title="Title 2"]Content 2[/section]<br>[section title="Title 3"]Content 3[/section]<br><br>[/accordion]<br><br>');
					}
				},
				{
					text: 'Toggle',
					onclick: function() {
						editor.insertContent('[toggle title="Title"]<br>Content<br>[/toggle]<br><br>');
					}
				},
				{
					text: 'Tabs',
					onclick: function() {
						editor.insertContent('[tabs]<br><br>[tab title="Title 1"]Content 1[/tab]<br>[tab title="Title 2"]Content 2[/tab]<br>[tab title="Title 3"]Content 3[/tab]<br><br>[/tabs]<br><br>');
					}
				},
				{
					text: 'Code',
					onclick: function() {
						editor.insertContent('[code]<br>Insert code here<br>[/code]<br>');
					}
				},
				{
					text: 'Social Icons',
					onclick: function() {
						var teks = editor.selection.getContent({format: 'text'});
						editor.windowManager.open({
							title: 'Insert highlight',
							body: [
								{
									type: 'listbox',
									name: 'type',
									label: 'Type',
									values: [
										{text: '500px', value: '500px'},
										{text: 'addthis', value: 'addthis'},
										{text: 'behance', value: 'behance'},
										{text: 'blogger', value: 'blogger'},
										{text: 'delicious', value: 'delicious'},
										{text: 'deviantart', value: 'deviantart'},
										{text: 'digg', value: 'digg'},
										{text: 'dopplr', value: 'dopplr'},
										{text: 'dribbble', value: 'dribbble'},
										{text: 'evernote', value: 'evernote'},
										{text: 'facebook', value: 'facebook'},
										{text: 'flickr', value: 'flickr'},
										{text: 'forrst', value: 'forrst'},
										{text: 'github', value: 'github'},
										{text: 'google+', value: 'google+'},
										{text: 'grooveshark', value: 'grooveshark'},
										{text: 'instagram', value: 'instagram'},
										{text: 'lastfm', value: 'lastfm'},
										{text: 'linkedin', value: 'linkedin'},
										{text: 'mail', value: 'mail'},
										{text: 'myspace', value: 'myspace'},
										{text: 'path', value: 'path'},
										{text: 'paypal', value: 'paypal'},
										{text: 'picasa', value: 'picasa'},
										{text: 'pinterest', value: 'pinterest'},
										{text: 'posterous', value: 'posterous'},
										{text: 'reddit', value: 'reddit'},
										{text: 'rss', value: 'rss'},
										{text: 'sharethis', value: 'sharethis'},
										{text: 'skype', value: 'skype'},
										{text: 'soundcloud', value: 'soundcloud'},
										{text: 'spotify', value: 'spotify'},
										{text: 'stumbleupon', value: 'stumbleupon'},
										{text: 'tumblr', value: 'tumblr'},
										{text: 'twitter', value: 'twitter'},
										{text: 'viddler', value: 'viddler'},
										{text: 'vimeo', value: 'vimeo'},
										{text: 'virb', value: 'virb'},
										{text: 'windows', value: 'windows'},
										{text: 'wordpress', value: 'wordpress'},
										{text: 'youtube', value: 'youtube'},
										{text: 'zerply', value: 'zerply'}
									]
								},
								{
									type: 'textbox',
									name: 'link',
									label: 'Link'
								},
								{
									type: 'listbox',
									name: 'size',
									label: 'Size',
									values: [
										{text: '16', value: '16'},
										{text: '32', value: '32'}
									]
								},
								{
									type: 'listbox',
									name: 'target',
									label: 'Target',
									values: [
										{text: '', value: ''},
										{text: '_blank', value: '_blank'},
										{text: '_self', value: '_self'},
										{text: '_parent', value: '_parent'},
										{text: '_top', value: '_top'}
									]
								}
							],
							onsubmit: function(e) {
								var shortcode = '[social';
								$.each(e.data, function(index, val) {
									if (typeof val !== 'undefined') {
										if (val) {
											shortcode += ' ' + index + '="' + val + '"';
										}
									}
								});
								shortcode += ']';
								editor.insertContent(shortcode);
							}
						});
					}
				}
			]
		});
	});
})(jQuery);