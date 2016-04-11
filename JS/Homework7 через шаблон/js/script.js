'use strict';

$(function() {
	var a = 0;
	$('.0').click(function () {
		if (this.checked) {
			$('.0').attr('checked',false);
			this.checked=true;
		};
	});
	$('.1').click(function () {
		if (this.checked) {
			$('.1').attr('checked',false);
			this.checked=true;
		};
	});
	$('#go').click( function(event){
	if($("#01").prop("checked")) {
	a++;
	}; 	
	if($("#10").prop("checked")) {
	a++;
	};
	if($("#20").prop("checked")) {
	a++;
	};
	if($("#21").prop("checked")) {
	a++;
	};	
	if($("#20").prop("checked") && $("#21").prop("checked") && $("#22").prop("checked")) {
	a = a-2;
	};
	if (a === 4) {
		$('.result').text('Поздравляем!');
		$('.result2').text('Вы успешно прошли тест!');
		$('.result3').text('Ваш результат '+a+'/4 балов');
	}
	else{
		$('.result').text('Сожалеем...');
		$('.result2').text('Вы не прошли тест...');
		$('.result3').text('Ваш результат '+a+'/4 балов');
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