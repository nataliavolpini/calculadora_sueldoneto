

let sueldoNeto=0;
const obraSocial = 0.03;
const inssjp = 0.03;
const jubilacion = 0.11;
let impuestoFijo=0; 
let impuestoVariable=0;
let impuestoTotal=0;
let sueldoACobrar= 0;
let sueldoIngresado= document.getElementById("ingresoSueldo");
let mail= document.getElementById("mail");
let suscribir= document.getElementById("suscribir");
let calculo= document.getElementById("botoncalcular");
let gananciaNeta=0;

//Declaracion de deducciones

const deduccionEspecial = 101026;
const gananciaNoImponible = 21047;
const conyugue = 19621;
const hijo = 9895;
const alquileres = 21047;
const interesesHipotecarios = 1667;
const seguroVida = 2000;
let deducciones = deduccionEspecial+gananciaNoImponible;

//Validacion Ingreso Sueldo y descuentos

sueldoIngresado.onchange=()=>{
    console.log("sueldo ingresado : " + sueldoIngresado.value);
    let descuentos = ((sueldoIngresado.value*obraSocial)+(sueldoIngresado.value*inssjp)+(sueldoIngresado.value*jubilacion));
    console.log("sus descuentos son de: " + descuentos);
    sueldoNeto = sueldoIngresado.value - descuentos;
    console.log("Su sueldo Neto es de: " + sueldoNeto);
    
}

//Validacion Checkbox


let miCheckbox1 = document.getElementById("conyugue");
let miCheckbox2 = document.getElementById("hijos");
let miCheckbox3 = document.getElementById("seguroVida");
let miCheckbox4 = document.getElementById("creditoHipotecario");
let miCheckbox5 = document.getElementById("alquiler");
let cantidadHijos= document.getElementById("cantidadHijos");

cantidadHijos.onchange=()=>{
    console.log("Cantidad de Hijos ingresados : " + cantidadHijos.value);
    if (miCheckbox2.checked) {
        deducciones+= ((hijo)*(cantidadHijos.value-1)) ;
        console.log(deducciones);
    }
}

miCheckbox1.addEventListener('click', function() {
(miCheckbox1.checked) && (deducciones+=conyugue);
console.log(deducciones)
});

miCheckbox2.addEventListener('click', function() {

(miCheckbox2.checked) && (deducciones+=hijo);
console.log(deducciones);
})


miCheckbox3.addEventListener('click', function() {
    (miCheckbox3.checked) && (deducciones+=seguroVida);
    console.log(deducciones);

})

miCheckbox4.addEventListener('click', function() {

(miCheckbox4.checked) && (deducciones+=interesesHipotecarios);
console.log(deducciones);

})

miCheckbox5.addEventListener('click', function() {

(miCheckbox5.checked) && (deducciones+=alquileres);
console.log(deducciones);

})

//Boton Calcular

