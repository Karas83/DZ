var metods = require('../js/script.js');


describe("metods",function(){
	it("it gcd1",function(){
		var result;
		result = metods.GCD(8,2);
		expect(result).toBe(2);
	});
	it("it gcd2",function(){
		var result;
		result = metods.GCD(0,0);
		expect(result).toBe(NaN);
	});
	it("it gcd3",function(){
		var result;
		result = metods.GCD(1.584,2);
		expect(result).toBe(undefined);
	});
	it("it gcd4",function(){
		var result;
		result = metods.GCD(2*8*4/5+6-9,2);
		expect(result).toBe(undefined);
	});
		it("it gcd5",function(){
		var result;
		result = metods.GCD(-9,2);
		expect(result).toBe(1);
	});
	it("it factor1",function(){
		var result;
		result = metods.factor(2*58);
		expect(result).toBe([2,2,29]);
	});
	it("it factor2",function(){
		var result;
		result = metods.factor(842858852255263632574478585);
		expect(result).toBe(['Введите число от 1 до 99999999999999999999']);
	});
	it("it factor2",function(){
		var result;
		result = metods.factor(1.265);
		expect(result).toBe(['Неверный ввод']);
	});
	
});