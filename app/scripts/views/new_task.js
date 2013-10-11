define([
	'backbone',
  'communicator'
],
function(Backbone, Communicator){
    'use strict';

	return Backbone.View.extend({
    el: "#new-todo",
    events: {
      "keypress": "postTask"
    },
		initialize: function() {
			console.log("initialize a NewTask View");
		},
    postTask: function(event){
      if(event.keyCode == 13){
        Communicator.command.execute('createTask', this.$el.val())
        this.$el.val('')
      }
    }
	});
});
