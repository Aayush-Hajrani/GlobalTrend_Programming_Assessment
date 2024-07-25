document.addEventListener("DOMContentLoaded",function(){

    const form = document.getElementById('signup-form');
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const confpass = document.getElementById("confirm-password");

    const emailerror = document.getElementById("email-error");
    const passworderror = document.getElementById("password-error");
    const confirmpassworderror = document.getElementById("confirm-password-error");

    email.addEventListener("input",function(){

        const emailpattern = /@gmail.com /;
        if(!emailpattern.test(email.value)){
            emailerror.textContent = " please enter valid email";
            emailerror.style.display = "block";
        }else{
            emailerror.style.display = "none";
        }
    });

    confpass.addEventListener("input",function(){
        if(pass.value !== confpass.value){
            confirmpassworderror.textContent = "passwords do not match";
            confirmpassworderror.style.display = "block";
        }else{
            confirmpassworderror.style.display = "none";
        }
    });

    form.addEventListener("submit",function(event){
        let valid = true;

        if(!email.value){
            emailerror.textContent = "email is required";
            emailerror.style.display = "block";
            valid=false;
        }

        if(!pass.value){
            passworderror.textContent = "password is required";
            passworderror.style.display = "block";
            valid=false;
        }

        if(pass.value !== confpass.value){
            confirmpassworderror.textContent = " passwords do not match";
            confirmpassworderror.style.display = "block";
            valid=false;
        }

        if(!valid){
            event.preventDefault();
        }
    })

})