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