define([
	'backbone',
	'hbs!tmpl/item/task_tmpl'
],
function( Backbone, TaskTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Task ItemView");
		},
		
    	template: TaskTmpl,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
