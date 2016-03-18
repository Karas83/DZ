$(function() {

  var $input = $('input');
  var $help = $('button');
  var $span = $('span');
  
  $input.hover (
	function(){
		var $span = $(this).siblings('.span');
		$span.fadeTo("slow", 1);
	},
	function(){
		var $span = $(this).siblings('.span');
		$span.fadeTo("slow", 0);
	}
	);
	$help.on ('click', function(){
		$span.fadeTo("slow", 1);
	});
});