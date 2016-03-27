function ullvl2in(el){
	var positionY = 0;
	
	var interval = setInterval(function(){
		if (positionY>250){
			clearInterval(interval);
		}
		
		
		positionY += 3;
		el.style.clip ='rect(0px, 300px, ' + positionY + 'px, 0px)';
	}, 1);
};
function ullvl2out(el){
	var positionY = 250;
	
	var interval = setInterval(function(){
		if (positionY<0){
			clearInterval(interval);
		}
		
		
		positionY -= 3;
		el.style.clip ='rect(0px, 300px, ' + positionY + 'px, 0px)';
	}, 1);
};
var ul1 = document.querySelector(".ullvl2");
var li1 = document.querySelector(".lilevel12");
var ul2 = document.querySelector(".ullvl3");
var li2 = document.querySelector(".lilevel22");
var ul3 = document.querySelector(".ullvl4");
var li3 = document.querySelector(".lilevel32");

li1.addEventListener('mouseenter',function(){
	ullvl2in(ul1);
});
li1.addEventListener('mouseleave',function(){
	ullvl2out(ul1);
});
li2.addEventListener('mouseenter',function(){
	ullvl2in(ul2);
});
li2.addEventListener('mouseleave',function(){
	ullvl2out(ul2);
});
li3.addEventListener('mouseenter',function(){
	ullvl2in(ul3);
});
li3.addEventListener('mouseleave',function(){
	ullvl2out(ul3);
});
