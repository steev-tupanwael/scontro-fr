/*=======================================
=            Global App View            =
=======================================*/

App.Views.App = Backbone.View.extend({
	initialize: function() {
		var loginView = new App.Views.Login();
	}
});

/*=====  End of Global App View  ======*/


/*==================================
=            Login View            =
==================================*/

App.Views.Login = Backbone.View.extend({
	el: '#loginForm',

	events: {
		'submit': 'login'
	},

	login: function(e) {
		e.preventDefault();

		var username = $(e.currentTarget).find('input[type=text]').val();
		var password = $(e.currentTarget).find('input[type=password]').val();
		
		var user = new App.Models.User({ username: username, password: password });
		
		Backbone.emulateHTTP = true;
		user.save();
	}
});


/*=====  End of Login View  ======*/
