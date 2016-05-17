var metods = require('../js/script.js');


describe("gcd",function(){
	it("it gcd1",function(){
		var result;
		result = metods.GCD(8,2);
		expect(result).toBe(2);
	});
	it("it gcd2",function(){
		var result;
		result = metods.GCD(0,0);
		expect(result).toBeNaN;
	});
	it("it gcd3",function(){
		var result;
		result = metods.GCD(1.584,2);
		expect(result).toBeUndefined;
	});
	it("it gcd4",function(){
		var result;
		result = metods.GCD(2*8*4/5+6-9,2);
		expect(result).toBeUndefined;
	});
		it("it gcd5",function(){
		var result;
		result = metods.GCD(-9,2);
		expect(result).toBe(1);
	});
		it("it gcd6",function(){
		var result;
		result = metods.GCD(1);
		expect(result).toBeUndefined;
	});
		it("it gcd7",function(){
		var result;
		result = metods.GCD(1);
		expect(result).toBeUndefined;
	});
		it("it gcd7",function(){
		var result;
		result = metods.GCD('asdkhiasdu');
		expect(result).toBeUndefined;
	});
	it("it gcd7",function(){
		var result;
		result = metods.GCD('1','1');
		expect(result).toBeUndefined;
	});
});

describe("factor",function(){
	it("it factor1",function(){
		var result;
		result = metods.factor(2*58);
		expect(result).toEqual([2,2,29]);
	});
	it("it factor2",function(){
		var result;
		result = metods.factor(2*8+6-89*5*888*555+662548+9898*545648548468548654655851*899655+65425545);
		expect(result).toEqual('Введите число от 1 до 99999999999999999999');
	});
	it("it factor3",function(){
		var result;
		result = metods.factor('asdlskad');
		expect(result).toBeNull;
	});
	it("it factor4",function(){
		var result;
		result = metods.factor('8fvxvxc');
		expect(result).toBeNaN;
	});
	it("it factor5",function(){
		var result;
		result = metods.factor(842858852255263632574478585);
		expect(result).toEqual('Введите число от 1 до 99999999999999999999');
	});
	it("it factor6",function(){
		var result;
		result = metods.factor(1.265);
		expect(result).toBeNull;
	});
	it("it factor6",function(){
		var result;
		result = metods.factor('8asdasd');
		expect(result).toBeNull;
	});
});
















	
	