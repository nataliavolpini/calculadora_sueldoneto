
//Ingreso del sueldo bruto

let sueldoBruto= parseFloat(prompt("Por favor ingrese su sueldo Bruto"));
console.log("Su sueldo ingresado es " 
+sueldoBruto);

const obraSocial = 0.03;
const inssjp = 0.03;
const jubilacion = 0.11;

let descuentos = ((sueldoBruto*obraSocial)+(sueldoBruto*inssjp)+(sueldoBruto*jubilacion));

console.log("El total de descuentos es "+ descuentos);

let sueldoNetoDescuentos = sueldoBruto - ((sueldoBruto*obraSocial)+(sueldoBruto*inssjp)+(sueldoBruto*jubilacion));

console.log("Su sueldo neto de descuentos es "+sueldoNetoDescuentos);

//Deducciones MENSUALES por Impuesto a las Ganancias


const gananciaNoImponible = 21047;
const conyugue = 19621;
const hijo = 9895;
const hijoIncapacitado = 19790;
const personalDomestico = 21047;
const alquileres = 21047;
const interesesHipotecarios = 1667;
const seguroVida = 2000;
const prepaga = 14525;
const honorariosMedicos = 14525;


//Solo hice la prueba con tres deducciones
let totalDeducciones=0;

if(sueldoBruto>=280792){
    function pregunta(tipo){
        return confirm("Confirma la deduccion: " + tipo);
    }
    
    if(pregunta("Tiene a su cargo un conyugue?")){
        totalDeducciones=totalDeducciones+conyugue;
    }
    
    if(pregunta("tiene ganancia no imponible?")){
        totalDeducciones=totalDeducciones+gananciaNoImponible;
    }
    
    console.log("El total de sus deducciones es de: "+ totalDeducciones);
    
    
}

let gananciaNeta= sueldoNetoDescuentos-totalDeducciones;
    console.log("Su Ganancia Neta Mensual es: " + gananciaNeta); 

//Calculo del Impuesto Fijo a las Ganancias

let impuestoFijo=0; 

if (gananciaNeta<=97202){
    impuestoFijo=0;
    
}else if((gananciaNeta*13>97202) && ((gananciaNeta*13)/12<=194404.01)){
    impuestoFijo=4860.10/12;
    console.log("Su impuesto Fijo es de "+impuestoFijo)
    
}else if((gananciaNeta*13>194404.02) && (gananciaNeta*13<=291606.01)){
    impuestoFijo=13608.28/12;
    console.log("Su impuesto Fijo es de "+impuestoFijo)
    
}else if((gananciaNeta*13>291606.01) && (gananciaNeta*13<=388808.02)){
    impuestoFijo=25272.52/12;
    console.log("Su impuesto Fijo es de "+impuestoFijo)
}else if((gananciaNeta*13>388808.02) && (gananciaNeta*13<=583212.02)){
    impuestoFijo=39852.82/12;
    console.log("Su impuesto Fijo es de "+impuestoFijo)
}else if((gananciaNeta*13>583212.02) && (gananciaNeta*13<=777616.02)){
    impuestoFijo=76789.58/12;
    console.log("Su impuesto Fijo es de "+impuestoFijo)
}else if((gananciaNeta*13>777616.02) && (gananciaNeta*13<=1166424.03)){
    impuestoFijo=121502.50/12;
    console.log("Su impuesto Fijo es de "+impuestoFijo)
}else if((gananciaNeta*13>1166424.03) && (gananciaNeta*13<=1555232.07)){
    impuestoFijo=226480.66/12;
    console.log("Su impuesto Fijo es de "+impuestoFijo)
}else if(gananciaNeta*13>1555232.07){
    impuestoFijo=347011.16/12;
    console.log("Su impuesto Fijo es de "+impuestoFijo)
}




