var alphanumeric = /^[a-z0-9]+$/i
var pass_valid = /^(?=.*[A-Z])(?=.*\d)(?=.*[/*\-!@#$^&*])[A-Za-z\d/*\-!@#$^&*]*$/


function validateForm() {  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var email = document.getElementById("email").value;
    var age_confirm = document.getElementById("age").checked;
    var tos_confirm = document.getElementById("tos").checked;

    if (! alphanumeric.test(username)){
        alert("Username must be alphanumeric");
      return false;
    }

    if (username.length < 3 ) {
      alert("Username must be at least 3 letters");
      return false;
    }

    if (password.length < 8 ) {
        alert("Password must contain at least 8 characters");
        return false;
      }
    if (!pass_valid.test(password)){
        alert("Password must contain at least one Uppercase letter, one number and one of the following special characters: /*-!@#$^&*  ");
        return false;
    }
    if(password != confirm_password){
        alert("Both passwords must match to proceed");
        return false;
    }

    var form_data = {
        username: username, password:password, email: email, age_confirm: age_confirm, tos_confirm: tos_confirm
    }
    console.log(JSON.stringify(form_data));
    return false;
    
}

