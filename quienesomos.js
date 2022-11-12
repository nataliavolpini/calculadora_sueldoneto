let mail= document.getElementById("mail");
let suscribir= document.getElementById("suscribir");

//Validacion para el Newsletter
suscribir.onclick = () => {

    let expReg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let esValido=expReg.test(mail.value);
    if(esValido==true){
        Toastify({
            text: "Suscripción realizada con exito",
            duration: 3000,
            gravity: 'right',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast()
    }else{
        Toastify({
            text: "Por favor ingrese un correo válido",
            duration: 3000,
            gravity: 'right',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #b02300, #c9922d)'
            }
        }).showToast()
    }
    mail.value="";
}