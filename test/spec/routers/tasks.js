(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/tasks',
    'controllers/tasks'
		],
		function( Tasks, TasksController ) {

			describe('Tasks Router', function () {

				it('should be an instance of Tasks Router', function () {
					var tasks = new Tasks({controller: new TasksController});
					expect( tasks ).to.be.an.instanceof( Tasks );
				});

			});

		});

}).call( this );
