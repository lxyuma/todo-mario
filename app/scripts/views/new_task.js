define([
  'backbone',
  'communicator',
  'models/task'
],
function(Backbone, Communicator, Task){
    'use strict';

  return Backbone.Marionette.View.extend({
    initialize: function(){
      this.bindUIElements();
      this.model = new Task();
      this.stickit();
    },
    ui: {
      msg: "#msg"
    },
    bindings: {
      "#task-title": "title"
    },
    events: {
      "keypress": "onKeypress"
    },
    onKeypress: function(event){
      if(event.keyCode == 13){
        this.model.save({}, {
          success: _.bind(function(task){
            this.showMessage("SUCCESS!");
            Communicator.command.execute("todo:add-new-task", task);
          } , this),
          error: _.bind(function(task){ this.showMessage("ERROR!"); }, this)
        });
        this.model = new Task();
        this.stickit();
      }
    },
    showMessage: function(message) {
      this.ui.msg.html(message).show();
      setTimeout(_.bind(function(){
        this.ui.msg.fadeOut();
      }, this), 1000);
    }
  });
});
