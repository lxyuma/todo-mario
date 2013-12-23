define([
  'backbone',
  'hbs!tmpl/item/task_tmpl'
],
function( Backbone, TaskTmpl  ) {
    'use strict';

  /* Return a ItemView class definition */
  return Backbone.Marionette.ItemView.extend({
    tagName: "li",

    initialize: function() {
      this.changeFinishedStyle();
      this.listenTo(this.model, 'sync', this.changeFinishedStyle);
    },
    template: TaskTmpl,

    /* Ui events hash */
    events: {
      "click" : "onClick"
    },

    onClick: function(event) {
      if(this.model.get('finished')){
        this.model.destroy();
      } else {
        this.model.save({"finished" : true});
      }
    },

    changeFinishedStyle: function() {
      if(this.model.get('finished')){
        this.$el.attr('style', 'text-decoration: line-through;')
      }
    }
  });
});
