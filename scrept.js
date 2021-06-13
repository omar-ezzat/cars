window.onload=pageLoad;
function pageLoad(){
    var contactForm = document.getElementById("registerForm");
    contactForm.onsubmit= validate;
}
function validate(){
    var check = true;
    var f_name = document.getElementById("fname").value;
    var l_name = document.getElementById("lname").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("pwd").value;

    
    if(f_name == ""){
        alert('Name is required !');
        check= false;
    }
    if(l_name == ""){
        alert('Name is required !');
        check= false;
    }
    
    if(mail == ""){
        alert('E-mail is required !');
        check= false;
    }

    if(password == ""){
        alert('Password is required !');
        check= false;
    }
    
 
    if (phone == "") {

        alert('Phone is required !');
    }
    

    if (!l_name.match(/^[A-Za-z ]+$/)){ 
        alert("only letters or space allowed in name field");
        check= false;
    }
    if (!f_name.match(/^[A-Za-z ]+$/)){ 
        alert("only letters or space allowed in name field");
        check= false;
    }
    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
        alert("Email is Not Valid");
        check=false;
    }

   	if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
		check=false;
	}
    
    if (!phone.match(/^[0-9]{11}$/)){

        alert("Phone is not valid must be 11 digits");
        check=false;
    }

 
    if(check==true)
    {alert('thanks for registration : '+ " " +f_name + "  " +l_name )}

    return check;


}