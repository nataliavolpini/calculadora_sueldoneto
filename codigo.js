//Validacion Ingreso Sueldo y descuentos

let sueldoIngresado= document.getElementById("ingresoSueldo");
let sueldoNeto=0;
const obraSocial = 0.03;
const inssjp = 0.03;
const jubilacion = 0.11;
let impuestoFijo=0; 
let impuestoVariable=0;
let impuestoTotal=0;
let sueldoACobrar= 0;

sueldoIngresado.onchange=()=>{
    console.log("sueldo ingresado : " + sueldoIngresado.value);
    let descuentos = ((sueldoIngresado.value*obraSocial)+(sueldoIngresado.value*inssjp)+(sueldoIngresado.value*jubilacion));
    console.log("sus descuentos son de: " + descuentos);
    sueldoNeto = sueldoIngresado.value - descuentos;
    console.log("Su sueldo Neto es de: " + sueldoNeto);
    
}


//Validacion Checkbox


const deduccionEspecial = 101026;
const gananciaNoImponible = 21047;
const conyugue = 19621;
const hijo = 9895;
const alquileres = 21047;
const interesesHipotecarios = 1667;
const seguroVida = 2000;
let deducciones = deduccionEspecial+gananciaNoImponible;


let miCheckbox1 = document.getElementById("conyugue");
let miCheckbox2 = document.getElementById("hijos");
let miCheckbox3 = document.getElementById("seguroVida");
let miCheckbox4 = document.getElementById("creditoHipotecario");
let miCheckbox5 = document.getElementById("alquiler");
let cantidadHijos= document.getElementById("cantidadHijos");

cantidadHijos.onchange=()=>{
    console.log("Cantidad de Hijos ingresados : " + cantidadHijos.value);
}



//let cantidad = document.getElementById("sel1"); ->Ver como podemos incorporar la cantidad



miCheckbox1.addEventListener('click', function() {
if(miCheckbox1.checked) {
    deducciones+= conyugue ;
    console.log(deducciones)
}
})

miCheckbox2.addEventListener('click', function() {
if (miCheckbox2.checked) {
    deducciones+= hijo ;
    console.log(deducciones);
}
})


miCheckbox3.addEventListener('click', function() {
if (miCheckbox3.checked) {
    deducciones+= seguroVida ;
    console.log(deducciones)
}
})

miCheckbox4.addEventListener('click', function() {
if (miCheckbox4.checked) {
    deducciones+= interesesHipotecarios ;
    console.log(deducciones)
}
})

miCheckbox5.addEventListener('click', function() {
if (miCheckbox5.checked) {
    deducciones+= alquileres ;
    console.log(deducciones)
}
})


let calculo= document.getElementById("botoncalcular");
let gananciaNeta=0;


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
    document.getElementById("impuestoAPagar").innerHTML = "Impuesto Mensual a Pagar: " + "$" +(Math.ceil(impuestoTotal));
    document.getElementById("sueldoACobrar").innerHTML = "Sueldo Neto a Cobrar: " + "$" +  (Math.ceil(sueldoACobrar));
    
    if (sueldoNeto<280792){
        document.getElementById("impuestoAPagar").innerHTML = "Impuesto Mensual a Pagar: " + "$" + "0";
        document.getElementById("sueldoACobrar").innerHTML = "Sueldo Neto a Cobrar: " + "$" +  (Math.ceil(sueldoNeto));
    }
    
    
    
    function uncheckAll() {
        document.querySelectorAll('.calculadora input[type=checkbox]').forEach(function(checkElement) {
            checkElement.checked = false;
        });
    }


});























