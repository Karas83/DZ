'use strict';

$(function() {
	var a = 0;
	$('.qw1').click(function () {
		if (this.checked) {
			$('.qw1').attr('checked',false);
			this.checked=true;
		};
	});
	$('.qw2').click(function () {
		if (this.checked) {
			$('.qw2').attr('checked',false);
			this.checked=true;
		};
	});
	$('#go').click( function(event){
	if($("#checkbox2").prop("checked")) {
	a++;
	}; 	
	if($("#checkbox21").prop("checked")) {
	a++;
	};
	if($("#checkbox31").prop("checked")) {
	a++;
	};
	if($("#checkbox32").prop("checked")) {
	a++;
	};	
	if($("#checkbox31").prop("checked") && $("#checkbox32").prop("checked") && $("#checkbox33").prop("checked")) {
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
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
	$('#modal_form')
	.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
	function(){ // пoсле aнимaции
	$(this).css('display', 'none'); // делaем ему display: none;
	$('#overlay').fadeOut(400); // скрывaем пoдлoжку
	location.reload();
	});
	});
});