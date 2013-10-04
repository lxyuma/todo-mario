define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
    urlRoot: "/api/v1/tasks",
		initialize: function() {
			console.log("initialize a Task model");
		},

		defaults: {},

    });
});
