(function() {
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
												{text: '1/2 - 1/2', value: '[one_half]<br>Column 1<br>[/one_half]<br><br>[one_half_last]<br>Column 2<br>[/one_half_last]<br><br>'}
											]
										}
									],
									onsubmit: function(e) {
										editor.insertContent('<h' + e.data.level + ' id="' + e.data.id + '">' + e.data.title + '</h' + e.data.level + '>');
									}
								});
							}
						}
					]
				},
				{
					text: 'Menu item II',
					value: 'Text from menu item II',
					onclick: function() {
						editor.insertContent(this.value());
					},
					menu: [
						{
							text: 'First submenu item',
							value: 'Text from sub sub menu',
							onclick: function(e) {
								e.stopPropagation();
								editor.insertContent(this.value());
							}
						},
						{
							text: 'Second submenu item',
							value: 'Text from sub sub menu',
							onclick: function(e) {
								e.stopPropagation();
								editor.insertContent(this.value());
							}
						}
					]
				},
				{
					text: 'Buttons',
					value: 'Text from menu item III',
					onclick: function() {
						editor.windowManager.open({
							title: 'Insert button',
							body: [
								{
									type: 'textbox',
									name: 'title',
									label: 'Your title'
								},
								{
									type: 'textbox',
									name: 'id',
									label: 'Header anchor'
								},
								{
									type: 'listbox', 
									name: 'color', 
									label: 'Color', 
									'values': [
										{text: 'Red', value: 'red'},
										{text: 'Bittersweet', value: 'bittersweet'},
										{text: 'Coral', value: 'coral'},
										{text: 'Orange', value: 'orange'}
									]
								}
							],
							onsubmit: function( e ) {
								editor.insertContent( '<h' + e.data.level + ' id="' + e.data.id + '">' + e.data.title + '</h' + e.data.level + '>');
							}
						});
					}
				}
			]
		});
	});
})();