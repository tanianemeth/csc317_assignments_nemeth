var alphanumeric = /^[a-z0-9]+$/i
function validateForm() {  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
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

    var form_data = {
        username: username, password:password
    }
    console.log(JSON.stringify(form_data));
    return false;
    
}

