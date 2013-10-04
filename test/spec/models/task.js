(function() {
	'use strict';

	var root = this;

	root.define([
		'models/task'
		],
		function( Task ) {

      describe('Task Model', function () {
        var task;
        before(function(){
          task = new Task({title: "it is testing"});
        });

        it('should save and fetch', function () {
          task.save();
          var saved_task = new Task({id: task.id}).fetch()
          expect( saved_task.title).to.equal(task.title)
        });

			});

		});

}).call( this );
