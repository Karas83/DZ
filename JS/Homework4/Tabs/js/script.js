$(function() {

  var $tabs1 = $('.a1');
  var $tabs2 = $('.a2');
  var $tabs3 = $('.a3');
  var $div1 = $('.div1');
  var $div2 = $('.div2');
  var $div3 = $('.div3');
  
  $tabs1.on ('click', function(e){
	e.preventDefault();
	$div1.css('display', 'block');
	$div2.css('display', 'none');
	$div3.css('display', 'none');
		$tabs2.css('background-color', 'rgba(0,0,0,0.1)');
		$tabs2.css('border', 'transparent');
		$tabs1.css('background-color', 'rgba(0,0,0,0.3)');
		$tabs1.css('border', '1px solid black');
		$tabs3.css('background-color', 'rgba(0,0,0,0.1)');
		$tabs3.css('border', 'transparent');
  });
  
   $tabs2.on ('click', function(e){
	e.preventDefault();
	$div1.css('display', 'none');
	$div2.css('display', 'block');
	$div3.css('display', 'none');
	$tabs2.css('background-color', 'rgba(0,0,0,0.3)');
	$tabs2.css('border', '1px solid black');
	$tabs1.css('background-color', 'rgba(0,0,0,0.1)');
	$tabs1.css('border', 'transparent');
	$tabs3.css('background-color', 'rgba(0,0,0,0.1)');
	$tabs3.css('border', 'transparent');
  });
  
   $tabs3.on ('click', function(e){
	e.preventDefault();
	$div1.css('display', 'none');
	$div2.css('display', 'none');
	$div3.css('display', 'block');
		$tabs2.css('background-color', 'rgba(0,0,0,0.1)');
		$tabs2.css('border', 'transparent');
		$tabs1.css('background-color', 'rgba(0,0,0,0.1)');
		$tabs1.css('border', 'transparent');
		$tabs3.css('background-color', 'rgba(0,0,0,0.3)');
		$tabs3.css('border', '1px solid black');
  });


	
	
});