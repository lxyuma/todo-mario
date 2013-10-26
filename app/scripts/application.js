define([
	'backbone',
	'communicator',
  'views/new_task',
  'views/collection/tasks',
  'models/task',
  'collections/tasks'
],

function( Backbone, Communicator, NewTaskView, TasksCollectionView, Task, TasksCollection ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
    newTodo : "#new-todo",
    tasks   : "#tasks"
  });

	/* Add initializers here */
  App.addInitializer(function() {
    this.collection = new TasksCollection();
    this.collection.fetch();
    new NewTaskView({el: App.newTodo.el, collection: this.collection});
    App.tasks.show(new TasksCollectionView({collection: this.collection}));
  });

	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});


