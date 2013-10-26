define([
	'backbone',
	'hbs!tmpl/item/task_tmpl'
],
function( Backbone, TaskTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
      _.bindAll(this, "changeFinished");
      this.changeFinished();
      this.model.on('sync', this.changeFinished);
		},
		
    	template: TaskTmpl,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
      "click" : "onClickTask"
    },

    onClickTask: function(event) {
      if(this.model.get('finished')){
        this.model.save({"finished": false})
      } else {
        this.model.save({"finished" : true});
      }
    },

    changeFinished: function() {
      if(this.model.get('finished')){
        this.$el.attr('style', 'text-decoration: line-through;')
      } else {
        this.$el.attr('style', 'text-decoration: none;')
      }
    },

		/* on render callback */
		onRender: function() {}
	});

});
