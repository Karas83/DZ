'use strict';

$(function() {
	var a = 0;
	$('#go').click( function(event){
	for (var i=0; i<data.length; i++){
		
	if($(".y"+[i]).prop("checked")) {
	a++;
	}; };
	if (a === data.length) {
		$('.result').text('Поздравляем!');
		$('.result2').text('Вы успешно прошли тест!');
		$('.result3').text('Ваш результат '+a+'/'+data.length+' балов');
	}
	else{
		$('.result').text('Сожалеем...');
		$('.result2').text('Вы не прошли тест...');
		$('.result3').text('Ваш результат '+a+'/'+data.length+' балов');
	};
		
	event.preventDefault();
	$('#overlay').fadeIn(400,
	function(){
	$('#modal_form') 
	.css('display', 'block')
	.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#modal_close, #overlay').click( function(){
	$('#modal_form')
	.animate({opacity: 0, top: '45%'}, 200,
	function(){ 
	$(this).css('display', 'none');
	$('#overlay').fadeOut(400);
	location.reload();
	});
	});
});