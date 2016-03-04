var arr = [];
var name;
var finallName;
for (i = 0; i<5; i++) {
	arr.push(prompt ("Введите имя для массива"));
}
name=prompt('Введите имя');
finallName='Ошибка входа';
for (i = 0; i<5; i++) {
	if (name === arr[i]){
			finallName=(name+', вы успешно вошли')
	}
}
alert(finallName);