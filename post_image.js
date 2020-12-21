var alpha = /^[a-z ]+$/i


function validateForm() {  
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var file = document.getElementById("file").value;
    var checkbox= document.getElementById("checkbox").checked;
    var extension = file.split(".").pop();

    if (! alpha.test(title)){
        alert("Title must have text");
      return false;
    }

    if (! alpha.test(description)){
        alert("Description must have text");
      return false;
    }
    if(extension != "jpg" && extension != "png" && extension != "bmp" && extension != "gif" ){
        alert("file must have the extension of .jpg, or .png, or .bmp, or .gif");
        return false;
    }

    var form_data = {
        title: title, description:description, file: file, checkbox: checkbox
    }
    console.log(JSON.stringify(form_data));
    return false;
    
}

