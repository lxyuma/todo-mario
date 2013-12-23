(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/task',
    'models/task'
		],
		function( TaskView, TaskModel ) {

			describe('Task Itemview', function () {

        beforeEach(function(){
          this.model = new TaskModel();
          this.view = new TaskView({model: this.model});
        });
        describe('#onClick', function(){
          describe('when task is finished', function(){
            beforeEach(function(){
              this.model.set({"finished": true});
              sinon.stub(this.model, "destroy");
            });
            afterEach(function(){
              sinon.restore(this.model, "destroy");
            });
            it('should destroy', function(){
              this.view.onClick();
              expect(this.model.destroy.called).to.be.true;
            });
          });
        });
      });
		});

}).call( this );
