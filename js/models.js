App.Models.User = Backbone.Model.extend({
	defaults: {
		username: '',
		password: null,
		consumer_key: "8f4ceacdc253b071ee22ae22b347d756c8136583",
		access_token: "5147276c54b81f8ac9dc959b802dce3c32fbcc55"
	},

	urlRoot: '../engine/'
});