define([
  'backbone',
  'communicator',
  'models/task'
],
function(Backbone, Communicator, Task){
    'use strict';

  return Backbone.View.extend({
    initialize: function(){
      this.model = new Task();
      this.stickit();
    },
    bindings: {
      "#new-task": "title"
    },
    events: {
      "keypress": "postTask"
    },
    postTask: function(event){
      if(event.keyCode == 13){
        this.model.save();
        Communicator.command.execute("todo:add-new-task", this.model);
        this.model = new Task();
        this.stickit();
      }
    }
  });
});
