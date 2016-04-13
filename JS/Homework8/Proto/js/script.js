function Human() {
	this.name = 'Ivan';
	this.age = 30;
	this.kind = 'male';
	this.growth = 180;
	this.weight = 90;
};

function Worker() {
	this.work = function () {	
		placeWork = 'Go it';
		salary = 5000;
	};
};
function Worker1() {
	this.work = function () {	
		placeWork = 'Стройка';
		salary = 3000;
	};
};
function Worker2() {
	this.work = function () {	
		placeWork = 'ЖЭК';
		salary = 5000;
	};
};

function Student() {
	this.watchSerials = function () {	
		placeStudy = 'Khai';
		grants = 900;
	};
};
function Student1() {
	this.watchSerials = function () {	
		placeStudy = 'Khadi';
		grants = 900;
	};
};
function Student2() {
	this.watchSerials = function () {	
		placeStudy = 'Infiz';
		grants = 900;
	};
};

Worker.prototype = new Human;
var newWorker = new Worker();
Worker1.prototype = new Human;
var newWorker1 = new Worker();
Worker1.prototype = new Human;
var newWorker2 = new Worker();

Student.prototype = new Human;
var newStudent = new Student();
Student1.prototype = new Human;
var newStudent1 = new Student();
Student2.prototype = new Human;
var newStudent2 = new Student();

console.log(newWorker.work);
console.log(newWorker1.age);
console.log(newWorker2.kind);

console.log(newStudent.watchSerials);
console.log(newStudent1.weight);
console.log(newStudent2.name);



