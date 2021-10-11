function login(form){
    if (form.user.value=="Ana"){
        if(form.password.value=="123"){
         location="index2.html"; 
        } else {
            alert("contraseña incorrecta");
        }
    } else if (form.user.value=="Roberto"){
        if(form.password.value=="1234"){
          location="index3.html";
        } else {
            alert("contraseña incorrecta");  
        }
    } else if (form.user.value=="Clara"){
        if(form.password.value=="12345"){
           location="index4.html";
        } else {
            alert("contraseña incorrecta");  
          }
        } else {
            alert("error de usuario");
    }
}

function formula() {
    var CantidadT=parseInt(document.getElementById("Cant").value);
    var Cantidad1=parseInt(document.getElementById("C1").value);
    document.getElementById("C1").value = (CantidadT+Cantidad1);
    if(Cantidad1 >= 990){
        alert("Esta cuenta ha alcanzado el monto máximo")
    }    
}

function formula2() {
    var CantidadT=parseInt(document.getElementById("Cant").value);
    var Cantidad1=parseInt(document.getElementById("C1").value);
    document.getElementById("C1").value = (Cantidad1-CantidadT); 
    if(Cantidad1 <= 10){
       alert("esta cuenta ha alcanzado el monto mínimo")
    }
}

