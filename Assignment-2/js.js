$("#formvalidation").validate({
    rules:{
        Firstname:{
            minlength: 2,
        },
        Lastname:{
            minlength: 2,
        },
        email:{
            email:true,
        },
        Contactnumber:{
            Number:true,
            minlength:10,
            maxlenght:10
        }
    },
    ADDyourskills: {
        name:{
             required: "Enter Your Name",
                minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
            }
      },
      email:"Please Enter Your E-Mail",
      Phone:"Please Enter Your Phone",
      suject:"Please Enter Your suject",
      formmessage:"Please Enter Your Message",

   submitHandler: function(form) {
      form.submit();
    }
   });