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
	el: '#login',

	events: {
		'submit': 'login'
	},

	login: function(e) {
		e.preventDefault();

		console.log( 'login' );
	}
});


/*=====  End of Login View  ======*/
