define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
    url: "/api/v1/tasks",
    
		initialize: function() {
		}
	});
});
