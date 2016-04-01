$(function(){
	
  var html = $('#prof').html();
  
  var data = {
	имя: 'Шарошкин Родион Дмитриевич',
	imgPath: 'img/1.jpg',	
	работа: '&nbsp;&nbsp;Студент ХАИ',
	причина1: 'Это интерестно!',
	причина2: 'Это высокооплачиваемо!',
	причина3: 'За этим будушее!',
	номерТел: '&nbsp;&nbsp;+380997959057',
	ссылкаНаВк: 'https://vk.com/tyaappa',
	фидбек: '&nbsp;&nbsp;Если нужно,могу построить вам самолёт',
  };
  var content = tmpl(html,data)
  
  $('body').append(content);
	
});
