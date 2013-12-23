(function() {
	'use strict';

	var root = this;

	root.define([
		'views/new_task',
    'communicator'
		],
		function( NewTask, Communicator ) {

			describe('NewTask View', function () {

				beforeEach(function () {
					this.view = new NewTask();
				});

        describe("#onKeypress", function(){
          describe('when server can respond', function(){
            beforeEach(function(){
              this.stub = sinon.stub(this.view.model, "save");
              this.stub.yieldsTo('success', {});
              sinon.spy(this.view, "showMessage");

              this.eventSpy = sinon.spy();
              Communicator.command.setHandler('todo:add-new-task', this.eventSpy);
            });
            it("should save", function(){
              this.view.onKeypress({keyCode: 13});
              expect(this.stub.called).to.be.true;
              expect(this.view.showMessage.called).to.be.true;
              expect(this.view.showMessage.args[0]).match(/SUCCESS/);
              expect(this.eventSpy.called).to.be.true;
            });
          });
          describe('when server can NOT respond', function(){
            beforeEach(function(){
              this.stub = sinon.stub(this.view.model, "save");
              this.stub.yieldsTo('error', {});
              sinon.spy(this.view, "showMessage");
            });
            it("should not save", function(){
              this.view.onKeypress({keyCode: 13});
              expect(this.stub.called).to.be.true;
              expect(this.view.showMessage.called).to.be.true;
              expect(this.view.showMessage.args[0]).match(/ERROR/);
            });
          });
          
        });

			});

		});

}).call( this );
