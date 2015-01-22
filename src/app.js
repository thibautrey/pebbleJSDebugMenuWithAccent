var UI = require('ui');

var myMenu = new UI.Menu({
	sections: [
		{
			title: "Section title",
			items: [
				{
					title: "Without accent but long",
					subtitle: "Subtitle is fine"
				},
				{
					title: "Accentué en français",
					subtitle: "Subtitle hidden"
				}
			]
		}
	]
});

myMenu.show();
