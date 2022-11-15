module.exports = {
	application: {
		url: "https://indiekit.lucascherkewski.com",
		mongodbUrl: process.env.MONGO_URL,
	},
	plugins: [
		"@indiekit/preset-jekyll",
		"@indiekit/store-github",
		"@indiekit/syndicator-mastodon",
	],
	publication: {
		me: "https://lucascherkewski.com",
		postTypes: [{
			type: "bookmark",
			name: "Link",
			post: {
				path: "_links/{yyyy}-{MM}-{dd}-{slug}.md",
				url: "links/{yyyy}/{MM}/{dd}/{slug}/"
			}
		}],
		timeZone: "America/Toronto",
	},
	"@indiekit/store-github": {
		user: "lchski",
		repo: "lucascherkewski.com",
		branch: "master",
	},
	"@indiekit/syndicator-mastodon": {
		checked: false,
		forced: false,
		url: "https://mastodon.social",
		user: "lchski",
	},
};
