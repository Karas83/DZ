var parentBody = document.body;
var test = {
	header: function() {
		var h1 = document.createElement('h1');
		h1.classList.add('h1');
		h1.innerHTML = 'Тест по программированию';
		parentBody.appendChild(h1);},
		
	form: function() {
		form = document.createElement('form');
		parentBody.appendChild(form);},
		
	qw: function(a,b) {
		ulTest = document.createElement('ul');
		ulTest.classList.add('ulTest');
		ulTest.innerHTML = a+'.Вопрос №'+b;
		form.appendChild(ulTest);},
	
	li: function(a,b) {
		var liTest = document.createElement('li');
		liTest.classList.add('liTest');
		var checkBox = document.createElement('input');
		checkBox.classList.add('checkBox');
		checkBox.setAttribute('type','checkbox');
		checkBox.setAttribute('id','checkbox'+a);
		var label = document.createElement('label');
		label.classList.add('label');
		label.setAttribute('for','checkbox'+a);
		label.innerHTML = 'Вариант ответа №'+b;
		ulTest.appendChild(liTest);
		liTest.appendChild(checkBox);
		liTest.appendChild(label);},
		
	submit: function() {
		var submit = document.createElement('input');
		submit.classList.add('submit');
		submit.setAttribute('type','submit');
		submit.setAttribute('value','Проверить мои результаты');
		form.appendChild(submit);
		}
	
}

test.header();
test.form();
test.qw(1,1);
test.li(1,1);
test.li(2,2);
test.li(3,3);
test.qw(2,2);
test.li(21,1);
test.li(22,2);
test.li(23,3);
test.qw(3,3);
test.li(31,1);
test.li(32,2);
test.li(33,3);
test.submit();