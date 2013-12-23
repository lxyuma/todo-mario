(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/tasks',
    'collections/tasks',
    'underscore'
		],
		function( TasksController, TasksCollections, _ ) {

			describe('Tasks Controller', function () {

				beforeEach(function () {
          this.collection = new TasksCollections();
          this.controller = new TasksController({collection: this.collection});
				});

        describe('all', function() {
          beforeEach(function(){
            sinon.stub(this.collection, "fetch");
          });
          afterEach(function(){
            this.collection.fetch.restore();
          });
          it('should fetch', function(){
            this.controller.all();
            expect(this.collection.fetch.called).to.be.true;
          });
        });

        describe('finished', function() {
          beforeEach(function(){
            sinon.stub(this.collection, "fetch");
          });
          afterEach(function(){
            this.collection.fetch.restore();
          });
          it('should fetch', function(){
            this.controller.finished();
            expect(this.collection.fetch.calledOnce).to.be.true;
            expect(_.keys(this.collection.fetch.args[0][0])).to.be.contain("data")
          });
        });

			});

		});

}).call( this );
