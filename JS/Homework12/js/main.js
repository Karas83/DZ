require(
[
 'M','V','C'
],
function(){
	$(function(){
      var list = ['to','do','list'];
      var model = new Model(list);
      var view = new View(model);
      var controller = new Controller(model, view);
    });
	
}


);