$(function() {

  var $input = $('input');
  var $help = $('button');
  var $span = $('span');
  
  $input.hover (
	function(){
		var $span = $(this).siblings('.span');
		$span.fadeTo(500, 1);
	},
	function(){
		var $span = $(this).siblings('.span');
		$span.fadeTo(500, 0);
	}
	);
	$help.on ('click', function(){
		$span.fadeTo(500, 1);
	});
});