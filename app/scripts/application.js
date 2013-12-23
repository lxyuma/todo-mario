define([
  'backbone',
  'communicator',
  'views/new_task',
  'views/collection/tasks',
  'models/task',
  'collections/tasks',
  'routers/tasks',
  'controllers/tasks'
],

function( Backbone, Communicator, NewTaskView, TasksCollectionView, Task, TasksCollection, TasksRouter, TasksController ) {
    'use strict';

  var App = new Backbone.Marionette.Application();

  /* Add application regions here */
  App.addRegions({
    taskForm : "#task-form-region",
    tasksResults : "#tasks-results-region"
  });

  /* Add initializers here */
  App.addInitializer(function() {
    this.collection = new TasksCollection();
    this.collection.fetch();

    App.taskForm.attachView(new NewTaskView({el: App.taskForm.el}));
    App.tasksResults.show(new TasksCollectionView({collection: this.collection}));
  });

  App.addInitializer(function(){
    Communicator.command.setHandler("todo:add-new-task", _.bind(function(task){
      this.collection.add(task);
    }, this));
  });

  App.addInitializer( function () {
    new TasksRouter({controller: new TasksController({collection: App.collection })});
    Backbone.history.start();
  });

  App.addInitializer( function () {
    Communicator.mediator.trigger("APP:START");
  });

  return App;
});


