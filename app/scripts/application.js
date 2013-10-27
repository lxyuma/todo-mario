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
    newTodo : "#new-task",
    tasks   : "#tasks"
  });

  /* Add initializers here */
  App.addInitializer(function() {
    this.collection = new TasksCollection();
    this.collection.fetch();

    App.newTodo.attachView(new NewTaskView({el: App.newTodo.el, collection: this.collection}));
    App.tasks.show(new TasksCollectionView({collection: this.collection}));
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


