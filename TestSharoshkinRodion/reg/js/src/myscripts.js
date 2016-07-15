$(document).ready(function(){
 $("#form").validate({
       rules:{
            num:{
                required: true,
				digits: true,
            },
			email:{
                required: true,
				email: true,
            },
            pswd:{
                required: true,
                minlength: 6,
                maxlength: 16,
            },
			pswdconf:{
                required: true,
				equalTo: "#pswd",
            },
       },
       messages:{
            num:{
                required: "Это поле обязательно для заполнения",
				digits:"Введите корректный номер",
            },
			email:{
                required: "Это поле обязательно для заполнения",
                email: "Введите корректный Email",
            },
            pswd:{
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            },
			pswdconf:{
                required: "Это поле обязательно для заполнения",
                equalTo: "Пароли должны совпадать",
            },
       }
    });

});