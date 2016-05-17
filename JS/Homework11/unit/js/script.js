var metods = {
GCD: function (a,b){
if (a == 0 && b == 0){
	return NaN;
	}else if (a % 1 == 0 && b % 1 == 0){
		a=Math.abs(a); b=Math.abs(b);
		while(a&&b)a>=b?a%=b:b%=a;
		return a||b
		}else {
			return undefined;
}},
factor: function (a){
	var arr = [];
	if (isNaN(a)){return NaN;
	}else if(a > 99999999999999999999){
			return('Введите число от 1 до 99999999999999999999');
	}else if(a%1 != 0 || a <= 1  ){
			return null;
	}else{
	for (var i = 2; i < a+1;i++) {
		if (a/i == 0){
			break;
		}else if(a%i === 0){
		arr.push(i);
		a=a/i;
		i=i-1;
		};
		
	};return(arr);};
	
}
};
//console.log(metods.GCD(-9,2));
//console.log(metods.factor('8'));
try{
module.exports = metods;
} catch(e){}