calculo.addEventListener('click', function(){

    gananciaNeta= sueldoNeto- deducciones;
    console.log("Su Ganancia Neta sujeta a impuestos es: "+gananciaNeta);
    if (gananciaNeta*13<=97202){
        impuestoFijo=0;
    
    }else if((gananciaNeta*13>97202) && (gananciaNeta*13<=194404.01)){
        impuestoFijo=4860.10/12;
        impuestoVariable=((((gananciaNeta*13)-97202)*0.09))/12;
        impuestoTotal=  impuestoFijo + impuestoVariable;
        sueldoACobrar= sueldoNeto- impuestoTotal;
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        
    }else if((gananciaNeta*13>194404.02) && (gananciaNeta*13<=291606.01)){
        impuestoFijo=13608.28/12;
        impuestoVariable=((((gananciaNeta*13)-194404.02)*0.12))/12;
        impuestoTotal=  impuestoFijo + impuestoVariable;
        sueldoACobrar= sueldoNeto- impuestoTotal;
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        
    }else if((gananciaNeta*13>291606.01) && (gananciaNeta*13<=388808.02)){
        impuestoFijo=25272.52/12;
        impuestoVariable=((((gananciaNeta*13)-291606.01)*0.15))/12;
        impuestoTotal=  impuestoFijo + impuestoVariable;
        sueldoACobrar= sueldoNeto- impuestoTotal;
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
    
    }else if((gananciaNeta*13>388808.02) && (gananciaNeta*13<=583212.02)){
        impuestoFijo=39852.82/12;
        impuestoVariable=((((gananciaNeta*13)-388808.02)*0.19))/12;
        impuestoTotal=  impuestoFijo + impuestoVariable;
        sueldoACobrar= sueldoNeto- impuestoTotal;
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
    }
    else if((gananciaNeta*13>583212.02) && (gananciaNeta*13<=777616.02)){
        impuestoFijo=76789.58/12;
        impuestoVariable=((((gananciaNeta*13)-583212.02)*0.23))/12;
        impuestoTotal=  impuestoFijo + impuestoVariable;
        sueldoACobrar= sueldoNeto- impuestoTotal;
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        console.log("Su impuesto total es de $ "+impuestoTotal);
        console.log("Su sueldo Neto a cobrar es de $ "+ sueldoACobrar);
    
    }else if((gananciaNeta*13>777616.02) && (gananciaNeta*13<=1166424.03)){
        impuestoFijo=121502.50/12;
        impuestoVariable=((((gananciaNeta*13)-777616.02)*0.27))/12;
        impuestoTotal=  impuestoFijo + impuestoVariable;
        sueldoACobrar= sueldoNeto- impuestoTotal;
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        console.log("Su impuesto total es de $ "+impuestoTotal);
        console.log("Su sueldo Neto a cobrar es de $ "+ sueldoACobrar);
    
    }else if((gananciaNeta*13>1166424.03) && (gananciaNeta*13<=1555232.07)){
        impuestoFijo=226480.66/12;
        impuestoVariable=((((gananciaNeta*13)-1166424.03)*0.31))/12;
        impuestoTotal=  impuestoFijo + impuestoVariable;
        sueldoACobrar= sueldoNeto- impuestoTotal;
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        console.log("Su impuesto total es de $ "+impuestoTotal);
        console.log("Su sueldo Neto a cobrar es de $ "+ sueldoACobrar);
    
    }else if(gananciaNeta*13>1555232.07){
        impuestoFijo=347011.16/12;
        impuestoVariable=((((gananciaNeta*13)-1555232.07)*0.35))/12;
        impuestoTotal=  impuestoFijo + impuestoVariable;
        sueldoACobrar= sueldoNeto- impuestoTotal;
        console.log("Su impuesto Fijo es de "+impuestoFijo);
        console.log("Su impuesto Variable es de " + impuestoVariable);
        console.log("Su impuesto total es de $ "+impuestoTotal);
        console.log("Su sueldo Neto a cobrar es de $ "+ sueldoACobrar);
    }else{
        console.log("No le corresponde pagar Impuesto fijo, ni Impuesto Variable");
    };

    //Inserto los resultados

    document.getElementById("impuestoAPagar").innerHTML = "Impuesto Mensual a Pagar: " + "$" +(Math.ceil(impuestoTotal));
    document.getElementById("sueldoACobrar").innerHTML = "Sueldo Neto a Cobrar: " + "$" +  (Math.ceil(sueldoACobrar));
    
    if (sueldoNeto<280792){
        document.getElementById("impuestoAPagar").innerHTML = "Impuesto Mensual a Pagar: " + "$" +(Math.ceil(impuestoTotal));
        document.getElementById("sueldoACobrar").innerHTML = "Sueldo Neto a Cobrar: " + "$" +  (Math.ceil(sueldoNeto));
    }

    //Funcion para limpiar los checkbox

    function uncheckAll() {
        document.querySelectorAll('.calculadora input[type=checkbox]').forEach(function(checkElement) {
            checkElement.checked = false;
        });
    }

    uncheckAll();
    
    //Limpio los Input
    sueldoIngresado.value="";
    cantidadHijos.value="";
});

//Obtener valor dolar
function obtenerDolar(){
    const URLDOLAR="https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLAR)
        .then( respuesta => respuesta.json())
        .then( cotizaciones => {
            const dolarOficial = cotizaciones.oficial;
            console.log(dolarOficial);
            document.getElementById("fila_prueba").innerHTML+=`
            <p>💲Dolar compra: $ ${dolarOficial.value_buy} 💲Dolar venta: $ ${dolarOficial.value_sell}</p>
            `;
        })
        //catch del fetch
        .catch(error => console.log("error"))
}

obtenerDolar();

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


















