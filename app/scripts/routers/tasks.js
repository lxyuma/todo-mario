define([
	'backbone'
],
function(Backbone){
    'use strict';

	return Backbone.Router.extend({
    initialize: function(options) {
      this.collection = options.collection;
    },
		/* Backbone routes hash */
		routes: {
      "all"      : "all",
      "finished" : "finished"
    },
    all : function(){
      this.collection.fetch();
    },
    finished : function(){
      this.collection.fetch({data:{conditions:'{"finished":true}'}});
    }
	});
});
