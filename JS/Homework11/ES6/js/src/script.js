let parentBody = document.body;
let test = {
	header: function() {
		let h1 = document.createElement('h1');
		h1.classList.add('h1');
		h1.innerHTML = 'Тест по программированию';
		parentBody.appendChild(h1);},
		
	form: function() {
		window.form = document.createElement('form');
		parentBody.appendChild(form);},
		
	qw: function(a = 'Номер вопроса. ',b = 'Содержимое вопроса' ) {
		window.ulTest = document.createElement('ul');
		ulTest.classList.add('ulTest');
		ulTest.innerHTML = a + b;
		form.appendChild(ulTest);},
	
	li: function(a,b = 'Ответ') {
		let liTest = document.createElement('li');
		liTest.classList.add('liTest');
		let checkBox = document.createElement('input');
		checkBox.classList.add('checkBox');
		checkBox.setAttribute('type','checkbox');
		checkBox.setAttribute('id','checkbox'+a);
		let label = document.createElement('label');
		label.classList.add('label');
		label.setAttribute('for','checkbox'+a);
		label.innerHTML = b;
		ulTest.appendChild(liTest);
		liTest.appendChild(checkBox);
		liTest.appendChild(label);},
		
	submit: function() {
		let submit = document.createElement('input');
		submit.classList.add('submit');
		submit.setAttribute('type','submit');
		submit.setAttribute('value','Проверить мои результаты');
		form.appendChild(submit);
		}
	
}

test.header();
test.form();
test.qw();
test.li(1);
test.li(2);
test.li(3);
test.qw();
test.li(21);
test.li(22);
test.li(23);
test.qw();
test.li(31);
test.li(32);
test.li(33);
test.submit();