const ghpages = require('gh-pages');

ghpages.publish(
	'docs',
	{
		repo: 'https://github.com/PnW1/simply-memoirs-frontend',
		message: 'https://github.com/PnW1/simply-memoirs-frontend',
		user: {
			name: 'salgum1114',
			email: 'salgum1112@gmail.com',
		},
	},
	function(err) {
		if (err) {
			console.error(err);
		} else {
			console.log('https://github.com/PnW1/simply-memoirs-frontend');
		}
	},
);
