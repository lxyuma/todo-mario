define([
	'backbone',
	'communicator',
  'views/new_task',
  'views/item/task',
  'models/task'
],

function( Backbone, Communicator, NewTaskView, TaskView, Task ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
    newTask: "#new-todo",
    tasks  : "#tasks"
  });

	/* Add initializers here */
	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");
    App.newTask.show(new NewTaskView());
	});

  Communicator.command.setHandler('createTask', function(title){
    App.tasks.show(new TaskView({model: new Task({title: title})}));
  });
	return App;
});


