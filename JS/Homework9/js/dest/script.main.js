// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();
'use strict';

$(function(){
	
  var html = $('#test').html();
  
  var data = localStorage.getItem('data');
  data = JSON.parse(data);
  
  var content = tmpl(html,{
	data: data
  });
  
  $('body').append(content);
	
});
'use strict';
//в поле 'vern' указать правильный ответ буквой y,сли ответ неверный оставить поле пустым

  
  var data = [
  {
	qw:'1.Зачем нужен css?',
	qwl: [
	  {
		qw:'Это основа всего программирования',
		vern: ''
	  },	
	  {
		qw:'Придание вида html',
		vern: 'y'
	  },
	  {
		qw:'Я не понимаю о чём этот вопрос',
		vern: ''
	  }
		],
  },
  
    {
	qw:'2.Что такое html?',
	qwl: [
	  {
		qw:'Это язык разметки',
		vern: 'y'
	  },	
	  {
		qw:'Это язык, который используют в пентагоне для отслеживания запуска ракет',
		vern: ''
	  },
	  {
		qw:'Я хз что это значит',
		vern: ''
	  }
		],
  },
    {
	qw:'3.Зачем мы делаем домашнее задание?',
	qwl: [
	  {
		qw:'От нечего делать',
		vern: ''
	  },	
	  {
		qw:'Что-бы ментору понравилось',
		vern: ''
	  },
	  {
		qw:'Это основа нашего обучения',
		vern: 'y'
	  }
		],
  },

  ];
  localStorage.setItem('data', JSON.stringify(data))
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