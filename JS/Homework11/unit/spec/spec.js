
describe("Тесты для НОД",function(){
	it("Любые натуральные числа",function(){
		var result;
		result = metods.GCD(8,2);
		expect(result).toBe(2);
	});
	it("Два нуля",function(){
		var result;
		result = metods.GCD(0,0);
		expect(result).toBeNaN();
	});
	it("Любое дробное число",function(){
		var result;
		result = metods.GCD(1.584,2);
		expect(result).toBeUndefined();
	});
	it("Выражение из натуральных чисел,которое в результате дробное число",function(){
		var result;
		result = metods.GCD(2*8*4/5+6-9,2);
		expect(result).toBeUndefined();
	});
		it("Отрицательные числа",function(){
		var result;
		result = metods.GCD(-9,2);
		expect(result).toBe(1);
	});
		it("Ведден только один аргумент",function(){
		var result;
		result = metods.GCD(1);
		expect(result).toBeUndefined();
	});
		it("Введена строка",function(){
		var result;
		result = metods.GCD('asdkhiasdu');
		expect(result).toBeUndefined();
	});
	it("Введена строка преобразованная в число",function(){
		var result;
		result = metods.GCD('1','1');
		expect(result).toBe(1);
	});
	it("Пустая строка",function(){
		var result;
		result = metods.GCD('','');
		expect(result).toBeNaN();
	});
});

describe("Тесты для factor",function(){
	it("Выражение",function(){
		var result;
		result = metods.factor(2*58);
		expect(result).toEqual([2,2,29]);
	});
	it("Верхний предел числа в виде выражения",function(){
		var result;
		result = metods.factor(2*8+6-89*5*888*555+662548+9898*545648548468548654655851*899655+65425545);
		expect(result).toEqual('Введите число от 1 до 999999999999999');
	});
	it("Введена строка",function(){
		var result;
		result = metods.factor('asdlskad');
		expect(result).toBeNaN();
	});
	it("Введена строка с числом и буквами",function(){
		var result;
		result = metods.factor('8fvxvxc');
		expect(result).toBeNaN();
	});
	it("Верхний предел числа",function(){
		var result;
		result = metods.factor(842858852255263632574478585);
		expect(result).toEqual('Введите число от 1 до 999999999999999');
	});
	it("Дробное число",function(){
		var result;
		result = metods.factor(1.265);
		expect(result).toBeNull();
	});
});
















	
	